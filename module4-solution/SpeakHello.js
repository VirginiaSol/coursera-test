(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.name = "";
  helloSpeaker.speakHello = function (){
    console.log(speakWord + " " + helloSpeaker.name);
  }
  window.helloSpeaker = helloSpeaker;
})(window)

