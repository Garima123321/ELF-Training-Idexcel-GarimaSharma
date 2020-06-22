//----------------NAMED FUNCTION------------//

function factorial(n) {
    if(n<=1){
        return 1;
    }
            return n * factorial(n-1);
    }
console.log(factorial(3));

console.log("----------------------------------------------");

//--------------NAMED FUNCTION-------------//

function power(base,exponent){
    var res = 1;
    for(var count=0; count<exponent; count++){
        res = res * base;
    }
    return res;
}
console.log(power(2,10));

console.log("----------------------------------------------");
//---------------FUNCTION EXPRESSION----------//

var getTriArea = function(base,height){
    return ((base * height)/2);
}
console.log(getTriArea(3,4));

console.log("----------------------------------------------");
//------------IIFE-------------//

(function(){
    var name= "Sania";
    function display(name)
    {
        console.log("My name is :" ,name);
    }
    display(name);
})();

console.log("----------------------------------------------");
//----------------ARROW FUNCTION-----------------//

var setNameId = (id,name) =>({ 
    id: id, 
    name: name 
});
console.log(setNameId(4,"aish"));
