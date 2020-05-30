( function(window){
	var hellospeaker={};
	var speakword="hello";
	hellospeaker.speak = function(names) {
  console.log(speakword + " " +names);
}
window.hellospeaker=hellospeaker;
})(window);