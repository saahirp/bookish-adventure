function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(500, 500);
    canvas.position('center');
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}

function draw(){

}

function modelLoaded(){
    console.log("Model Loaded.")
}