// TODO:
//create a function to change questions and buttons
//create a div that is labeled something like response
//create logic to check if answer is correct, if not correct subtract from timeRemaining variable
//create function to end game and save to localstorage

// }, interval);
var timeRemaining = 180
var timeInterval;
var startButtonEl = document.querySelector('#start-btn')
var timerEl = document.querySelector('#timer')

// clearInterval

var containerEl = document.querySelector('#container')
var quizTitleEl = document.querySelector('#quiz-title')

function startQuiz() {
    timeInterval = setInterval(timeLeft, 1000)
    containerEl.removeChild(quizTitleEl)
    startGame()
}

function timeLeft() {
    timeRemaining--;
    //timer element in html = timeRemaining
    timerEl.textContent = timeRemaining
    if (timeRemaining <= 0) {
        clearInterval(timeInterval)
    }
}

var questionIndex = 0
var score = 0

var questions = [
    {
        question: 'Which of the following is not a data type?',
        choice1: 'null',
        choice2: 'integer',
        choice3: 'string',
        choice4: 'number',
        answer: 'integer',
    },
    {
        question: 'What does NaN represent?',
        choice1: 'Not a number',
        choice2: 'No answer number',
        choice3: 'Never a number',
        choice4: 'None of the above',
        answer: 'Not a number',
    },
    {
        question: 'What is a boolean?',
        choice1: 'A true/false statement',
        choice2: 'A return statement',
        choice3: 'A string of numbers',
        choice4: 'A method',
        answer: 'A true/false statement',
    },
    {
        question: 'What is the correct operator meaning "OR"?',
        choice1: '&&',
        choice2: '===',
        choice3: '||',
        choice4: '++',
        answer: '||',
    }
]

startGame = () => {
    /*question.innerHTML = questions[questionIndex].question
    choiceA.innerHTML = questions[questionIndex].choice1
    choiceB.innerHTML = questions[questionIndex].choice2
    choiceC.innerHTML = questions[questionIndex].choice3
    choiceD.innerHTML = questions[questionIndex].choice4*/
    var questionEl = document.createElement("h1")
    questionEl.textContent = questions[questionIndex].question
    containerEl.appendChild(questionEl)

    var buttonAEl = document.createElement("button")
    buttonAEl.textContent = questions[questionIndex].choice1
    containerEl.appendChild(buttonAEl)

    var buttonBEl = document.createElement("button")
    buttonBEl.textContent = questions[questionIndex].choice2
    containerEl.appendChild(buttonBEl)

    var buttonCEl = document.createElement("button")
    buttonCEl.textContent = questions[questionIndex].choice3
    containerEl.appendChild(buttonCEl)

    var buttonDEl = document.createElement("button")
    buttonDEl.textContent = questions[questionIndex].choice4
    containerEl.appendChild(buttonDEl)

}

changeQuestion = () => {
    questionIndex++
    question.innerHTML = questions[questionIndex].question
    choiceA.innerHTML = questions[questionIndex].choice1
    choiceB.innerHTML = questions[questionIndex].choice2
    choiceC.innerHTML = questions[questionIndex].choice3
    choiceD.innerHTML = questions[questionIndex].choice4

    var answer = questions[questionIndex].answer
    // if(this.value === answer) {
    //     alert('Correct Answer')
    // } else{
    //     alert('Incorrect Answer')
    // }
    console.log(this.value)
}

startButtonEl.addEventListener('click', startQuiz)

//-----------------------//
// OLD CODE TO REFERENCE
//-----------------------//
// function myTimer() {
//     const d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

//create an event listener to clear the children within the  div with the container class and then append the game.html to that 
// button.addEventListener('click', clearContainer)
/*
to empty out the div, on the start button listener, clear out the children using container.children().empty then rebuild using
document.createElement and innertext or innerHtml and apply id's or class with element.attribute or element.style
*/

// var clearContainer(

// )

// var question = document.querySelector('#question')

// var choiceA = document.querySelector('#choice-a')
// var choiceB = document.querySelector('#choice-b')
// var choiceC = document.querySelector('#choice-c')
// var choiceD = document.querySelector('#choice-d')

// choiceA.addEventListener('click', changeQuestion)
// choiceB.addEventListener('click', changeQuestion)
// choiceC.addEventListener('click', changeQuestion)
// choiceD.addEventListener('click', changeQuestion)



    // local storage

    // < li onclick = "myfunction(this)" >

    //     function myfunction(li) {
    //         var TextInsideLi = li.getElementsByTagName('p')[0].innerHTML;
    //     }