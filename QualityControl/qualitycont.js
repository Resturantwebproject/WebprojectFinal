function showDiv() {
    var button = document.getElementById("view");
    var box = document.getElementById("viewComments");
    
    button.addEventListener("click", function() {
      box.style.display = "block";
    });
}     

function showReport() {
var button = document.getElementById("report");
var box = document.getElementById("viewReport");
var divDiv=document.getElementById("viewComments");

button.addEventListener("click", function() {
box.style.display = "block";
divDiv.style.display=Hide;

});



}   
function Hide(HideClass) 
{
HideClass.style.display = "none"; 
}