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

    $('.subscribesect__btn').click(function(e) {
    	// e.preventDefault();
    	var text = $('.subscribesect__input').val();
    	$.post('https://api.telegram.org/bot523871222:AAH_DRAiYnL-wBqm_qjTtwBao3O34RyGCyo/sendMessage?chat_id=-248568469&text=' + text, function(data, textStatus, xhr) {
    		
    	}).done(function () {
    		console.log('ok')
    	});
    })

    $('.subscribesect__btn').blur(function() {
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(this).val())){
				$(this).css({'border' : '1px solid #569b44'});
				$('#valid').text('Верно');
			} else {
				$(this).css({'border' : '1px solid #ff0000'});
				$('#valid').text('Не верно');
			}
		} else {
			$(this).css({'border' : '1px solid #ff0000'});
			$('#valid').text('Поле email не должно быть пустым');
		}
	});


})