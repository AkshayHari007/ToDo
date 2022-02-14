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










// var loginButton = document.getElementById("loginButton");
// var registerButton = document.getElementById("registerButton");

// loginButton.onclick = function () {
//     document.querySelector("#flipper").classList.toggle("flip");
// }

// registerButton.onclick = function () {
//     document.querySelector("#flipper").classList.toggle("flip");
// }
// // callback
// function validate(callback) {
//     var str = /admin/;
//     var pas = /12345/;
//     var user = document.getElementById("user");
//     var pw = document.getElementById("pw");
//     var nouser = document.getElementById("nouser");
//     var nopw = document.getElementById("nopw");

//     var c = 0;
//     var x;
//     var y;
//     if (user.value.trim() == "") {
//         nouser.innerHTML = "Username can not be empty";
//         nouser.style.color = "red";
//         x = 0;
//     }
//     if (pw.value.trim() == "") {
//         nopw.innerHTML = "Password can not be empty";
//         nopw.style.color = "red";
//         y = 0;
//     }
//     if (user.value.trim() != "") {

//         if (user.value.length < 6) {
//             if (str.test(user.value)) {
//                 x = 1;
//                 nouser.innerHTML = "";
//             } else {
//                 x = 0;
//                 nouser.style.color = "red";
//                 nouser.innerHTML = "Invalid user name";
//             }

//         } else {
//             x = 0;
//             nouser.style.color = "red";
//             nouser.innerHTML = "Invalid user name";
//             console.log(user.value.length);
//         }
//     }
//     if (pw.value.trim() != "") {
//         console.log(pw.value.length);
//         if (pw.value.length < 6) {
//             if (pas.test(pw.value)) {
//                 y = 1;

//                 nopw.innerHTML = "";
//             } else {
//                 nopw.style.color = "red";
//                 nopw.innerHTML = "Invalid password";
//                 y = 0;
//             }


//         } else {
//             y = 0;
//             nopw.style.color = "red";
//             nopw.innerHTML = "Invalid password";
//         }
//     }
//     if (x == 1 && y == 1) {
//         var z = callback();
//         if (z == true) {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }

// function checker() {
//     return true;
// }