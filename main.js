//https://teachablemachine.withgoogle.com/models/mnn8EUjug/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/mnn8EUjug/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresults);
}










 

