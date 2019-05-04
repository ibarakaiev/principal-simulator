var supporters = {
    "students": 100,
    "faculty": 100,
    "parents": 100,
    "trustees": 100,
    "image": 100
}

var endowment = 1500000000;
var revenue = 100000000;
var expenses = 120000000;

var scenario;

function updatePanel() {
    $("#endowment").text("$" + (endowment / 1000000000) + "bn");
    $("#revenue").text("$" + (revenue / 1000000) + "mn");
    $("#expenses").text("$" + (expenses / 1000000) + "mn");
    $("#students").attr("value", supporters["students"]).text(supporters["students"]);
    $("#trustees").attr("value", supporters["trustees"]).text(supporters["trustees"]);
    $("#parents").attr("value", supporters["parents"]).text(supporters["parents"]);
    $("#faculty").attr("value", supporters["faculty"]).text(supporters["faculty"]);
    $("#image").attr("value", supporters["image"]).text(supporters["image"]);
    $(".progress").removeClass("is-danger is-warning is-primary is-success").each(function (i, bar_item) {
        var bar = $(bar_item)
        if (bar.attr("value") < 40) {
            bar.addClass("is-danger")
        } else if (bar.attr("value") < 60) {
            bar.addClass("is-warning")
        } else if (bar.attr("value") < 80) {
            bar.addClass("is-primary")
        } else {
            bar.addClass("is-success")
        }
    })
}

function startGame() {
    $("#intro").fadeOut(function () {
        $("#game").fadeIn();
    });

    initiateRound();
}

function selectOption(id) {
    var option = scenario.options[id];

    $(".user-option").attr("disabled", "true");
    $("#option-" + id).removeClass("is-outlined");

    var results = option.results;
    if (results.students != null) {
        supporters["students"] += results.students;
    }
    if (results.trustees != null) {
        supporters["trustees"] += results.trustees;
    }
    if (results.parents != null) {
        supporters["parents"] += results.parents;
    }
    if (results.faculty != null) {
        supporters["faculty"] += results.faculty;
    }
    if (results.image != null) {
        supporters["image"] += results.image;
    }
    if (results.endowment != null) {
        endowment += results.endowment;
    }
    if (results.revenue != null) {
        revenue += results.revenue;
    }
    if (results.expenses != null) {
        expenses += results.expenses;
    }
    for (let item of ["students", "trustees", "parents", "faculty", "image"]) {
        if (supporters[item] > 100) {
            supporters[item] = 100;
        }
    }
    updatePanel();
    $(".results").fadeIn();
}

function initiateRound() {
    $("#options").html("");
    $(".results").fadeOut();
    scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var meetingText = "Meeting";
    if (scenario.from == "trustees") {
        meetingText = "Meeting with Trustees & Donors";
    } else if (scenario.from == "students") {
        meetingText = "Meeting with Students";
    } else if (scenario.from == "parents") {
        meetingText = "Meeting with Parents";
    } else if (scenario.from == "faculty") {
        meetingText = "Meeting with Faculty";
    } else if (scenario.from == "image") {
        meetingText = "Meeting with the Public";
    }
    $("#meeting").text(meetingText);
    $("#situation-text").text(scenario.situation);
    for (var i = 0; i < scenario.options.length; i++) {
        $("#options").append("<button class='user-option button is-fullwidth is-outlined is-link is-large' id='option-" + i + "' onclick='selectOption(" + i + ")'>" + scenario.options[i].label + "</button>")
    }
    updatePanel();
}