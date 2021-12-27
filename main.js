function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GOeh056Ri/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults (error,results){
    if (error) {
        console.error (error)
    }
    else {
        console.log (results);
        document.getElementById ("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById ("result_confidence").innerHTML="Accuracy- "+(results[0].confidence *100).toFixed(2)+"%";
        img1=document.getElementById("ear");
        if(results[0].label=="horse"){
            img1.src="horse.gif";
        }
        else if(results[0].label=="lion"){
            img1.src="lion.png";
            
        }
        else if(results[0].label=="elephant"){
            img1.src="elephant.gif";
            
        }
        else {
            img1.src="ear.gif";
            
        }
    }

    

}