$(document).on('ready' , function(){
	console.log('activate!')
	$('.icon').on('mouseover' , function(){
		console.log('hello')
		$(this).animate(addClass('fa-flip-horizontal'));
	})
});