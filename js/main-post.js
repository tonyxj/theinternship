$('.entry0').hide();
setTimeout(function(){
	$('.entry0').slideDown();
}, 500);

$('#i-like').click(function(e){
	e.preventDefault();
	$(this).hide().fadeIn().text('Like (1)').addClass('bounce');
});