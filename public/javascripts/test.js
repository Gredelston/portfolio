$(function() {
	console.log('loaded');
	$('.acc').accordion({
		collapsible: true,
		heightStyle: "Content"
	});

	$('p').click(function() {
		$('p').css('background-color', '#FFAA00');
		$(this).css('background-color', '#A0A9FF');
	})
});