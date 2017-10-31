$(document).ready(function() {
    $("#button").click(function() {
      var wambui= parseInt($("#mynumbers").val());
      racheal(wambui);
      magicalNumbers.forEach(function(wambui){
        $("#result").append("<li>" + wambui + "</li>");
      });
    });
  });
var magicalNumbers=[];
function racheal(wambui) {
  for (var index=1; index<=wambui; index++)
if (index%15===0) {
	magicalNumbers.push("ping-pong");
}
  else if (index %5===0){
   magicalNumbers.push("pong");
}
  else if (index %3===0){
	magicalNumbers.push("ping");
}else {
  magicalNumbers.push(index);
}

}
//
// var myNumbers ={};
// function number_range(number) {
// if (num%15===0) {
// 	return "ping-pong";
// }else (num%5===0) {
// 	return "pong";
// }else (num%3===0) {
// 	return "ping";
// }else {return number;}



// 	alert (index);
// }
//
// var myNumber=function(number{
// 	if (num%15===0) {
// 		return "ping-pong";
// 	}else (num%5===0) {
// 		return "pong";
// 	}else (num%3===0) {
// 		return "ping";{
//
// 		}
// 	}
// })
