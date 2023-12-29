function preload() {
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(665, 450);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 450);
}