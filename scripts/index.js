"use strict";

const video = new Video({
    wrapperID: "video-wrapper",
    videoSrc: "static/London.mp4",
    posterSrc: "static/london_wall.jpg",
    absolute: true,
    hideControlsOnPlay: true,
    progressColor: "white"
});

console.log(video);
