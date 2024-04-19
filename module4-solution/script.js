var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i=0; i<names.length; i++) {
  if (names[i].toLowerCase().charAt(0) == "j"){
    byeSpeaker.name = names[i];
    byeSpeaker.speakBye();
  }else {
    helloSpeaker.name = names[i];
    helloSpeaker.speakHello();
 
  }
}

