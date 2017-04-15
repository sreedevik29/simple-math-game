$(document).ready(function(){

		var a = Math.floor((Math.random()) * 10);
		var b = Math.floor((Math.random()) * 10);
		$("#value-a").text(a);
		$("#value-b").text(b);

		$("#check-btn").click(function(){
			var sum = a + b;
			var answer = $("#answer").val();
				if (sum == answer)
				{
					$("#result").text("You are correct!");
					a = Math.floor((Math.random()) * 10);
					b = Math.floor((Math.random()) * 10);
					$("#value-a").text(a);
					$("#value-b").text(b);
					$("#answer").val("");
					$("#answer").focus();
				}
				else{
					$("#result").text("You are incorrect!");
				}
			});
		});





// 		var a = Math.floor((Math.random()) * 10);
// 		var b = Math.floor((Math.random()) * 10);
// 		$("#value-a").html(a);
// 		$("#value-b").html(b);
// 		var s = parseInt(a) + parseInt(b);
	
// 		$("#check-btn").click(function(){
// 		var r = "#result";
// 			if (s === r)
// 			{
// 				document.write("You are correct!")
// 			}
// 			else{
// 				document.write("You are incorrect!")
// 			}
// 		});
// });



