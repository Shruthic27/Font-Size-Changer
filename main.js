var nx = 0
var ny = 0
var lwx = 0
var lwy = 0
var rwx = 0
var rwy = 0
var difference
function setup(){
    video=createCapture(VIDEO)
    canvas=createCanvas(690,490)
    canvas.position(700,125)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses);
}

function draw() {
    background(234, 0, 255)
    textSize(difference)
    fill(255, 166, 0)
    text("Shruthi", 75, 350)
}

function modelLoaded() {
    console.log("Posenet is Initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nx = results[0].pose.nose.x
        ny = results[0].pose.nose.y

        lwx = results[0].pose.leftWrist.x
        lwy = results[0].pose.leftWrist.y
        rwx = results[0].pose.rightWrist.x
        rwy = results[0].pose.rightWrist.y

        difference = floor(lwx - rwx)

        document.getElementById("fs").innerHTML= difference
    }
}