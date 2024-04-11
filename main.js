x = 0;
y = 0;
desenharCirculo = "";
desenharRetangulo = "";
let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();





function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {

}
function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo: Pode Falar";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)
    conteudo = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "O sistema está ouvindo: Pode Falar";
}