var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = true;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	var slide = document.querySelector("#slider");
	var volume = document.querySelector("#volume");
	volume.innerHTML = slide.value;
	video.volume = slide.value/100;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}	
});

document.querySelector("#mute").addEventListener("click", function() {
	var text = document.querySelector("#mute");
	if(video.muted == true){
		video.muted = false;
		text.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		text.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	var slide = document.querySelector("#slider");
	var volume = document.querySelector("#volume");
	console.log(slide.value);
	volume.innerHTML = slide.value;
	video.volume = slide.value/100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	if(video.className == "video"){
		video.className = "video oldSchool";
	}	
});

document.querySelector("#orig").addEventListener("click", function() {
	if(video.className == "video oldSchool"){
		video.className = "video";
	}	
});




