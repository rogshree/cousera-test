( function (window){  
 var byespeaker={};
 var speakword="good bye";
byespeaker.speak = function(names) {
  console.log(speakword + " " +names);
}
window.byespeaker=byespeaker;
})(window);