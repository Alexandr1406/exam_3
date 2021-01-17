'use strict';

(function ($) {
	$(document).ready(function () {

		//Header 
		$(window).scroll(() => {
			if ($(window).scrollTop() > 50) {
				$('.header__menu').addClass('header__scroll');
			} else {
				$('.header__menu').removeClass('header__scroll');
			}
		});
	});
})(jQuery);
