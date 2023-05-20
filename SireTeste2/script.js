function mudartema2(){
    let header = document.getElementById("header");
    let footer= document.getElementById("footer");
    let logo= document.getElementById("logo");
    let setadireita = document.getElementById("setadireita")
    let setaesquerda = document.getElementById("setaesquerda")
    let ul = document.getElementById("ul")
    let pacotes1 = document.getElementById("pacotes1")
    let pacotes2 = document.getElementById("pacotes2")
    let imgpacotes1 = document.getElementById("imgpacotes1")

    header.style.backgroundColor = "#7A0111"
    footer.style.backgroundColor = "#7A0111"
    logo.src = "logo2.png"
    setadireita.style.display = "none"
    setaesquerda.style.display = "inline"
    ul.className = "ul2"

    pacotes1.style.display = "none"
    pacotes2.style.display = "none"
    imgpacotes1.style.display = "none"
}
function mudartema1(){
    let header = document.getElementById("header")
    let footer= document.getElementById("footer")
    let logo= document.getElementById("logo")
    let setadireita = document.getElementById("setadireita")
    let setaesquerda = document.getElementById("setaesquerda")
    let ul = document.getElementById("ul")
    let pacotes1 = document.getElementById("pacotes1")
    let pacotes2 = document.getElementById("pacotes2")
    let imgpacotes1 = document.getElementById("imgpacotes1")


    header.style.backgroundColor = "#18295A"
    footer.style.backgroundColor = "#18295A"
    logo.src = "logo1.png"
    setadireita.style.display = "inline"
    setaesquerda.style.display = "none"
    ul.className = "ul1"

    pacotes1.style.display = "block"
    pacotes2.style.display = "block"
    imgpacotes1.style.display = "block"

}