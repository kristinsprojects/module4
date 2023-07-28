var questionNumber = [
    {
        question: "What is a variable that cannot be reassigned?", 
        answers: 
        [
            {text: "var", correct:false},
            {text: "const", correct:true},
            {text: "let", correct:false},
            {text: "string", correct:false},
        ]
        
    },
    
    {   question: "Inside which html element do we put the Javascipt?",
        answers: 
        [
            {text: "<head>", correct:false},
            {text: "<script>", correct:true},
            {text: "<link>", correct:false},
            {text: "<meta>", correct:false},
        ]
    },

    {   question: "How would you call a function named myFunction?",
    answers: 
    [
        {text: "myfunction()", correct:false},
        {text: "myFunction", correct:false},
        {text: "myFunction()", correct:true},
        {text: "<myfunction>", correct:false},
    ]
    }
];


var question= document.querySelector("question");
var answer= document.querySelector("answer-options");
var nextButton= document.querySelector("next");

var currentQuestion= 0;
var score = 0;

nextButton.addEventListener("click")
    {
    if (currentQuestion < question.length){
        nextbuttonFunction();
    }
    };

function start(){
    currentQuestion= 0;
    score =0;
    showQuestions();
    setTime();
};

function showQuestions(event){
    event.preventDefault();
    var questionCounter= question[currentQuestion]
    var questionNumber= currentQuestion +1;
    console.log(event);

};

var time = document.querySelector(".time");


function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      }
    
    }, 120);
}


