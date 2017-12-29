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

	var $popUp = $('.pop-up');
	function ShowVideo() {
		$popUp.html('<iframe id="video" src="https://www.youtube.com/embed/p1YiDKlSe8k?rel=0&autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="close-btn">&#215;</div>')
		$popUp.fadeIn(400);

	}
	$('.main-video').click(function(e) {
		e.preventDefault();
		ShowVideo()
		$('.close-btn').click(function() {
			console.log('ok')
			$('.pop-up').fadeOut(400);
			setTimeout(function () {
				$('.pop-up').html('');
			},400);
		});
	});
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { 
	            return false;
	          } else {
	            $target.attr('tabindex','-1');
	            $target.focus();
	          };
	        });
	      }
	    }
	  });

})