$(document).ready(function(){

  // Dom Selectors
  var answerArea = $("#answer-area");
  var question = $("#question");

  // Generate random numbers
  var a = Math.floor((Math.random()) * 10);
  var b = Math.floor((Math.random()) * 10);

  // Assign random numbers to value fields
  question.text(a + " + " + b);

  // Event Handlers: Handle check click
  $("#check-btn").on('click', function(){

    var sum = a + b;
    var answer = parseInt(answerArea.text());

    if (sum == answer) {
      $("#result").text("You are correct!");
      a = Math.floor((Math.random()) * 10);
      b = Math.floor((Math.random()) * 10);
      question.text(a + " + " + b);
      answerArea.text("");
    } else {
      $("#result").text("You are incorrect, try again!");
      question.text(a + " + " + b);
      answerArea.text("");
    }

  });

  // Dom Click Handlers
  $("#num-7").on('click', function(){
    answerArea.text(answerArea.text() + '7');
  });
  
  $("#num-8").on('click', function(){
    answerArea.text(answerArea.text() + '8');
  });

  $("#num-9").on('click', function(){
    answerArea.text(answerArea.text() + '9');
  });

  $("#num-4").on('click', function(){
    answerArea.text(answerArea.text() + '4');
  });

  $("#num-5").on('click', function(){
    answerArea.text(answerArea.text() + '5');
  });

  $("#num-6").on('click', function(){
    answerArea.text(answerArea.text() + '6');
  });

  $("#num-1").on('click', function(){
    answerArea.text(answerArea.text() + '1');
  });

  $("#num-2").on('click', function(){
    answerArea.text(answerArea.text() + '2');
  });

  $("#num-3").on('click', function(){
    answerArea.text(answerArea.text() + '3');
  });

  $("#num-0").on('click', function(){
    answerArea.text(answerArea.text() + '0');
  });

});



