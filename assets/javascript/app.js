// Keeps track of score
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// countdown from a minute
var count = 60;



$(document).ready(function () {

    // Hides results until the end
    $("#end_container").hide();


    // Start game
    $("#start_button").on("click", function () {

        // Hides results until the end
        $("#end_container").hide();

        // Shows the questions
        $("#game_container").show();

        startCountdown();

    });

    // Countdown function
    function startCountdown() {
        setInterval(countdown, 1000);
        count = 60;
        
    }


    // Counts down and displays time
    function countdown() {
        
        // counting down right here
        count--;
    
        // countdown is displayed
        $('#timer_number').html(count + " Seconds");

        // click "done" before time is up
        $("#done_button").on("click", function () {

            // Stop countdown and run the timeUp function
            count = 0;
            return;
            clearInterval(increment);
            
            
        });

        // Finish the game when timer is complete 
        if (count == -1) {
            // Collect answers
            timeUp();
            // Hide the questions
            $("#game_container").hide();
            // Resets Game and Counts
            resetGame();
            
           
        }
    }

    

    // Function starts after time is up
    function timeUp() {

        // values
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        


        // right answers are below
        if (Q1 == undefined) {
            unansweredCount++;
        }
        else if (Q1 == "Where Did Our Love Go") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q2 == undefined) {
            unansweredCount++;
        }
        else if (Q2 == "The Temptations") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q3 == undefined) {
            unansweredCount++;
        }
        else if (Q3 == "Carpenter") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q4 == undefined) {
            unansweredCount++;
        }
        else if (Q4 == "The Miracles") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q5 == undefined) {
            unansweredCount++;
        }
        else if (Q5 == "Stevie Wonder") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q6 == undefined) {
            unansweredCount++;
        }
        else if (Q6 == "$800") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q7 == undefined) {
            unansweredCount++;
        }
        else if (Q7 == "The Primettes") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q8 == undefined) {
            unansweredCount++;
        }
        else if (Q8 == "1973") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        

        // display on page
        $('#correct_answers').html(correctCount);
        $('#wrong_answers').html(wrongCount);
        $('#unanswered').html(unansweredCount);

        // Shows results
        $("#end_container").show();

    

    }

    function resetGame() {
        
        // reset variables
        wrongCount = 0;
        correctCount = 0;
        unansweredCount = 0;
        count = 60;

        

        

        

        

    
    

        

    }
     

   

});
