var timeLeft = 10;
var interval;

var question = [{
    question: "What year is the first season of Deadwood set in?",
    answers: ["a. 1872", "b. 1876", "c. 1901", "d. 1856"],
    answer: "b"
},
{
    question: "How many f-bombs were used throughout the series?",
    answers: ["", "", "", ""],
    answer: ""
},
{
    question: "What was Calamity Jane's real name?",
    answers: ["", "", "", ""],
    answer: ""
},
{
    question: "How many episodes were there in the series?",
    answers: ["", "", "", ""],
    answer: ""
}]

$("#start-button").on("click", function () {
    hideStart();
    run();

    //build the div
    //loop through answer array for radio buttons
    for (i = 0; i < question.length; i++) {

        var div = $("<div>");
        div.addClass("question");
        div.html("<h1>" + question[i].question + "</h1>")
        var radio = $("<input>");
        radio.attr("type", "radio");
        radio.attr("name", "q1");
        radio.attr("value", question[i].answers[0, 1, 2, 3]);
        radio.text(question[i].answers[0, 1, 2, 3]);
        div.append(radio);
        $(".game").append(div);

    };

    // $(".game").append(questionDiv);








    console.log(div);
    console.log(interval);
    console.log(timeLeft);
});

function hideStart() {
    $("#start-button").hide();
}

function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);

}

function decrement() {
    timeLeft--;
    console.log(timeLeft + " decrement")
    $("#show-time").html("<h1>" + timeLeft + "</h1>");


    if (timeLeft === 0) {
        stop();
        $(".game").html("<h1>TIMES UP!</h1>");


    }

}

// function next() {
//     $(".game").append("<button id='next'>Next</button>");
//     for (i = 1; i <= question.length; i++) {
//         $("#next").on("click", function () {
//             $(".game").html("<h1>" + question[i] + "</h1>");
//             console.log(question[i]);
//             console.log(indexof(question[i]));
//         });
//     }
// }

function stop() {
    clearInterval(interval);
}