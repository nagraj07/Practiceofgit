document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');

    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const scoreScreen = document.getElementById('score-screen');

    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
            answer: "Harper Lee"
        },
        {
            question: "What is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            answer: "2"
        }
    ];

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    });
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        startScreen.style.display = 'none';
        questionScreen.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        nextButton.style.display = 'none';
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', selectOption);
            optionsContainer.appendChild(button);
        });
    }

    function selectOption(e) {
        const selectedOption = e.target.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }
        nextButton.style.display = 'block';
    }

    function showScore() {
        questionScreen.style.display = 'none';
        scoreScreen.style.display = 'block';
        scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    }

    function restartQuiz() {
        scoreScreen.style.display = 'none';
        startScreen.style.display = 'block';
    }
});
