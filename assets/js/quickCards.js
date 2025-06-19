// EXAM START
let quizData = [];
let timerInterval;
let timeLeft = 20 * 60; // 20 minutes

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitAnswers(true);
    }
  }, 1000);
}

function loadQuiz() {
  fetch("/spaceberry/assets/data/quiz-exam.json")
    .then((res) => res.json())
    .then((data) => {
      quizData = data;
      const container = document.getElementById("quizContainer");
      quizData.forEach((q, idx) => {
        const block = document.createElement("div");
        block.className = "quiz-section";
        block.innerHTML = `
          <p><strong>${idx + 1}. ${q.question}</strong></p>
          ${q.options
            .map((opt, i) => {
              const label = String.fromCharCode(65 + i); // A, B, C, D
              return `
              <div class="option-item">
                <label>
                  <input type="radio" name="q${idx}" value="${i}">
                  <span class="option-text"><span class="option-letter">${label}.</span> ${opt}</span>
                </label>
              </div>`;
            })
            .join("")}
        `;
        container.appendChild(block);
      });
      startTimer();
    });
}

function submitAnswers(auto = false) {
  clearInterval(timerInterval);
  let score = 0;
  quizData.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && parseInt(selected.value) === q.answerIndex) {
      score++;
    }
  });
  document.getElementById("scoreDisplay").textContent = `Your score: ${score} / ${quizData.length}`;
  localStorage.setItem("examScore", score);
  if (auto) alert("⏰ Time's up! Your score has been submitted.");
}

window.onload = loadQuiz;
// EXAM END

// GRAMMAR START
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitAnswers(true);
    }
  }, 1000);
}

function loadQuiz() {
  fetch("/spaceberry/assets/data/quiz-grammar.json")
    .then((res) => res.json())
    .then((data) => {
      quizData = data;
      const container = document.getElementById("quizContainer");
      container.innerHTML = "";
      quizData.forEach((q, idx) => {
        const block = document.createElement("div");
        block.className = "quiz-section";
        block.innerHTML = `
              <p><strong>${idx + 1}. ${q.question}</strong></p>
              ${q.options
                .map((opt, i) => {
                  const label = String.fromCharCode(65 + i);
                  return `
                  <div class="option-item">
                    <label>
                      <input type="radio" name="q${idx}" value="${i}">
                      <span class="option-text"><span class="option-letter">${label}.</span> ${opt}</span>
                    </label>
                  </div>`;
                })
                .join("")}
            `;
        container.appendChild(block);
      });
      startTimer();
    });
}

function submitAnswers(auto = false) {
  clearInterval(timerInterval);
  let score = 0;
  quizData.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && parseInt(selected.value) === q.answerIndex) {
      score++;
    }
  });
  document.getElementById("scoreDisplay").textContent = `Your score: ${score} / ${quizData.length}`;
  localStorage.setItem("grammarScore", score);
  if (auto) alert("⏰ Time's up! Your answers have been submitted.");
}

window.onload = loadQuiz;
// GRAMMAR END

// WRITING START
let timer = setInterval(() => {
  timeLeft--;
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    submitWriting(true);
  }
}, 1000);

const textarea = document.getElementById("writingInput");
textarea.addEventListener("input", updateWordCount);

function updateWordCount() {
  const text = textarea.value.trim();
  const count = text.length > 0 ? text.split(/\s+/).length : 0;
  document.getElementById("wordCount").textContent = `Word Count: ${count}`;
}

function submitWriting(auto = false) {
  const text = textarea.value.trim();
  const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;

  if (wordCount < 100 && !auto) {
    alert("⚠ Please write at least 100 words.");
    return;
  }

  localStorage.setItem("writingEssay", text);
  document.getElementById("submitMessage").textContent = "✅ Writing submitted successfully!";
  if (auto) alert("⏰ Time's up! Your writing has been auto-submitted.");
}
// WRITING END
