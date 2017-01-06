
function getImage(){
	while(true){
	console.log('Getting pic');
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
	  console.log("Sleeping for 60sec");
	  setTimeout(getImage, 5000);
	  

	}
}
	

getImage();