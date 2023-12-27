document.getElementById('btn-login').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const passwordFeild = document.getElementById('user-password');
    const email = emailFeild.value;
    const password = passwordFeild.value;

    if (email == 'abc@gmail.com' && password == 'abc123') {
        window.location.href ='banking.html' ;
    }
    emailFeild.value='';
    passwordFeild.value ='';
})
