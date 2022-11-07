window.onload= function(){
var button = document.getElementById("btn");

button.addEventListener("click",function(){
    Req = new XMLHttpRequest();
    var url="http://localhost/info2180-lab4/superheroes.php";
    Req.open('GET',url);
    Req.send();
    Req.onreadystatechange=loadMessage; 
});
function loadMessage() {
    if (Req.readyState === XMLHttpRequest.DONE) {
      if (Req.status === 200) {
        alert(Req.responseText);
      } else {
        alert('Error');
      }
    }
  }
}
