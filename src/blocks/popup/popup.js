var body = document.querySelector('body');
var modal = document.querySelector('.popup');
var trigger = document.querySelectorAll('.js-open-popup');
var closeButton = document.querySelector('.popup__close');

function toggleModal() {
	modal.classList.toggle('popup--opened');
	body.classList.toggle('scroll-hidden');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

for(var i = 0; i < trigger.length; i++) {
	trigger[i].onclick = toggleModal;
}

if (closeButton !== null) {
	closeButton.addEventListener('click', toggleModal);
}

window.addEventListener('click', windowOnClick);
