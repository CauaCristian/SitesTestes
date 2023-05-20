
var s = 0;
var m = 0;
var h = 0;
function cronometrar() {
    let h1 = document.getElementById("h1");
    h1.innerHTML = "0" + s + ")";
    s++
    if (s >= 10  ){
        let h1 = document.getElementById("h1");
        h1.innerHTML = s + ")";
    }
    if (s >= 60  ){
        let h2 = document.getElementById("h2");
        m++
        h2.innerHTML = "0" + m +":";
        h1.innerHTML = "00:";
        s = 0 
    }
    if (m >= 10  ){
        let h2 = document.getElementById("h2");
        h2.innerHTML = m +":";

    }
    if (m >= 60  ){
        let h3 = document.getElementById("h3");
        h++
        h3.innerHTML =  "("+"0" + h +":";
        h2.innerHTML = "00:";
        m = 0
    }
    if (h >= 10  ){
        let h3 = document.getElementById("h3");
        h3.innerHTML = "("+ h +":";
    }
}
function iniciar() {
    intervalo = setInterval(cronometrar,1000);
}
function parar(){
    clearInterval(intervalo);
}
function zerar(){
    s = 0;
    m = 0;
    h = 0;
    clearInterval(intervalo);
    h1.innerHTML = "0" + s + ")";
    h2.innerHTML = "0" + m +":";
    h3.innerHTML = "(" + "0" + h +":";
}

   



