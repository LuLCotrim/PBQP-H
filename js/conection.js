export class connection{
    constructor(){
        this.name;
        this.message;
        this.origem;
        this.empresa;
        this.segmento;
        this.telefone_celular;
        this.telefone_fixo;
        this.cep;
        this.cidade;
        this.estado;
        this.email;
    }
    cadastrar_usuario(origem, name, origem, empresa, segmento, telefone_celular, telefone_fixo, cep, cidade, estado, email, message){
        return new Promise((resolve, reject) => {
            fetch("http://localhost:8080/api/email/send",{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }, 
                method: "POST",
                body: JSON.stringify({
                    origem: origem,
                    name: name,
                    empresa: empresa,
                    segmento: segmento,
                    telefone_celular: telefone_celular,
                    telefone_fixo: telefone_fixo,
                    cep: cep,
                    cidade: cidade,
                    estado: estado,
                    email: email,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
        });
        
    }
}