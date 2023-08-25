const video = require("@vimeo/player");


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iFrame = document.querySelector("iframe")
const LOCAL_KEY = "videoPlayer-current-time";

const player = new Player(iFrame)  


const onPlay = (data) => {
localStorage.setItem(LOCAL_KEY, JSON.stringify(data.seconds)); 
};

player.on('timeupdate',throttle(onPlay, 1000)); 
player.setCurrentTime(localStorage.getItem(LOCAL_KEY));