$(function() {

	console.log('loaded'); // sanity check	

	$('.acc').accordion({
		collapsible: true,
		heightStyle: "Content"
	});

	$('.acc div p').click(function() {
		var projName = $(this).html();
		$('.acc div p').css('background-color', '#FFAA00');
		$(this).css('background-color', '#A0A9FF');
		$.get('/index/getProjects', function(data){
			$('#blurb').text(projName);
			$('#picture').fadeOut('slow', function() {
				$('#picture').html('<img src="images/'+projName+'.png">')
						 .fadeIn('slow');
			});
		});
	});

});