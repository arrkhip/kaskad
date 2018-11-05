$('input[type=tel]').inputmask({
	"mask": "+7 (999) 999-99-99"
});

new WOW().init();

if($(".js-count").length>0) {
    var show = true;
    var countbox = ".js-count";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight(); 
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(countbox).spincrement({
              thousandSeparator: " ",
              duration: 1200
          });

            show = false;
        }
    });
}
$('.card-goods__preview-item a').click(function(e) {
	e.preventDefault();
	$('.card-goods__banner img').attr('src', $(this).attr('href'));
});

$('.card-goods__preview-item').click(function() {
		$('.card-goods__preview-item').removeClass('card-goods__preview-item--active')
	 $(this).addClass("card-goods__preview-item--active");
});
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__inner').toggleClass('header__inner--open');
});

$('.header__nav-item a').click(function() {
   $('.header__switch').removeClass('header__switch--open');
   $('.header__inner').removeClass('header__inner--open');
});


 
	

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

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  dotsClass: 'slider__dots'
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjYXJkLWdvb2RzL2NhcmQtZ29vZHMuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwicG9wdXAvcG9wdXAuanMiLCJwb3B1cC1jYWxsL3BvcHVwLWNhbGwuanMiLCJzbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnaW5wdXRbdHlwZT10ZWxdJykuaW5wdXRtYXNrKHtcclxuXHRcIm1hc2tcIjogXCIrNyAoOTk5KSA5OTktOTktOTlcIlxyXG59KTtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG5pZigkKFwiLmpzLWNvdW50XCIpLmxlbmd0aD4wKSB7XHJcbiAgICB2YXIgc2hvdyA9IHRydWU7XHJcbiAgICB2YXIgY291bnRib3ggPSBcIi5qcy1jb3VudFwiO1xyXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsIGxvYWQgcmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNob3cpIHJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgdmFyIHdfdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpOyBcclxuICAgICAgICB2YXIgZV90b3AgPSAkKGNvdW50Ym94KS5vZmZzZXQoKS50b3A7IFxyXG4gICAgICAgIHZhciB3X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTsgXHJcbiAgICAgICAgdmFyIGRfaGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7IFxyXG4gICAgICAgIHZhciBlX2hlaWdodCA9ICQoY291bnRib3gpLm91dGVySGVpZ2h0KCk7IFxyXG4gICAgICAgIGlmICh3X3RvcCArIDUwMCA+PSBlX3RvcCB8fCB3X2hlaWdodCArIHdfdG9wID09IGRfaGVpZ2h0IHx8IGVfaGVpZ2h0ICsgZV90b3AgPCB3X2hlaWdodCkge1xyXG4gICAgICAgICAgICAkKGNvdW50Ym94KS5zcGluY3JlbWVudCh7XHJcbiAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IFwiIFwiLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMjAwXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNob3cgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIiQoJy5jYXJkLWdvb2RzX19wcmV2aWV3LWl0ZW0gYScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0JCgnLmNhcmQtZ29vZHNfX2Jhbm5lciBpbWcnKS5hdHRyKCdzcmMnLCAkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XHJcbn0pO1xyXG5cclxuJCgnLmNhcmQtZ29vZHNfX3ByZXZpZXctaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmNhcmQtZ29vZHNfX3ByZXZpZXctaXRlbScpLnJlbW92ZUNsYXNzKCdjYXJkLWdvb2RzX19wcmV2aWV3LWl0ZW0tLWFjdGl2ZScpXHJcblx0ICQodGhpcykuYWRkQ2xhc3MoXCJjYXJkLWdvb2RzX19wcmV2aWV3LWl0ZW0tLWFjdGl2ZVwiKTtcclxufSk7IiwiJCgnLmpzLWhlYWRlcl9fc3dpdGNoJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLmhlYWRlcl9fc3dpdGNoJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fc3dpdGNoLS1vcGVuJyk7XHJcblx0JCgnLmhlYWRlcl9faW5uZXInKS50b2dnbGVDbGFzcygnaGVhZGVyX19pbm5lci0tb3BlbicpO1xyXG59KTtcclxuXHJcbiQoJy5oZWFkZXJfX25hdi1pdGVtIGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgJCgnLmhlYWRlcl9fc3dpdGNoJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fc3dpdGNoLS1vcGVuJyk7XHJcbiAgICQoJy5oZWFkZXJfX2lubmVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9faW5uZXItLW9wZW4nKTtcclxufSk7XHJcblxyXG5cclxuIFxyXG5cdFxyXG4iLCJ2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxudmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XHJcbnZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW9wZW4tcG9wdXAnKTtcclxudmFyIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcblx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgncG9wdXAtLW9wZW5lZCcpO1xyXG5cdGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsLWhpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcclxuXHRcdHRvZ2dsZU1vZGFsKCk7XHJcblx0fVxyXG59XHJcblxyXG5mb3IodmFyIGkgPSAwOyBpIDwgdHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG5cdHRyaWdnZXJbaV0ub25jbGljayA9IHRvZ2dsZU1vZGFsO1xyXG59XHJcblxyXG5pZiAoY2xvc2VCdXR0b24gIT09IG51bGwpIHtcclxuXHRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XHJcbiIsInZhciBtb2RhbENhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2FsbCcpO1xyXG52YXIgdHJpZ2dlckNhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtb3Blbi1wb3B1cC1jYWxsJyk7XHJcbnZhciBjbG9zZUJ1dHRvbkNhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2FsbF9fY2xvc2UnKTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsQ2FsbCgpIHtcclxuXHRtb2RhbENhbGwuY2xhc3NMaXN0LnRvZ2dsZSgncG9wdXAtY2FsbC0tb3BlbmVkJyk7XHJcblx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2tDYWxsKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxDYWxsKSB7XHJcblx0XHR0b2dnbGVNb2RhbENhbGwoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZvcih2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyQ2FsbC5sZW5ndGg7IGkrKykge1xyXG5cdHRyaWdnZXJDYWxsW2ldLm9uY2xpY2sgPSB0b2dnbGVNb2RhbENhbGw7XHJcbn1cclxuXHJcbmlmIChjbG9zZUJ1dHRvbkNhbGwgIT09IG51bGwpIHtcclxuXHRjbG9zZUJ1dHRvbkNhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbENhbGwpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrQ2FsbCk7XHJcbiIsIiQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBkb3RzQ2xhc3M6ICdzbGlkZXJfX2RvdHMnXHJcbn0pOyJdfQ==
