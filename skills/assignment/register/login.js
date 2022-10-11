window.onload = loginLoad;
function loginLoad() {
    var loginSubmit = document.getElementById("myLogin");
    loginSubmit.onsubmit = checkLogin;
}

// alert(username)
function checkLogin() {
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    var usernameLogin = document.forms["myLogin"]["username"].value;
    var passwordLogin = document.forms["myLogin"]["password"].value;
    const quertString = window.location.search;
    const urlParams = new URLSearchParams(quertString)
    const usernameFromRegister = urlParams.get('username');
    const passwordFromRegister = urlParams.get('password01');
    console.log(usernameFromRegister)
    console.log(usernameFromRegister)
    console.log(usernameLogin)
    console.log(passwordLogin)


    if (usernameLogin == usernameFromRegister && passwordLogin == passwordFromRegister) {
        alert("Logined in");
    }
    else {
        alert("Incorrect username or password");
    }
    return false;


}

