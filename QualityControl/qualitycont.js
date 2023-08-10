var box = document.getElementById("viewComments");
var divReport=document.getElementById("viewReport");
var button = document.getElementById("view");

function showDiv() {
  var box = document.getElementById("viewComments");
  var button = document.getElementById("view");
  var rb=document.getElementById("report");
  var bm=document.getElementById("manage");


    if (viewComments.style.display === "none") {
        viewComments.style.display = "block";
        viewReport.style.display="none";
        viewManage.style.display="none";
        view.style.color=" rgb(0,0,0)"
        rb.style.color="rgb(221,167,181)";
        bm.style.color="rgb(221,167,181)";

      } else {
        box.style.display = "none";
        view.style.color="rgb(221,167,181)";


      }
}     

function showManage() {
  var box=document.getElementById("viewManage");
  var button=document.getElementById("manage");
  var rep = document.getElementById("viewReport");
var divDiv=document.getElementById("viewComments");
  var vb=document.getElementById("view");
  var rb=document.getElementById("report");

  if (box.style.display === "none") {
    divDiv.style.display = "none";
    rep.style.display="none";
    viewManage.style.display = "block";
    button.style.color=" rgb(0,0,0)"
    vb.style.color="rgb(221,167,181)";
    rb.style.color="rgb(221,167,181)";
 
  } else {
    viewManage.style.display = "none";
    button.style.color="rgb(221,167,181)";
  }

}

function showReport() {
var button = document.getElementById("report");
var vb=document.getElementById("view");
var box = document.getElementById("viewReport");
var divDiv=document.getElementById("viewComments");
var vm=document.getElementById("most");
var mb=document.getElementById("manage");
var mv=document.getElementById("viewManage")

if (box.style.display === "none") {
    box.style.display = "block";
    divDiv.style.display="none";
    viewManage.style.display="none";
    button.style.color="rgb(0,0,0)";
    vb.style.color="rgb(221,167,181)";
    vm.style.color="rgb(221,167,181)";
    mb.style.color="rgb(221,167,181)";

  } else {
    box.style.display = "none";
    box.style.textDecoration="none";
    button.style.color="rgb(221,167,181)";
  }

}   


function showReview() {
    var star=document.getElementById("stars");
    var vb=document.getElementById("view");
    var rb=document.getElementById("report");
    
    if (star.style.display === "none") {
        star.style.display = "block";
        star.style.color="rgb(188, 112, 133)";
        vb.style.color="rgb(221,167,181)";
        rb.style.color="rgb(221,167,181)";
     
      } else {
        star.style.display = "none";

        star.style.color="rgb(188, 112, 133)";
      }
    }   

 
    


    function showMost() {
        var most=document.getElementById("most");
        
        if (most.style.display === "none") {
            most.style.display = "block";

          } else {
            most.style.display = "none";
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