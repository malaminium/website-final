window.onload = choosePic;

var myPix = new Array("tower1.png","metro1.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}