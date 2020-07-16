function validate(){
    var form=document.myForm;
    var eval=form.email.value;
    var pval=form.pwd.value;
    var emexp=new RegExp("^.+@.+\..+$");
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





























































































