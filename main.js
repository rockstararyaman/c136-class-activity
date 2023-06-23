video = "";
status = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
    video.position(523, 250);
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.position(523, 250);
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded () {
    console.log("Model loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
    status = true;
}