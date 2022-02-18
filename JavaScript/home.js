$(document).ready(function () {

    $("#bstart").click(function () {
        $("#bstart").hide(500);
        $('.login').show(500, "swing");
    });

    $(".lgin").click(function () {
        $("#bstart").hide(500);
        $('.login').show(500, "swing");
        // $(".login").show(3000, swing);
    });

    $(".close").click(function () {
        $(".login").hide(500, "swing");
        $("#bstart").show(500);
    });

});


var u = document.getElementById("ubox");
var pwd = document.getElementById("pwdbox");
var um = document.getElementById("userMessage");
var pwdm = document.getElementById("pwdMessage");
var uv, pwdv;

function userValidate() {
    var user = /admin/;
    if (user.test(u.value)) {
        um.innerHTML = "Valid";
        um.style.color = "green";
        u.style.border = "";
        // uv = true;
        return true;
    } else {
        if (u.value.trim() == "") {
            um.innerHTML = "Username cannot be empty.";
            um.style.fontSize = "14px";
            um.style.color = "red";
            u.style.border = "3px solid red";
            // uv = false;
            return false;
        } else {
            um.innerHTML = "Username is not matching";
            um.style.fontSize = "14px";
            um.style.color = "red";
            u.style.border = "3px solid red";
            // uv = false;
            return false;
        }
    }
}

function pwdValidate() {
    var leg = pwd.value.length;
    var pas = /12345/;

    if (pas.test(pwd.value)) {
        pwdm.innerHTML = "Valid";
        pwdm.style.color = "green";
        pwd.style.border = "";
        // pwdv = true;
        return true;
    } else {
        if (pwd.value.trim() == "") {
            pwdm.innerHTML = "Password cannot be empty.";
            pwdm.style.fontSize = "14px";
            pwdm.style.color = "red";
            pwd.style.border = "3px solid red";
            // pwdv = false;
            return false;
        } else {
            pwdm.innerHTML = "Password is not matching";
            pwdm.style.fontSize = "14px";
            pwdm.style.color = "red";
            pwd.style.border = "3px solid red";
            // pwdv = false;
            return false;
        }
    }
}


function validate(val1, val2) {

    var a = val1();
    var b = val2();
    if (a && b) {
        // alert("LogIn is Successful.");
        u.value = "";
        pwd.value = "";
        return true;

    } else {
        alert("Please check if the data entered is following the specified format.");
        return false;
    }
}