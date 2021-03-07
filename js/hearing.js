var input = document.getElementById("add_text");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("send_it").click();
  }
});

logging_right('Hello how can I help you?')

async function process(transcript){

	var response = null;
  logging_left(transcript);
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
   logging_right(response)
   document.getElementById('add_text').value = '';
}

function logging_left(input){
  // $('#test').append("<li >"+input+"</li>");
  $(".msg_history").append('<div class="incoming_msg" aria-hidden="true"><div class="received_msg"><div class="received_withd_msg"><p>'+input+'</p></div></div>')
  // $("#ul_test").append('<li class="media chat-input"><div class="media-body"><div class="media"><div class="media-body">'+input+'</div></div></div></li>');
}

function logging_right(resp){
  $(".msg_history").append('<div class="outgoing_msg"><div class="sent_msg"><p>'+resp+'</p></div></div>')
  // $('#test').append("<li >"+resp+"</li>");
  // $("#ul_test").append('<li class="media"><div class="media-body chat-output"><div class="media"><div class="media-body">'+resp+'</div></div></div></li>');
                            
  // $(".media-list").append('<li class="media chat-input"><div class="media-body"><div class="media"><div class="media-body">'+resp+'</div></div></div></li>');
}
