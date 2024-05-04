var currentQuestion = 0;
var score = 0;
var questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au"
  }
];

function displayQuestion() {
  var questionElement = document.getElementById('question');
  var optionsElement = document.getElementById('options');
  
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';

  for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    var option = document.createElement('button');
    option.textContent = questions[currentQuestion].options[i];
    option.onclick = function() {
      checkAnswer(this.textContent);
    };
    optionsElement.appendChild(option);
  }
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'You scored ' + score + ' out of ' + questions.length + ' questions.';
    document.querySelector('button').style.display = 'none';
  }
}

displayQuestion();
