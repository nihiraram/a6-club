$(function() {
  //All JS goes within these brackets
 	$("#bar-submit").click(function(){
  		var age = parseInt($("#age").val());
      var math = parseInt($("#math").val());
  		var num = parseInt($("#num").val());
      var txt = $("#txt").val();
      console.log(txt);
  		if (age>=20 && txt=="t" && num>=1 && math==6688) {
  			$("#answer").text("You're in");
  			$("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
  		}
  		else {
  			$("#answer").text("bye");
  		}
 	});
});
