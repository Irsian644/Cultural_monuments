// Quiz-Fragen
const quizQuestions = [
    {
        question: "Wo befindet sich Butrint?",
        options: [
            "Im Norden Albaniens",
            "Im Süden Albaniens",
            "Im Osten Albaniens",
            "Im Westen Albaniens"
        ],
        correct: 1
    },
    {
        question: "Wie hoch ist der Kölner Dom?",
        options: [
            "137 Meter",
            "147 Meter",
            "157 Meter",
            "167 Meter"
        ],
        correct: 2
    },
    {
        question: "Wofür ist die Burg von Gjirokastra bekannt?",
        options: [
            "Für ihren Strandblick",
            "Für ihre Lage auf einem Hügel",
            "Für ihre moderne Architektur",
            "Für ihre Unterwasserruinen"
        ],
        correct: 1
    },
    {
        question: "Wofür steht das Brandenburger Tor?",
        options: [
            "Für Krieg",
            "Für Freiheit",
            "Für Landwirtschaft",
            "Für Industrie"
        ],
        correct: 1
    },
    {
        question: "Welches dieser Denkmäler ist UNESCO-Weltkulturerbe?",
        options: [
            "Nur Butrint",
            "Nur das Brandenburger Tor",
            "Nur der Kölner Dom",
            "Alle genannten"
        ],
        correct: 3
    }
];

// Quiz Functionality
const questions = [
    {
        question: "Wie hoch ist der Kölner Dom?",
        options: ["157 Meter", "142 Meter", "165 Meter", "137 Meter"],
        correct: 0
    },
    {
        question: "In welchem Jahrhundert wurde die Burg von Gjirokastra erbaut?",
        options: ["12. Jahrhundert", "13. Jahrhundert", "14. Jahrhundert", "15. Jahrhundert"],
        correct: 1
    },
    {
        question: "Wann wurde das Brandenburger Tor fertiggestellt?",
        options: ["1788", "1791", "1793", "1795"],
        correct: 2
    },
    {
        question: "Welche Zivilisation gründete die antike Stadt Butrint?",
        options: ["Römer", "Griechen", "Illyrer", "Byzantiner"],
        correct: 1
    },
    {
        question: "Wie lange dauerte der Bau des Kölner Doms insgesamt?",
        options: ["Über 600 Jahre", "Über 400 Jahre", "Über 500 Jahre", "Über 300 Jahre"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

// DOM-Elemente
const quizContent = document.getElementById('quiz-content');
const quizQuestion = document.querySelector('.quiz-question');
const quizOptions = document.querySelector('.quiz-options');
const nextButton = document.getElementById('next-question');

// Monument Details
const monumentDetails = {
    butrint: {
        title: "Butrint",
        description: "Butrint ist eine antike Stadt im Süden Albaniens. Die Stätte umfasst ein Amphitheater, eine Kirche und antike Mauern. Archäologische Ausgrabungen haben zahlreiche Artefakte und Strukturen aus verschiedenen Epochen zutage gefördert. Die umgebende Natur verleiht dem Ort zusätzliche Schönheit und macht ihn besonders im Sommer zu einem beliebten Touristenziel. Butrint war in der römischen Zeit ein wichtiges Handelszentrum.",
        features: [
            { icon: "🏛️", text: "Antikes Amphitheater" },
            { icon: "⛪", text: "Frühchristliche Kirche" },
            { icon: "🏺", text: "Archäologische Funde" },
            { icon: "🌳", text: "Wunderschöne Naturkulisse" },
            { icon: "🏰", text: "Römische Ruinen" }
        ],
        imageUrl: "https://media.istockphoto.com/id/524508473/photo/amphitheater-of-the-ancient-baptistery-at-butrint-albania.jpg?s=612x612&w=0&k=20&c=u2HamVK7iL4Fq3hNYhdqt5GdBB4z3sxE4ScGVeE-sXE="
    },
    gjirokastra: {
        title: "Burg von Gjirokastra",
        description: "Die Burg von Gjirokastra thront auf einem Hügel über der historischen Stadt. Es handelt sich um eine mittelalterliche Burg mit einem beeindruckenden Panoramablick über die Umgebung. Die Burg beherbergt heute ein Waffenmuseum mit verschiedenen Artefakten. Die gesamte Stadt Gjirokastra ist UNESCO-Weltkulturerbe und bekannt für ihre Steinarchitektur. Während der kommunistischen Zeit diente die Burg als Gefängnis.",
        features: [
            { icon: "🏰", text: "Mittelalterliche Architektur" },
            { icon: "🗺️", text: "Panoramablick" },
            { icon: "🏛️", text: "UNESCO-Weltkulturerbe" },
            { icon: "⚔️", text: "Waffenmuseum" },
            { icon: "🏺", text: "Historisches Gefängnis" }
        ],
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bb/dd/77/caption.jpg?w=1200&h=-1&s=1"
    },
    brandenburg: {
        title: "Brandenburger Tor",
        description: "Das Brandenburger Tor ist Berlins bekanntestes Wahrzeichen. Es steht am Pariser Platz und war einst Teil der Berliner Mauer. Nach 1989 wurde es zu einem kraftvollen Symbol der deutschen Einheit und Freiheit. Das Tor verfügt über sechs große Säulen und wird von der Quadriga-Statue gekrönt. Es ist von bedeutenden Gebäuden umgeben und ist Austragungsort vieler wichtiger Veranstaltungen.",
        features: [
            { icon: "🏛️", text: "Sechs große Säulen" },
            { icon: "🐎", text: "Quadriga-Statue" },
            { icon: "🤝", text: "Symbol der Einheit" },
            { icon: "📍", text: "Historischer Standort" },
            { icon: "🎭", text: "Kulturelle Veranstaltungen" }
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1200px-Brandenburger_Tor_abends.jpg"
    },
    cologne: {
        title: "Kölner Dom",
        description: "Der Kölner Dom ist ein Meisterwerk der gotischen Architektur mit einer Höhe von 157 Metern. Er ist eine der größten Kirchen Europas und seine Fertigstellung dauerte über 600 Jahre. Der Dom beherbergt wichtige Reliquien und besticht durch seine wunderschönen Glasfenster. Besucher können die Türme besteigen und einen spektakulären Ausblick genießen. Bemerkenswert ist, dass der Dom den Zweiten Weltkrieg überstand und heute ein wichtiger Pilgerort ist.",
        features: [
            { icon: "⛪", text: "Gotische Architektur" },
            { icon: "📏", text: "157 Meter Höhe" },
            { icon: "🎨", text: "Glasmalereien" },
            { icon: "✝️", text: "Religiöse Reliquien" },
            { icon: "🏰", text: "Besteigbare Türme" }
        ],
        imageUrl: "https://static.toiimg.com/thumb/msid-40357582,width=1200,height=900/40357582.jpg"
    }
};

// Quiz initialisieren
function initializeQuiz() {
    const questionElement = document.querySelector('.question');
    const optionsContainer = document.querySelector('.options');
    const progressFill = document.querySelector('.progress-fill');
    const currentQuestionSpan = document.querySelector('.current-question');
    const totalQuestionsSpan = document.querySelector('.total-questions');
    const feedbackMessage = document.querySelector('.feedback-message');

    // Update total questions
    totalQuestionsSpan.textContent = questions.length;

    function updateQuestion() {
        const question = questions[currentQuestion];
        hasAnswered = false;

        // Update progress
        currentQuestionSpan.textContent = currentQuestion + 1;
        progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

        // Update question text
        questionElement.textContent = question.question;
        questionElement.style.opacity = '0';
        setTimeout(() => {
            questionElement.style.opacity = '1';
        }, 10);

        // Clear previous options and feedback
        optionsContainer.innerHTML = '';
        feedbackMessage.innerHTML = '';
        feedbackMessage.className = 'feedback-message';

        // Create new options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            
            optionElement.addEventListener('click', () => {
                if (hasAnswered) return;
                
                hasAnswered = true;
                const isCorrect = index === question.correct;

                // Remove any previous selections
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected', 'correct', 'wrong');
                });

                // Add appropriate classes
                optionElement.classList.add('selected');
                optionElement.classList.add(isCorrect ? 'correct' : 'wrong');

                // Show feedback message
                feedbackMessage.className = `feedback-message ${isCorrect ? 'correct' : 'wrong'}`;
                feedbackMessage.textContent = isCorrect ? 
                    'Richtig! Sehr gut gemacht!' : 
                    `Leider falsch. Die richtige Antwort ist: ${question.options[question.correct]}`;

                if (isCorrect) score++;

                // Enable next button
                nextButton.disabled = false;
            });

            optionsContainer.appendChild(optionElement);
        });

        // Disable next button until answer is selected
        nextButton.disabled = true;
    }

    nextButton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            updateQuestion();
        } else {
            // Show final score
            const quizContainer = document.querySelector('.quiz-container');
            quizContainer.innerHTML = `
                <div class="quiz-header">
                    <h2>Quiz beendet!</h2>
                </div>
                <div class="quiz-score">
                    Sie haben
                    <span>${score} von ${questions.length}</span>
                    Fragen richtig beantwortet!
                </div>
                <button class="quiz-button" onclick="location.reload()">Quiz neu starten</button>
            `;
        }
    });

    // Initialize first question
    updateQuestion();
}

// Create Modal Container
const modalContainer = document.createElement('div');
modalContainer.className = 'modal';
modalContainer.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h2></h2>
            <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
            <img class="modal-image" src="" alt="">
            <p class="modal-description"></p>
            <div class="modal-features"></div>
        </div>
    </div>
`;
document.body.appendChild(modalContainer);

// Modal Functionality
function showModal(monumentId) {
    const monument = monumentDetails[monumentId];
    if (!monument) return;

    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal-header h2');
    const modalImage = modal.querySelector('.modal-image');
    const modalDescription = modal.querySelector('.modal-description');
    const modalFeatures = modal.querySelector('.modal-features');

    modalTitle.textContent = monument.title;
    modalImage.src = monument.imageUrl;
    modalImage.alt = monument.title;
    modalDescription.textContent = monument.description;

    modalFeatures.innerHTML = monument.features
        .map(feature => `
            <div class="feature-item">
                <span class="feature-icon">${feature.icon}</span>
                <span>${feature.text}</span>
            </div>
        `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
document.querySelectorAll('.monument-card').forEach(card => {
    const learnMoreBtn = card.querySelector('.learn-more');
    learnMoreBtn.addEventListener('click', () => {
        const monumentId = Array.from(card.classList)
            .find(className => monumentDetails[className])
            || card.querySelector('.monument-image').classList[1];
        showModal(monumentId);
    });
});

document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal')) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for monuments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.monument-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);

// Discover More Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const discoverButton = document.querySelector('.cta-button');
    
    discoverButton.addEventListener('click', () => {
        const monumentsSection = document.getElementById('monuments');
        
        // Add highlight animation class to monuments section
        monumentsSection.classList.add('highlight-section');
        
        // Smooth scroll to monuments section
        monumentsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Remove highlight class after animation
        setTimeout(() => {
            monumentsSection.classList.remove('highlight-section');
        }, 2000);
    });
}); 