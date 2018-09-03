$(document).ready(function() {
  $("#characterLeft").text("140 characters left");
  $("#message").keydown(function() {
    let max = 140;
    let len = $(this).val().length;
    if (len >= max) {
      $("#characterLeft").text("You have reached the limit");
      $("#characterLeft").addClass("red");
      $("#btnSubmit").addClass("disabled");
    } else {
      let ch = max - len;
      $("#characterLeft").text(ch + " characters left");
      $("#btnSubmit").removeClass("disabled");
      $("#characterLeft").removeClass("red");
    }
  });
});
