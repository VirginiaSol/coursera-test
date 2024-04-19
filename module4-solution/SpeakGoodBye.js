(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.name = "";
  byeSpeaker.speakBye = function () {
    console.log(speakWord + " " + byeSpeaker.name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
