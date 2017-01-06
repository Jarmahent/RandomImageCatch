



$(document).ready(function () {

	 $("#getsubreddit").on('click', function () {
	 	var subreddit = $('input[name="subreddit"]').val();
	    $.ajax({
	        type: 'POST',
	        url: 'http://127.0.0.1:8081/',
	        data: {'data': "TEST"},
	        success: function(output) {
                  alert(output);
              },	  
	        error: console.log(subreddit)  
	        
	    });
	});

});

