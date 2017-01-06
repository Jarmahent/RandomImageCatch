




$(document).ready(function () {
	 $("#img").on('click', function () {
	    $.ajax({
	        type: 'GET',

	        url: 'http://127.0.0.1:8081/',
	        success: function(data, status) {
	         $('#img').attr("src", data);
	      },
	        error: function() {
	         $('#notification-bar').text('An error occurred');
	      }
	    });
	});

});


$(document).ready(function () {
	 $("#img1").on('click', function () {
	    $.ajax({
	        type: 'GET',

	        url: 'http://127.0.0.1:8081/',
	        success: function(data, status) {
	         $('#img1').attr("src", data);
	      },
	        error: function() {
	         $('#notification-bar').text('An error occurred');
	      }
	    });
	});

});

$(document).ready(function () {
	 $("#img2").on('click', function () {
	    $.ajax({
	        type: 'GET',

	        url: 'http://127.0.0.1:8081/',
	        success: function(data, status) {
	         $('#img2').attr("src", data);
	      },
	        error: function() {
	         $('#notification-bar').text('An error occurred');
	      }
	    });
	});

});

