/*JQuery */
$(function () {

	$(".bienvenue").fadeIn(2600);
	$('.btn-dark').click(function () {
		$(this).toggleClass('bg-black');
	});
	/* COULEUR ICON MENU */
	$(window).scroll(function () {
		if ($(window).scrollTop() > 650) {
			$('.btn-dark').addClass('btn-scroll');
		} else {
			$('.btn-dark').removeClass('btn-scroll');
		}

	});
	/* COULEUR ICON MENU */



	/* COULEUR ICON MENU */
	$('.img1').hover(function () {
		$('.p1').toggleClass('hover-grid');
	});
	$('.img2').hover(function () {
		$('.p2').toggleClass('hover-grid');
	});
	$('.img3').hover(function () {
		$('.p3').toggleClass('hover-grid');
	});
	$('.txt4').hover(function () {
		$('.p4').toggleClass('hover-grid');
	});
	$('.txt5').hover(function () {
		$('.p5').toggleClass('hover-grid');
	});
});


/*AOS */

AOS.init({
	duration: 8200,
});

// external js: masonry.pkgd.js

$('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: 160,
	gutter: 20
});
