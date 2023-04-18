function highlight() {
    //Write your code here
	var bolds = document.getElementsByTagName("strong");
  for (var i = 0; i < bolds.length; i++) {
    bolds[i].style.color = "green";
  }


}


function return_normal() {
    //Write your code here
var bolds = document.getElementsByTagName("strong");
  for (var i = 0; i < bolds.length; i++) {
    bolds[i].style.color = "black";
  }
    
}