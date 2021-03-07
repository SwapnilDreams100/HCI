async function main(){
	// await get_speech('Is your vision impaired?')
	await listen_speech()
}
// $(document).on("click", main)
main()

var proc_init = true;
var transcript = null;

async function listen_speech(){

	const SpeechRecognition = webkitSpeechRecognition;


	const recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = false;

	recognition.onstart = function() {
		console.log('started')
	}
	recognition.onresult = event => {
		transcript = event.results[0][0].transcript;
		console.log('r', event.results)
		process(transcript);
		recognition.stop()
	}
	recognition.onend = event =>{
		recognition.start()
	}
	recognition.start()
}

async function process(transcript){
	console.log(transcript)
	var resp  = ''
	logging_left(transcript)
	if (transcript.includes("yes")){
		$('#init').hide();
		
		$('#visual_div').show();
		resp = 'Thanks. We will now start talking'
		
	}
	else if (transcript.includes("no")) {
		window.location.href = "hearing_main.html";	
	}
	else{
		resp = "Sorry I could not understand you. Please repeat yourself"
	}
	logging_right(resp)
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

// async function get_speech(msg) {
    
//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
    
//     speech.text = msg;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
    
//     window.speechSynthesis.speak(speech);
//     return new Promise(resolve => {
// 	    speech.onend = resolve;
// 	});
// }