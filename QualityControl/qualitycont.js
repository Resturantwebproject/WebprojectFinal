function showDiv() {
    var button = document.getElementById("view");
    var box = document.getElementById("viewComments");
    var divReport=document.getElementById("viewReport");
    
    button.addEventListener("click", function() {
      box.style.display = "block";
      divReport.style.display="none";
    });
}     

function showReport() {
var button = document.getElementById("report");
var box = document.getElementById("viewReport");
var divDiv=document.getElementById("viewComments");

button.addEventListener("click", function() {
box.style.display = "block";
divDiv.style.display="none";

});



}   
function Hide(HideClass) 
{
HideClass.style.display = "none"; 
}