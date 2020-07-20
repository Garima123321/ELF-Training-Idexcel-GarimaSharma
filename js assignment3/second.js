var ele;
var count=0;
function createEle(){
    if(count == 0){
    ele = document.createElement("div");
    ele.innerHTML="Hi this is Garima";
    document.body.appendChild(ele);
    ele.style.display="none";
    console.log(ele);
    count++;
}else{

}
}

function showEle(){
    ele.style.display="block";    
}

function deleteEle(){
    ele.style.display="none"
        
}