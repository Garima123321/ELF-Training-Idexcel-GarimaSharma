function validate(){
    var form=document.myForm;
    console.log(form);
    var eval=form.email.value;
    var pval=form.pwd.value;
    var emexp=new RegExp("[a-zA-Z0-9]+@+gmail.com");
    var phexp=new RegExp("^[0-9]{10}$");
    var pwexp=new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    if (emexp.test(eval) || phexp.test(eval)) {
        if (pwexp.test(pval)) 
        {
            form.submit();   
        }
        else{
            alert("Wrong Password");
            form.pwd.focus();
        }
    }
    else{
        alert("Provide Proper Email or Mobile Number");
        form.email.focus();
    }
}

function validation() {
    var formSignVal = document.myform;
    var surNameCheck = /[a-zA-Z]{0,10}/.test(formSignVal.sname.value);
    var firstNameCheck = /[a-zA-Z]{0,10}/.test(formSignVal.fname.value);
    var emailCheck = (/^[0-9]{10}$/.test(formSignVal.emailorphn.value)) || (/[a-zA-Z0-9]+@+gmail.com/.test(formSignVal.emailorphn.value));
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(formSignVal.password.value);
    var dateCheck = (formSignVal.birthday.value) !== "";
    var genderCheck = ()=> {
        var genders = formSignVal.gender;
        for (var i = 0; i < genders.length; i++) {
            if (genders[i].checked == true) {
                return true;

            }
        }
        return false;
    };

    if (firstNameCheck && surNameCheck && emailCheck && passwordCheck && dateCheck && genderCheck()) {
        // var msgSuccess = document.getElementById('sucsMsg');
        //     msgSuccess.innerText="successsssssssssssssssss";
        //     msgSuccess.style.display="block";
        //     msgSuccess.style.color="red";
        formSignVal.submit();
    }
    else if (!firstNameCheck) {
        alert('Wrong FIRSTNAME');
        formSignVal.firstName.focus();
    }
    else if (!surNameCheck) {
        alert('Wrong SURNAME');
        formSignVal.surName.focus();
    }
    else if (!emailCheck) {
        alert('Wrong EMAIL or MOBILE NUMBER');
        formSignVal.mailOrPhone.focus();
    }
    else if (!passwordCheck) {
        alert('Wrong PASSWORD');
        formSignVal.password.focus();
    }
    else if (!dateCheck) {
        alert('Field DATE should be Filled');
    }
    else if (!genderCheck()) {
        alert('Select a gender');
    }
}

































// function validation(){
//     var form=document.forms['myform']
//     console.log(form);
//     var e=form['email'].value;
//     var p=form['password'].value;
//     var un=form['uname'].value;
//     var er=document.getElementById('err');
//     var er1=document.getElementById('err2');
//     // var checkRes=document.getElementById('gridCheck').checked;
//     var regEx=/^([a-zA-Z0-9\.-]{2,20})@([a-z0-9-]+).([a-z]{2,8})$/;
//     var regEx1=/^([A-Z]{1})([a-z0-9]{2,7})$/;
//     if(regEx.test(e)===false && e===""){
//         document.getElementById('email').style.border="2px solid red";
//         er.innerText="Invalid Email"
//         er.style.display="block"
//         er.style.color="red"
//         return false;
//     }
//     else if(regEx1.test(p)===false && p===""){
//         er1.innerText="Invalid Password number";
//         er1.style.display="block"
//         er1.style.color="red"
//         document.getElementById('password').style.border="2px solid red"
//         return false;
//     } 
//     else if(un===""){
//         document.getElementById('uname').style.border="2px solid red"
//         return false;
//     }
//     else if(checkRes===false){
//         alert("check the box")
//         return false;
//     }
//     else{
//         alert("form submitted");
//         document.form.submit()
//     }
// }

// function validate(){
//     var form=document.forms['myForm']
//     console.log(form);
//     var use=form['user'].value
//     var use1=form['user1'].value
//     console.log(use);
//     console.log(use1);
//     var regEx1=/^([A-Z]{1})([a-z0-9]{2,7})$/;
//     var regEx2=/^([a-zA-Z0-9\.-]{2,20})@([a-z0-9-]+).([a-z]{2,8})$/;
//     var err=document.getElementById('err')
//     var err2=document.getElementById('err2')
//     if(use===""){
//         err.innerText="Email cannot be empty"
//         err.style.display="block"
//         err.style.color="red"
//         return false;
//     }
//     else if(use.length <= 5){
//         err.innerText="Should not be less than 5"
//         err.style.display="block"
//         err.style.color="red"
//         return false;
//     }
//     else if(regEx2.test(use)==false){
//         err.style.display="block"
//         err.style.color="red"
//         return false;
//     }
//     else{
//         alert("form submitted");
//         return true;
//     }
// }





































































































































