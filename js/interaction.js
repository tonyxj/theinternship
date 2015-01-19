$('#overlay, #end-scenario1, #end-scenario2, .message-buttons, #overlay2, .smaller-company, .larger-company, .entry2, .mention-buttons').hide();
$('.decline-request').click(function(e){
	e.preventDefault();
	$('#overlay').fadeIn(200);

	$('#overlay').on('click', '#confirm-decline', function(){
		$('#request1').hide();
		$('#end-scenario1').fadeIn(300);
		$('.notify').removeClass('notify');
	});

	$("#overlay").click(function(){
		$('#overlay').fadeOut(200);
	});
});

$('.accept-request').click(function(e){
	e.preventDefault();
	$('.notify').removeClass('notify');
	$('.social-buttons').fadeOut();
	$('.entry-content p').fadeOut(function(){
		$(this).text('is now a contact.');
		$(this).fadeIn(function(){
			setTimeout(function(){
				$('.messages').addClass('notify');
			}, 350);
		});
	});

	$('.messages').click(function(){
		$('.current-tab').removeClass('current-tab');
		$(this).addClass('current-tab');
		$('.entry1').hide();
		$('.entry-content .invite-message').text('Hi Emily, this is Liz from Luvant. We\'re a company that specializes in placing students in great internships at technology companies. I noticed that you\'re seeking for summer 2015. We have two opportunities that might suit you. One is at a 10 people startup based in Mountain View. The other is fast growing 100 people company based in Santa Monica. Which one do you prefer? Let me know if you\'re interested.');
		$('.message-buttons').show();
		$('.entry1').fadeIn();
	})
});

$('.entry-content').on('click', '.message-buttons .reply-message', function(e){
	e.preventDefault();
	$('#overlay2').fadeIn(200);
	
	$('#overlay2').on('click', '#smaller-choice', function(){
		$('.larger-company').hide();
		$('.smaller-company').show();
		$('.entry1 .message-buttons').hide();
		$('.entry-content2').addClass('entry-content');
		$('.entry2').fadeIn(function(){
			$('#end-scenario2').fadeIn();
		});

	});
	$('#overlay2').on('click', '#larger-choice', function(){
		$('.smaller-company').hide();
		$('.larger-company').show();
		$('.entry1 .message-buttons').hide();
		$('.entry-content2').addClass('entry-content');
		$('.entry2').fadeIn(function(){
			$('.messages').removeClass('notify');
			setTimeout(function(){
				$('.notifications').addClass('notify');
			}, 250);
		});
		$('.notifications').click(function(){
			$('.entry').hide();
			$('.messages').removeClass('current-tab').unbind('click');
			$(this).addClass('current-tab');
			$('p.invite-message').text('mentioned you in a post.');
			$('.been-mentioned, .mention-buttons').show();
			$('.entry1').fadeIn();
		});
	});
	$('.view-post').click(function(){
		window.location.replace("main-post.html");
	});
	$("#overlay2").click(function(){
		$('#overlay2').fadeOut(200);
	});
});
$('.inbox-message').on('click', '.retry-scenario2', function(e){
	e.preventDefault();
	$('#end-scenario2, .entry2').hide();
	$('.entry1 .message-buttons').show();
});
