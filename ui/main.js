console.log('Loaded!');


var image=document.getElementById("madi");

image.onclick=function(){
    image.style.marginRight="300px";
    setTimeout(function(){ image.style.marginTop="100px"; }, 2000);
    
};

var button=document.getElementById("counter");
//var counter=0;
button.onclick=function(){
//Make request to the counter end points
var request = new XMLHttpRequest();

//capture the resources and store it ina variable
request.onreadystatechange=function(){
    if(request.readyState === XMLHttprequest.DONE){
        //Take some actionn
        if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
        }
        
    }
    
};


//Making the request
request.open("GET","http://ark2290.imad.hasura-app.io/profile",true);
request.send(null);

};