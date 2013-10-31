$(function() {

	var projName = "None";

	console.log('loaded'); // sanity check	

	$('.acc').accordion({
		collapsible: true,
		heightStyle: "Content"
	});

	$('.acc div p').click(function() {
		if (projName != $(this).html())
		{
			projName = $(this).html();
			$('.acc div p').css('background-color', '#FFAA00');
			$(this).css('background-color', '#A0A9FF');
			$.get('/index/getProjects', function(data){
				$('#blurb').text(projName);
				$('#picture').fadeTo('slow',0.1, function() {
					$('#picture').html('<img src="images/'+projName+'.png">')
							 .fadeTo('slow',1.0);
				});
			});
		}
	});

});