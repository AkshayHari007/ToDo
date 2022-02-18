var element, note, done;
var copy = [];

var t = 0,
    ct = 0,
    nct = 0;

$("document").ready(function () {



    $.get("https://jsonplaceholder.typicode.com/todos", (r) => {
        t = r.length;
        for (let i = 0; i < r.length; i++) {
            element = r[i];
            note = element.title;
            done = element.completed;
            if (done) {
                ct++;
                $("#list").append($('<div/>', {
                        class: "colour"
                    })
                    .append(
                        $(document.createElement("input")).attr({
                            id: "done",
                            checked: "true",
                            name: "myCheckbox",
                            // value: "myValue",
                            type: "checkbox"
                        })
                    )
                    .append("<label id='noAction'>" + note + "</label>")
                    .append("<br>"));
            } else {
                nct++;
                $("#list").append($('<div/>', {
                        class: "colour"
                    })
                    .append(
                        $(document.createElement("input")).attr({
                            id: "notDone",
                            // checked: "true",
                            name: "myCheckbox",
                            // value: "myValue",
                            type: "checkbox",
                            onchange: "checkfn(this);"
                        })
                    )
                    .append("<label id='todo'>" + note + "</label>")
                    .append("<br>"));
            }
        }

        $("#tot").html(`Total number of tasks: <b>${t}</b>`);
        $("#ctot").html(`Total number of tasks completed: <b>${ct}</b>`);
        $("#nctot").html(`Total number of tasks to be completed: <b>${nct}</b>`);
    });

});



// ! Promise
var a = 0;
var b = 200;
var c = 90;
var d = 110;



function checkfn(v) {


    if (v.checked) {
        a++;
        c++;
        d--;


    } else {
        a--;
        c--;
        d++;

    }

    // console.log(c);
    // console.log(d);
    // test

    var p = new Promise(function (resolve, reject) {
        if (a == 5) {
            resolve();
        } else {
            reject(a);
        }
    });

    p.then(function () {

        $("#mes").html("Congratulation 👏 You have completed <b>five</b> Tasks");
        $("#tot").html(`Total number of tasks:  <b>${b}</b>`);
        $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
        $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        alert("Congratulation 👏 You have completed five Tasks");

    }).catch(function (a) {
        if (a == 1) {
            $("#mes").html("You have <b>four</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 2) {
            $("#mes").html("You have <b>three</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 3) {
            $("#mes").html("You have <b>two</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 4) {
            $("#mes").html("You have just <b>one</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 90) {
            $("#mes").html("Congratulation! You have completed all the tasks in the list.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
            alert("Congratulation 👏 You have completed all the tasks in the list.");
        }
        if (a > 5 && a < 90) {
            $("#mes").html("You have done more than expected 💪 Keep up this good work 😊");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }

    });
}





// var ar = [];
// var i = 0;
// var z;

// function response() {
//     var xhttp = new XMLHttpRequest();


//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var res = JSON.parse(this.responseText);
//             var myDiv = document.getElementById("result_area");
//             var html_content = "";
//             var x = "";
//             z = res.length;
//             for (i = 0; i < res.length; i++) {
//                 var out = res[i];
//                 x = out.title;
//                 var checkbox = document.createElement("input");
//                 checkbox.type = "checkbox";
//                 ar[i] = checkbox;
//                 if (out.completed == true) {
//                     var label = document.createElement("label");
//                     checkbox.setAttribute("checked", "true");
//                     checkbox.setAttribute("class", "disabled");
//                     myDiv.appendChild(checkbox);
//                     myDiv.appendChild(label);
//                     label.appendChild(document.createTextNode(x));
//                     label.setAttribute("class", "grey");
//                 } else {
//                     var label = document.createElement("label");
//                     label.setAttribute("class", "active");
//                     checkbox.removeAttribute("class", "disabled");
//                     myDiv.appendChild(checkbox);
//                     myDiv.appendChild(label);
//                     label.appendChild(document.createTextNode(x));
//                     label.setAttribute("class", "active1");
//                 }
//                 var linebreak = document.createElement("br");
//                 var hr = document.createElement("hr");
//                 myDiv.appendChild(linebreak);
//                 myDiv.appendChild(hr);
//             }
//         }
//     }
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//     xhttp.send();

// }
// // promise
// function s() {
//     var click = document.getElementById("click");
//     click.setAttribute("src", "audio/click.wav");

//     var promise = new Promise(function (resolve, reject) {
//         var c = 0;
//         var j = 0;
//         var b = 0;
//         var w = 0;
//         for (j = 0; j < 200; j++) {
//             if (ar[j].checked) {
//                 c++;

//             } else {
//                 b++;

//             }

//         }
//         if (b - c == 10) {
//             resolve();
//         } else {
//             reject(b - c);
//         }
//     })
//     promise.then(function () {
//         document.getElementById("ptag").innerHTML = "Congrats you have successfully completed 5 TASKs";
//         document.getElementById("success").setAttribute("src", "audio/success.wav");
//         alert("You Completed 5 Tasks click ok to conform");


//     }).catch(function (s) {
//         if (s == 18) {
//             document.getElementById("ptag").innerHTML = "4 Remaining task to complete 5 TASKs";
//         }
//         if (s == 16) {
//             document.getElementById("ptag").innerHTML = "3 Remaining task to complete 5 TASKs";
//         }

//         if (s == 14) {
//             document.getElementById("ptag").innerHTML = "2 Remaining task to complete 5 TASKs";
//         }
//         if (s == 12) {
//             document.getElementById("ptag").innerHTML = "You are almost there only 1 Remaining task to complete 5 TASKs";
//         }
//         if (s == 20) {
//             document.getElementById("ptag").innerHTML = "";
//         }

//     });
// }