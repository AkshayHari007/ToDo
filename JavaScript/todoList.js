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
const click = new Audio("./Images/Click.mp3");
const success = new Audio("./Images/Success.mp3");


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


    var p = new Promise(function (resolve, reject) {
        if (a == 5) {
            resolve();
        } else {
            reject(a);
        }
    });

    p.then(function () {
        success.play();
        $("#mes").html("Congratulation 👏 You have completed <b>five</b> Tasks");
        $("#tot").html(`Total number of tasks:  <b>${b}</b>`);
        $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
        $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        setTimeout(function () {
            alert("Congratulation 👏 You have completed five Tasks");
        }, 750);

    }).catch(function (a) {
        if (a == 0) {
            click.play();
            $("#mes").html(`Complete any <b>five</b> tasks`);
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 1) {
            click.play();
            $("#mes").html("You have <b>four</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 2) {
            click.play();
            $("#mes").html("You have <b>three</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 3) {
            click.play();
            $("#mes").html("You have <b>two</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 4) {
            click.play();
            $("#mes").html("You have just <b>one</b> more tasks left to complete.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }
        if (a == 90) {
            success.play();
            $("#mes").html("Congratulation! You have completed all the tasks in the list.");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
            setTimeout(function () {
                alert("Congratulation 👏 You have completed all the tasks in the list.");
            }, 750);
        }
        if (a > 5 && a < 90) {
            click.play();
            $("#mes").html("You have done more than expected 💪 Keep up this good work 😊");
            $("#tot").html(`Total number of tasks: <b>${b}</b>`);
            $("#ctot").html(`Total number of tasks completed: <b>${c}</b>`);
            $("#nctot").html(`Total number of tasks to be completed: <b>${d}</b>`);
        }

    });
}