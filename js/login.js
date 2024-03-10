document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // console.log(email);
    // console.log(password);
    
    if(email === 'papa@khan.com' && password === 'supper'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
    
})