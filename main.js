var SpeechRecognition = window.SpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.result[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

}