$(document).ready(function(){

  // Generate random numbers
  var a = Math.floor((Math.random()) * 10);
  var b = Math.floor((Math.random()) * 10);

  // Assign random numbers to value fields
  $("#value-a").text(a);
  $("#value-b").text(b);

  // Handle check click
  $("#check-btn").click(function(){
    var sum = a + b;
    var answer = $("#answer").val();
      if (sum == answer) {
        $("#result").text("You are correct!");
        a = Math.floor((Math.random()) * 10);
        b = Math.floor((Math.random()) * 10);
        $("#value-a").text(a);
        $("#value-b").text(b);
        $("#answer").val("");
        $("#answer").focus();
      } else {
        $("#result").text("You are incorrect!");
      }
  });

});


