var supporters = {
    "students": 75,
    "faculty": 75,
    "parents": 75,
    "trustees": 75,
    "image": 75
}

var endowment = 1000000000;
var originalEndowment = 1000000000;
var revenue = 100000000;
var expenses = 100000000;
var week = 0;

var scenario;

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

async function process_lerp(element, initial, final) {
    var total_time = 200;
    var initial_students = $("#students").attr("value");
    var initial_trustees = $("#trustees").attr("value");
    var initial_parents = $("#parents").attr("value");
    var initial_faculty = $("#faculty").attr("value");
    var initial_image = $("#image").attr("value");
    for (var i = 0; i < total_time; i++) {
        var t = i / total_time;
        t = Math.pow((1 - Math.pow((1 - t), 3)), (1 / 3));

        // "#students", $("#students").attr("value"), supporters["students"]
        $(element).attr("value", lerp(initial, final, t)).text(lerp(initial, final, t));
        $("#students").attr("value", lerp(initial_students, supporters["students"], t))
            .text(lerp(initial_students, supporters["students"], t));
        $("#trustees").attr("value", lerp(initial_trustees, supporters["trustees"], t))
            .text(lerp(initial_trustees, supporters["trustees"], t));
        $("#parents").attr("value", lerp(initial_parents, supporters["parents"], t))
            .text(lerp(initial_parents, supporters["parents"], t));
        $("#faculty").attr("value", lerp(initial_faculty, supporters["faculty"], t))
            .text(lerp(initial_faculty, supporters["faculty"], t));
        $("#image").attr("value", lerp(initial_image, supporters["image"], t))
            .text(lerp(initial_image, supporters["image"], t));

        if (t > 0.99)
            break;
        await sleep(1);
    }
    $(".progress").each(function(i, item_sel){
        var item = $(item_sel);
        if(item.attr("value") < 40){
            item.removeClass("is-info").addClass("is-danger");
        }else{
            item.removeClass("is-danger").addClass("is-info");
        }
    });
    return new Promise(resolve => setTimeout(resolve, 1));;
}

async function updatePanel() {
    $("#week").text(week)
    $("#endowment").text("$" + (endowment / 1000000000) + "bn");
    $("#revenue").text("$" + (revenue / 1000000) + "mn");
    $("#expenses").text("$" + (expenses / 1000000) + "mn");

    await process_lerp();
}

async function resultsFadeIn() {
    await sleep(100);
    $(".results").fadeIn();
}

function startGame() {
    $("#intro").fadeOut(function () {
        $("#game").fadeIn();
    });

    initiateRound();
}

function selectOption(id) {
    var option = scenario.options[id];

    $("#situation-text").slideUp();
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
        if (supporters[item] < 0) {
            supporters[item] = 0;
        }
    }

    $("#option-outcome").text(option.outcome);

    endowment += revenue - expenses;

    updatePanel();
    resultsFadeIn();
}

function initiateRound() {
    week += 1;
    if (week > 5) {
        endGame();
    }
    $("#options").html("");
    $(".results").slideUp();
    scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    $("#situation-text").text(scenario.situation);
    for (var i = 0; i < scenario.options.length; i++) {
        $("#options").append("<button class='user-option button is-fullwidth is-outlined is-info is-large' id='option-" + i + "' onclick='selectOption(" + i + ")'>" + scenario.options[i].label + "</button>")
    }
    $("#situation-text").slideDown();
    updatePanel();
}

function endGame() {
    $("#game").fadeOut(function () {
        var minSatisfaction = 100;
        $(".progress").each(function(i, item){
            item = $(item);
            if(item.attr("value") < minSatisfaction){
                minSatisfaction = item.attr("value")
            }
        })
        $(".endowment").text("$" + (endowment / 1000000000) + "bn");
        if(endowment > originalEndowment && minSatisfaction >= 40) {
            $("#win").fadeIn();
        }else{
            $("#lose").fadeIn();
        }
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}