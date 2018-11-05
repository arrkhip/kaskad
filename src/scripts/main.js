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