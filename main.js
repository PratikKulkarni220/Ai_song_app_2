function preload(){
    music =loadSound("music.mp3");
    music =loadSound('music_2.mp3');
}


function setup(){
    canvas = createCanvas(780, 600);

    canvas.position(440, 400);

     video = createCapture(VIDEO);

     video.hide();
}

function draw(){
    image(video, 0 , 0 , 780 , 600);
}