const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Contraceptive methods such as pills, injectables, implants and intrauterine devices have negative effects on the health of adolescent girls.',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true }
        ]
    },
    {
        question: 'The Human Papilloma Virus (HPV) vaccine is an effective means of preventing:',
        answers: [
            { text: 'Breast Cancer', correct: false },
            { text: 'Uterine Cancer', correct: false },
            { text: 'Ovarian Cancer', correct: false },
            { text: 'Cervical Cancer', correct: true }
        ]
    },
    {
        question: 'What does the term “intersex” mean?',
        answers: [
            { text: 'It refers to people that cross dress', correct: false },
            { text: ' A medical term referring to a variety of conditions in which a person is born with sexual or reproductive anatomy that does not fit the typically definitions of either female or male', correct: true },
            { text: ' A person that does not identify with their sex assigned at birth', correct: false },
            { text: 'A person that identifies as both male and female', correct: false }
        ]
    },
    {
        question: 'What is heteronormativity?',
        answers: [
            { text: ' The belief that it is natural for men and women to be sexual or romantic partners', correct: false },
            { text: 'The assumption that all people are heterosexual/straight unless you learn otherwise', correct: true },
            { text: ' The attraction that people feel for other people of a different gender', correct: false },
            { text: ' A slang term to refer to straight people', correct: false }
        ]
    },
    {
        question: 'What is the most common bacterial STD?',
        answers: [
            { text: 'Syphillis', correct: false },
            { text: 'Chlamydia', correct: true },
            { text: 'Gonorrhoea', correct: false },
            { text: 'Herpes', correct: false }
        ]
    },
    {
        question: 'What is the real life effectiveness of condoms',
        answers: [
            { text: '98%', correct: false },
            { text: '90%', correct: false },
            { text: '85%', correct: true },
            { text: '96%', correct: false }
        ]
    },
    {
        question: 'What do male condoms offer that other forms of birth control do not?',
        answers: [
            { text: 'Least chance of failure', correct: false },
            { text: ' Best protection against STDs', correct: true },
            { text: ' Cheapest to use', correct: false },
            { text: 'All of the above', correct: false }
        ]
    },
    {
        question: 'Besides the condom, which is another barrier method of birth control?',
        answers: [
            { text: 'Diaphragm', correct: true },
            { text: 'IUD', correct: false },
            { text: 'Withdrawal', correct: false },
            { text: 'Sterilization', correct: false }
        ]
    },
    {
        question: 'Which type of intrauterine device (IUD) is available?',
        answers: [
            { text: 'Copper', correct: false },
            { text: 'Titanium', correct: false },
            { text: 'Hormonal', correct: false },
            { text: 'A and C', correct: true }
        ]
    },
    {
        question: 'How long is the vaginal ring left in place?',
        answers: [
            { text: '1 week', correct: false },
            { text: '2 week', correct: false },
            { text: '3 week', correct: true },
            { text: '1 month', correct: false }
        ]
    }

]