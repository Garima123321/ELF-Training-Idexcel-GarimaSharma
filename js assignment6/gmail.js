function validate(){
    var form=document.myForm
    console.log(form);
    var pattern=/[a-zA-Z0-9]+@+gmail.com/
    var res=document.getElementById('email').value;
    console.log(res);
    if(pattern.test(res)){
        alert("Valid Email")
    }
    else{
        alert("Invalid Email");
        return false;
    }
}





// function validate(){
//     var form=document.myForm
//     var emailid=form['email'].value
//     console.log(emailid);
//     var pattern=new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/")
//     var res=pattern.test(emailid)
//     console.log(res);
//      if(!(res)===true){
//          form.submit()
//      }else{
//          document.getElementById('err').innerText="Invalid Email"
//          return false
//      }
    
// }



// function validate(){
//     var form=document.myForm
//     console.log(form);
//     var res=form['email'].value
//     console.log(res);
//     var err=document.getElementById('err')
//     if(res === ""){
//         err.innerText="email should not be empty"
//         err.style.display="block"
//         err.style.color="red"
//         return false;
//     }else if(res.length<=5){
//         err.innerText="Invalid Email"
//         err.style.display="block"
//         err.style.color="red"
//         return false;
//     }else{
//         return true;
//         document.myForm.submit()
//     }
// }


// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// function validate() {
//   var result = $("#result");
//   var email = document.getElementById('email').value
//   result.text("");

//   if (validateEmail(email)) {
//     result.text(email + " is valid :)");
//     result.css("color", "green");
//   } else {
//     result.text(email + " is not valid :(");
//     result.css("color", "red");
//   }
//   return false;
// }