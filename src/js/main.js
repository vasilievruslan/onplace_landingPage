//= slick.js

$(function () {
	
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });


	function validateEmail(email) {
	    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	    return emailReg.test( email );
	}

	$('.subscribesect__btn').click(function(e) {
		e.preventDefault();
    	var email = $('.subscribesect__input').val();
    	( !validateEmail(email) ) ? alert('invalid email') : $.post('https://api.telegram.org/bot523871222:AAH_DRAiYnL-wBqm_qjTtwBao3O34RyGCyo/sendMessage?chat_id=-248568469&text=' + email, function(data, textStatus, xhr) {
				
			}).done(function () {
				console.log('ok')
				setTimeout(function () {
					$('.subscribesect__input').val('');
				}, 400); 
			});
	});


	function ShowVideo(a) {
		popUp.html()
		popUp.fadeIn(400);

	}

})