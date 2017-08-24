//click start button - 1. start timer  

//2. pull question/answer form
// onclick event : $(document).on("click", "#button", function(event)) - {start question/answer()}
$(document).ready(function(){
    $(".donePage").hide(); 
    $("#timer").hide(); 
    $("#button1").hide();
    $(document).on("click", "#button", function(event) {
        $("#button").css ("display", "none");
        $("#timer").show();
        $("#button1").show();
        var questions = [{
                question: "During photosynthesis, which two compounds are combined to create the output of glucose and oxygen?",
                choices: ["Carbon dioxide and bicarbonate.", "Carbon dioxide and water.", "Carbon dioxide and multiple alkaline substances", "Bicarbonate and water."],
                correctAnswer: "Carbon dioxide and water."

            }, {	

                question: "Why does the human eye perceive a red colored dress as the color red?",
                choices: ["The molecules of the dress absorb green and blue light wavelengths.", "A red dress will primarily absorb red light wavelengths.", "A red dress will not absorb light wavelengths from non-red colors.", "The molecules of the dress do not absorb red light wavelengths."],
                correctAnswer: "The molecules of the dress do not absorb red light wavelengths."

            }, {

                question: "In humans, what is the only internal organ capable of regenerating lost tissue?",
                choices: ["Kidney", "Heart", "Liver", "Pancreas"],
                correctAnswer: "Liver"

            }, {

                question: "What vitamin is produced when a person is exposed to sunlight?",
                choices: ["Vitamin D", "Vitamin B", "Vitamin A", "Vitamin C"],
                correctAnswer: "Vitamin D"

            }, {

                question: "Radish is a ?",
                choices: ["tuber", "bulb", "modified root", "conn"],
                correctAnswer: "modified root"

                }
        ];

// saving for future ref:
// question: "Radish is a ?",
// choices: [{text: "tuber", isCorrect: false }, {text: "bulb", isCorrect: false }, {text: "modified root",  isCorrect: true }, {text: "conn", isCorrect: false }]
              
        
        
$(document).on("click", "#button1", function(event) {
    done();
});

//var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//document.getElementById("seconds").innerHTML = seconds + "s ";
        
var count=30;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
      count-- ;
      if (count === 0){
         done();
      }
      $("#seconds").text(count);
}


// html all quesions and answers - each question has 4 "radio" type answers - make sure only one answer could be chosen
// scope? array? i-questions, w - answers with correct Answer;
//    html   questions.question[i]
for (var i=0; i<questions.length; i++){
    var questionClass="question" + i;
    $("#question-data").append('<div class='+questionClass + ' >' + questions[i].question + '</div><br>');
    questions[i].choices.forEach(function(choice){
//    $('.' + questionClass).append('<input type="radio" name="answer' + i + '" id="answers" value="' + choice + '">');
        $('.' + questionClass).append('<div><input type="radio" name="answer' + i + '" id="answers" value="' + choice + '">');
    $('.' + questionClass).append('<label for="answers">' + choice + '</label></div>');

    })
}        
        
//   radioBtn.appendTo('#target');
//   $("#question-choices").append(":radio")(choice);

//a.forEach(function(element) {
//    console.log(element);
//});
// click done button(done) - all results will show up (html - "Game is Over" 1. Correct Answers: ; 2. Incorect Answers: ; 3. Unanswered: ;)

var answersCor = 0;
var incorrectAns = 0;
var unansAns = 0;
function done() { 
    $(".container").css("display", "none");  
    $(".donePage").show();
    $("#timer").css("display", "none");
    $("#button1").hide();
    clearInterval(counter);
    var answerZero = $("input[name='answer0']:checked").val();
    var answerOne = $("input[name='answer1']:checked").val();
    var answerTwo = $("input[name='answer2']:checked").val();
    var answerThree = $("input[name='answer3']:checked").val();
    var answerFour = $("input[name='answer4']:checked").val();
    checkAnswer(answerZero, 0);
    checkAnswer(answerOne, 1);
    checkAnswer(answerTwo, 2);
    checkAnswer(answerThree, 3);
    checkAnswer(answerFour, 4);

}      

function checkAnswer(answer, index){
    var userPick = answer;
    console.log(userPick);
    if (userPick === questions[index].correctAnswer) {
        answersCor++;
    } else if(!userPick) {
        unansAns++;
    }else if(userPick !== questions[index].correctAnswer) {
        incorrectAns++;
    } 
    $("#correctA").text(answersCor);
    $("#incorrectA").text(incorrectAns);
    $("#unansweredA").text(unansAns);
} 
    })

})
