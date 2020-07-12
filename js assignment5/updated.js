document.getElementById('demo').addEventListener("onclick",getDelete);
function getDelete(ele){
    ele.remove();
}
document.getElementById('demo').addEventListener("onclick",insert)
function insert(){
    var ul=document.getElementById('demo')
    var x=document.getElementById('Cricket')
    var li=document.createElement('li')
    li.setAttribute('id',Cricket.value);
    li.setAttribute('onclick','getDelete(this)')
    li.appendChild(document.createTextNode(Cricket.value));
    ul.appendChild(li);
}
document.getElementById('demo').addEventListener("onclick",remove)
function remove(){
    var ul = document.getElementById('demo')
    ul.removeChild(ul.lastElementChild)
}

document.getElementById('item').addEventListener("onclick",getDeleteItem);
function getDeleteItem(elem){
    elem.remove();
}
document.getElementById('item').addEventListener("onclick",insertItem)
function insertItem(){
    var ul=document.getElementById('item')
    var x=document.getElementById('Players')
    var li=document.createElement('li')
    li.setAttribute('id',Players.value);
    li.setAttribute('onclick','getDeleteItem(this)')
    li.appendChild(document.createTextNode(Players.value));
    ul.appendChild(li);
}
document.getElementById('item').addEventListener("onclick",removeItem)
function removeItem(){
    var ul = document.getElementById('item')
    ul.removeChild(ul.lastElementChild)
}

// var eve=document.getElementById('demo');
// eve.addEventListener("click",insert)
// function insert(){
//     var ul=document.getElementById('demo');
//     var x = document.getElementById('Cricket').value;
//     var li = document.createElement("li");
//     li.innerHTML=x;
//     li.setAttribute("onclick","getDelete(this)");
//     ul.appendChild(li);
// }
