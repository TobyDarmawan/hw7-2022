var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	var volume_val = 1;
	// video.setAttribute('type', 'video/mp4');
var play = document.getElementById("play");
	play.onclick = function playButton(){
		console.log("Play Video\n");
	// var play = document.getElementById("play");
	video.volume = volume_val;
	video.play();
	
};
var pause = document.getElementById("pause");
	pause.onclick = function pauseButton(){
		console.log("Pause Video\n");
	// var play = document.getElementById("play");
	video.pause();
};
var slower = document.getElementById("slower");
	slower.onclick = function slowVideo(){
		video.playbackRate = video.playbackRate*0.9;
		console.log("Slow down Video\n");
		console.log("Speed is "+video.playbackRate+"\n");
	};
var faster = document.getElementById("faster");
	faster.onclick = function speedVideo(){
		video.playbackRate = video.playbackRate*(1/0.9);
		console.log("Speed up Video\n");
		console.log("Speed is "+video.playbackRate+"\n");
	};
var skip = document.getElementById("skip");
skip.onclick = function skipVideo(){
		console.log("Skip ahead\n");
	if((video.currentTime + 10) > video.duration){
		video.currentTime = 0;
	}else{
	video.currentTime += 10;
	}
	console.log("Video current time is "+video.currentTime+"\n");
};

var mute = document.getElementById("mute");
mute.onclick = function muteVideo(){
	if(mute.innerHTML === "Mute"){
			video.volume = 0;
			console.log("Video muted\n");
		mute.innerHTML = "Unmute";	
		}else{
			video.volume = volume_val;
			console.log("Video unmuted\n");
			mute.innerHTML = "Mute";
		}
};

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");
	slider.onchange = function changeVolume(){
		video.volume = slider.value/100;
		volume_val = video.volume;
		console.log("The current value is "+video.volume+"\n");
		volume.innerHTML = video.volume*100+"%";
	};
});

var vintage = document.getElementById("vintage");
vintage.onclick = function vintageMode(){
	video.classList.add("oldSchool");
};
var original = document.getElementById("orig");
original.onclick = function originalMode(){
	video.classList.remove("oldSchool");
};
