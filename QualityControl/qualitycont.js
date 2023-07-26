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


function showReview() {
    var button = document.getElementById("rate");
    var star=document.getElementById("stars");
    
    button.addEventListener("click", function() {
    star.style.display = "block";
    });

    
    }   




function light(){
    var buttonView=document.getElementById("view");
    var buttonComment=document.getElementById("report");


    buttonView.addEventListener("click",function(){
        buttonView.style.backgroundColor="white";
        if(buttonComment.addEventListener("click")){
            buttonView.style.color="rgb(221,167,181)"
            buttonComment.style.color="white";
        }
    });
}

