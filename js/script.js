const questions = [
    {
        question: "Qu'est-ce que HTML?",
        options: ["HyperText Markup Language", "Haute Technologie de Machine Learning", "HyperTransfert et Langage de balisage"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Quel instrument est souvent utilisé pour jouer du jazz?",
        options: ["Guitare", "Saxophone", "Piano"],
        correctAnswer: "Saxophone"
    },
    {
        question: "Quel est le sport le plus populaire au monde?",
        options: ["Basketball", "Football (Soccer)", "Tennis"],
        correctAnswer: "Football (Soccer)"
    },
    {
        question: "Quelle est la principale fonction du rouge à lèvres?",
        options: ["Soigner les lèvres", "Ajouter de la couleur aux lèvres", "Équilibrer le teint du visage"],
        correctAnswer: "Ajouter de la couleur aux lèvres"
    },
    {
        question: "Qui a écrit l'opéra 'La Flûte enchantée'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach"],
        correctAnswer: "Wolfgang Amadeus Mozart"
    },
    {
        question: "Quelle est la couleur de base d'un maquillage de contour?",
        options: ["Rose", "Marron", "Jaune"],
        correctAnswer: "Marron"
    },
    {
        question: "Quel est l'artiste qui a chanté 'Shape of You'?",
        options: ["Justin Bieber", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: "Ed Sheeran"
    },
    {
        question: "Quel est le sport dans lequel on utilise une raquette et une balle de petits dimensions?",
        options: ["Basketball", "Badminton", "Football"],
        correctAnswer: "Badminton"
    },
    {
        question: "Qui a remporté la Coupe du Monde de football en 2018?",
        options: ["Brésil", "France", "Allemagne"],
        correctAnswer: "France"
    },
    {
        question: "Quel est l'ingrédient de base du fond de teint?",
        options: ["Acide hyaluronique", "Argile", "Crème"],
        correctAnswer: "Crème"
    },
];


const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
let score = 0;

function generateQuiz() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement("button");
            optionButton.innerHTML = option;
            optionButton.addEventListener("click", () => checkAnswer(index, optionIndex));
            questionElement.appendChild(optionButton);
        });

        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(questionIndex, optionIndex) {
    const selectedOption = questions[questionIndex].options[optionIndex];
    const correctAnswer = questions[questionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    /*vérifiez si toutes les questions ont été répondues*/
    if (questionIndex === questions.length - 1) {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none"; /*masquer le conteneur du quiz*/
    resultContainer.innerHTML = `<p>Votre score est ${score} sur ${questions.length} questions.</p>`;
    resultContainer.style.display = "block"; /*afficher le conteneur de résultats*/
}

/*appel de la fonction pour générer le quiz*/
generateQuiz();

// Animation d'apparition
window.addEventListener('load', () => {
    const homeText = document.querySelector('.home-text');
    homeText.classList.add('fade-in');
});
