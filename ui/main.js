console.log('Loaded!');


var button=document.getElementById("counter");
//var counter=0;
button.onclick=function(){
//Make request to the counter end points
var request = new XMLHttpRequest();

//capture the resources and store it ina variable
request.onreadystatechange=function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some actionn
        if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
        }
        
    }
    
};


//Making the request
request.open("GET","http://ark2290.imad.hasura-app.io/counter",true);
request.send(null);

};