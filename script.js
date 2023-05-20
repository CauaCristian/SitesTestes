var usuarios = ["caua", "carlo"]
function inseriruser(nome){
    let promise = new Promise (function(resolve, reject){

        setTimeout(function (){
            usuarios.push(nome);
            let error = false;
            if (!error){
                return resolve();
            }
            else {
                return reject({msg:"erro"})
            }

        }, 1000);



    });
    return promise
    
    
}
function mostrarusers(){
    console.log(usuarios);
};
async function executar(){
     await inseriruser("gaby");
     mostrarusers();
}
executar()
