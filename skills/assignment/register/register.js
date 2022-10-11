window.onload = pageLoad;
function pageLoad()
{
	var data = document.getElementById("myForm");
    data.onsubmit = validateForm
}

function validateForm()
 {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password1 = document.forms["myForm"]["password01"].value
    var password2 = document.forms["myForm"]["password02"].value

    if(password1 != password2){
        document.getElementById("errormsg").innerHTML = "Wrong Password!"
        document.getElementById("errormsg").style.color = "Red"
        return false
    }
    else {
        alert("Registered!")
    }
   
}


