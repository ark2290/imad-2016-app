console.log('Loaded!');

var input=prompt("Enter your name");
alert("Hiii"+input+"");

var image=document.getElementById("madi");
image.onclick=function(){
    image.style.marginRight="300px";
    setTimeout(function(){ image.style.marginTop="100px"; }, 2000);
    
};