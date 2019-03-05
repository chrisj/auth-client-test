const socket = new WebSocket("wss://dev.dynamicannotationframework.com/auth/authorize");


socket.onopen = function (event) {
	console.log('open');
};

let auth_popup = null;

socket.onmessage = function (msg) {
	// console.log(msg.data);
	if (msg.data.startsWith('http')) {
		auth_popup = window.open(msg.data);
		// window.open('http://localhost:5000/auth/oauth2callback');
	} else {
		document.body.innerText = msg.data;
		auth_popup.close()
	}
}