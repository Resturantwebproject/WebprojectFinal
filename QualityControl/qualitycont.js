var box = document.getElementById("viewComments");
var divReport=document.getElementById("viewReport");

function showDiv() {
    var button = document.getElementById("view");

    
    // button.addEventListener("click", function() {
    //   box.style.display = "block";
    //   divReport.style.display="none";
    // });

    if (viewComments.style.display === "none") {
        viewComments.style.display = "block";
        viewReport.style.display="none";
      } else {
        viewComments.style.display = "none";
      }
}     

function showReport() {
var button = document.getElementById("report");
var box = document.getElementById("viewReport");
var divDiv=document.getElementById("viewComments");

// button.addEventListener("click", function() {
// box.style.display = "block";
// divDiv.style.display="none";


// });
if (viewReport.style.display === "none") {
    viewReport.style.display = "block";
    viewComments.style.display="none";
  } else {
    viewReport.style.display = "none";
  }

}   


function showReview() {
    var star=document.getElementById("stars");
    
    if (star.style.display === "none") {
        star.style.display = "block";
      } else {
        star.style.display = "none";
      }
    }   

function detail(){
    var d=document.getElementById("details");

    if (d.style.display === "none") {
        d.style.display = "block";
      } else {
        d.style.display = "none";
      }
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