var modalCall = document.querySelector('.popup-call');
var triggerCall = document.querySelectorAll('.js-open-popup-call');
var closeButtonCall = document.querySelector('.popup-call__close');

function toggleModalCall() {
	modalCall.classList.toggle('popup-call--opened');
	body.classList.toggle('scroll-hidden');
}

function windowOnClickCall(event) {
	if (event.target === modalCall) {
		toggleModalCall();
	}
}

for(var i = 0; i < triggerCall.length; i++) {
	triggerCall[i].onclick = toggleModalCall;
}

if (closeButtonCall !== null) {
	closeButtonCall.addEventListener('click', toggleModalCall);
}

window.addEventListener('click', windowOnClickCall);
