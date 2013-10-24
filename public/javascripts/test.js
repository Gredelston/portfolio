$(function() {

	console.log('loaded'); // sanity check	

	$('.acc').accordion({
		collapsible: true,
		heightStyle: "Content"
	});

	$('.acc div p').click(function() {
		$('.acc div p').css('background-color', '#FFAA00');
		$(this).css('background-color', '#A0A9FF');
		$.get('/index/getProjects', function(data){
			$('#blurbBox').html(data);
		});
	});

});