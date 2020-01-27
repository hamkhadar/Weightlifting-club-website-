// main.js

$(document).ready(function () {

  // Video Gallery
    $("#next").on("click", function() {

      if ( $("#home-video-1").is(":visible") ) {
        $("#home-video-1").addClass("hidden");
        $("#home-video-2").removeClass("hidden");
      }
      else if ( $("#home-video-2").is(":visible") ) {
        $("#home-video-2").addClass("hidden");
        $("#home-video-3").removeClass("hidden");
      }
      else if ( $("#home-video-3").is(":visible") ) {
        $("#home-video-3").addClass("hidden");
        $("#home-video-1").removeClass("hidden");
      }

    });

    $("#previous").on("click", function() {

      if ( $("#home-video-3").is(":visible") ) {
        $("#home-video-3").addClass("hidden");
        $("#home-video-2").removeClass("hidden");
      }
      else if ( $("#home-video-2").is(":visible") ) {
        $("#home-video-2").addClass("hidden");
        $("#home-video-1").removeClass("hidden");
      }
      else if ( $("#home-video-1").is(":visible") ) {
        $("#home-video-1").addClass("hidden");
        $("#home-video-3").removeClass("hidden");
      }

    });

  // Scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('.scroll-to-top').removeClass('hidden');
    } else {
        $('.scroll-to-top').addClass('hidden');
    }
  });

  //Feedback Form
  $("#feedbackForm").on("submit", function() {
      var formValid = true;

  if( $("#name").prop("validity").valid ) {
      $("#nameError").addClass("hidden");
  } else {
      $("#nameError").removeClass("hidden");
      formValid = false;
      }

  if( $("#email").prop("validity").valid ) {
      $("#emailError").addClass("hidden");
  } else {
      $("#emailError").removeClass("hidden");
      formValid = false;
      }


  if ( $("#Saturday_Training").is(':checked') || $("#Beginner_Class").is(':checked') || $("#Winter").is(':checked') ) {
    $("#eventError").addClass("hidden");
} else {
    $("#eventError").removeClass("hidden");
    formValid = false;
}

  return formValid;

});

});
