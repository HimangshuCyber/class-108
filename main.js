//TEACHABLE MACHINE LINK 
//https://teachablemachine.withgoogle.com/models/6nGIixHqW/

document.getElementById('1').style.display = "none";
document.getElementById('2').style.display = "none";
document.getElementById('3').style.display = "none";
//Functions
function detect(){
    navigator.mediaDevices.getUserMedia({audio: true}); //Asking the microphone permission
    sounds = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6nGIixHqW/model.json", modelReady);
}
function modelReady() {
    sounds.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('d').innerHTML = "Sound detected - " + results[0].label;
        document.getElementById('a').innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        
        if(results[0].label == "Background Noise"){
            document.getElementById('1').style.display = "inline-block";
            document.getElementById('2').style.display = "inline-block";
            document.getElementById('3').style.display = "inline-block";
        }
        if(results[0].label == "Clap"){
            document.getElementById('3').style.display = "none";
            document.getElementById('2').style.display = "none";
            document.getElementById('1').style.display = "inline-block";
        }
        else if(results[0].label == "Snap"){
            document.getElementById('3').style.display = "none";
            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "inline-block";
        }
        else if (results[0].label == "song"){
            document.getElementById('3').style.display = "inline-block";
            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "none";
        }
    }
}