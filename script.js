// Quiz Data for Technical and Sports Categories
const technicalQuiz = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperTool Markup Language", "HighText Machine Language", "HyperText Machine Language"], correct: 0 },
    { question: "Which language is used for web development?", options: ["Python", "JavaScript", "C++", "Java"], correct: 1 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Cascading Script Sheets", "Computer Style System", "Cascading System Style"], correct: 0 },
    { question: "Which tag is used for adding a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<hyper>"], correct: 0 },
    { question: "JavaScript is a ____ language.", options: ["Markup", "Scripting", "Programming", "Database"], correct: 1 },
    { question: "Which HTML tag is used to embed an image?", options: ["<img>", "<picture>", "<image>", "<src>"], correct: 0 },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "System Query Language", "Sorted Query Language", "Simplified Query Language"], correct: 0 },
    { question: "Which protocol is used for secure communication over the web?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
    { question: "What is the file extension of JavaScript files?", options: [".java", ".js", ".jsx", ".script"], correct: 1 },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Google", "Mozilla"], correct: 1 },
  ];
  
  const sportsQuiz = [
    { question: "How many players are in a soccer team?", options: ["10", "11", "12", "9"], correct: 1 },
    { question: "What does ICC stand for in cricket?", options: ["Indian Cricket Council", "International Cricket Council", "Inter-City Cricket", "Independent Cricket Committee"], correct: 1 },
    { question: "Which country won the FIFA World Cup 2018?", options: ["Germany", "Argentina", "France", "Brazil"], correct: 2 },
    { question: "What is the national sport of Canada?", options: ["Hockey", "Lacrosse", "Cricket", "Baseball"], correct: 1 },
    { question: "How many sets are there in a volleyball game?", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "Which player holds the record for the most goals in football?", options: ["Pele", "Cristiano Ronaldo", "Lionel Messi", "Maradona"], correct: 1 },
    { question: "Which country hosted the 2008 Summer Olympics?", options: ["China", "Japan", "USA", "Australia"], correct: 0 },
    { question: "Which cricket format has 20 overs?", options: ["Test", "ODI", "T20", "County"], correct: 2 },
    { question: "Who is known as the 'God of Cricket'?", options: ["MS Dhoni", "Ricky Ponting", "Sachin Tendulkar", "Virat Kohli"], correct: 2 },
    { question: "What is the highest governing body for tennis?", options: ["FIFA", "ICC", "ITF", "IOC"], correct: 2 },
  ];
  
  let selectedQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start Quiz
  function startQuiz(category) {
    selectedQuiz = category === "technical" ? technicalQuiz : sportsQuiz;
    document.getElementById("category-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
  }
  
  // Load Current Question
  function loadQuestion() {
    const questionTitle = document.getElementById("question-title");
    const optionsContainer = document.getElementById("options-container");
    const currentQuestion = selectedQuiz[currentQuestionIndex];
  
    questionTitle.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("btn");
      button.onclick = () => selectAnswer(button, index);
      optionsContainer.appendChild(button);
    });
  
    document.getElementById("next-btn").classList.add("hidden");
  }
  
  // Handle Answer Selection
  function selectAnswer(button, index) {
    // Highlight selected answer
    document.querySelectorAll("#options-container button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  
    // Store correct answer
    if (index === selectedQuiz[currentQuestionIndex].correct) score++;
  
    document.getElementById("next-btn").classList.remove("hidden");
  }
  
  // Move to Next Question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuiz.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  // Show Final Results
  function showResults() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score} / ${selectedQuiz.length}`;
  }
  
  // Reset Quiz
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("category-screen").classList.remove("hidden");
  }