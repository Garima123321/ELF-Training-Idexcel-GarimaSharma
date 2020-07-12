function getDelete(ele){
    ele.remove();
}
function insert(){
    var ul = document.getElementById('demo');
    var x = document.getElementById('Cricket').value;
    var li = document.createElement("li");
    li.innerHTML=x;
    li.setAttribute("onclick","getDelete(this)");
    ul.appendChild(li);
}
function remove(){
    var ul = document.getElementById('demo')
    ul.removeChild(ul.lastElementChild)
}

function getDeleteItem(elem){
    elem.remove();
}
function insertItem(){
    var ul = document.getElementById('item');
    var y = document.getElementById('Players').value;
    var li = document.createElement("li");
    li.innerHTML=y;
    li.setAttribute("onclick","getDeleteItem(this)");
    ul.appendChild(li);
}
function removeItem(){
    var ul = document.getElementById('item')
    ul.removeChild(ul.lastElementChild)
}