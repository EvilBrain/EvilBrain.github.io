var i = 0;
var txt = 'python3 connect.py';
var output = "<br>Erreur !<br>Page introuvable";
var big404 = `
██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝                                                  
`;
var returned = "Cliquez ici pour retourner sur la page principale..."
var speed = 100;

function main() {
    var cursor1animated = setInterval(() => {
        cursorEffect("cursor1");
    }, 1000);
    setTimeout(() => {
        typeWriter()
    }, 3000);
    setTimeout(() => {
        clearInterval(cursor1animated);
        document.getElementById("cursor1").hidden = true;
    }, 6000);
    setTimeout(() => {
        document.getElementById("output").innerHTML = output;
        document.getElementById("big-404").innerHTML = big404;
    }, 8000)
    setTimeout(() => {
        document.getElementById("return").innerHTML = returned;
    }, 10000);
}

function typeWriter() {
    (i < txt.length) ;{
        document.getElementById("caption").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function cursorEffect(cursor) {
    setTimeout(() => {
        document.getElementById(cursor).hidden = false;
    }, 500);
    setTimeout(() => {
        document.getElementById(cursor).hidden = true;
    }, 1000);
}