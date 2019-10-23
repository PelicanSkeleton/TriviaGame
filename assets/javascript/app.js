var timeLeft = 10;
var interval;
var questionDiv = "<div class= 'question'> <h1>What year is the first season of Deadwood set in?</h1><input type='radio' name='q1' value='a'>a. 1872<br><input type='radio' name='q1' value='b'>b. 1876<br><input type='radio' name='q1' value='c'>c. 1901<br><input type='radio' name='q1' value='d'>d. 1856<br></div>";
var questions = ["What year is the first season of Deadwood set in?", "How many f-bombs were used throughout the series?", "What was Calamity Jane's real name?", "How many episodes were there in the series?"];


$("#start-button").on("click", function () {
    hideStart();
    run();
    
    $(".game").append(questionDiv);
    
    






    console.log(questionDiv);
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
    
    
    if(timeLeft === 0) {
        stop();
        $(".game").html("<h1>TIMES UP!</h1>");
        next();

    }
    
}

function next() {
    $(".game").append("<button id='next'>Next</button>");
    for(i = 1; i <= questions[i]; i ++) {
     $("#next").on("click", function(){
        $(".game").html("<h1>" + question[i] + "</h1>");
     });   
    }
}

function stop() {
    clearInterval(interval);
}