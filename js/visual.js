async function process(transcript){

	var response = null;
	switch(transcript) {
      case "hello":
         response = "hi, how are you doing?"; break;
      case "what'syourname":
         response = "My name's Ava.";  break;
      case "howareyou":
         response = "I'm good. Hope you are having a great day!"; break;
      case "whattimeisit":
         response = new Date().toLocaleTimeString(); break;
      case "stop":
         response = "OK Bye! Call me anytime!";
   }
   if (!response) {
      window.open(`http://google.com/search?q=${transcript.replace("search", "")}`, "_blank");
      response = "I found some information for " + transcript;
   }
   await get_speech(response);
   console.log(transcript, response)

}
async function get_speech(msg) {
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    return new Promise(resolve => {
	    speech.onend = resolve;
	});
}
function logging(input, resp){
	$('#vision_div').append("<div class='chat_logs1'>"+input+"</div>");
	$('#vision_div').append("<br\\>");
	$('#vision_div').append("<br\\>");
	$('#vision_div').append("<div style='chat_logs2'>"+resp+"</div>");

}
