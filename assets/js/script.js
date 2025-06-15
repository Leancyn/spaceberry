// JAM DIGITAL START
function updateDigitalClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateString = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("digitalClock").textContent = timeString;
  document.getElementById("clockDate").textContent = dateString;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // first run
// JAM DIGITAL END

// QUIZ START
let score = 0;

function checkMultipleChoice() {
  const answer = document.querySelector('input[name="q1"]:checked');
  const feedback = document.getElementById('feedback-q1');
  if (answer && answer.value === 'Jakarta') {
    feedback.textContent = 'Benar!';
    feedback.style.color = 'green';
    score += 10;
  } else {
    feedback.textContent = 'Salah, jawabannya Jakarta.';
    feedback.style.color = 'red';
  }
  updateScore();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  if (!ev.target.hasChildNodes()) ev.target.appendChild(draggedElement);
}

function checkDragDrop() {
  let correct = 0;
  document.querySelectorAll('.drop-zone').forEach((zone) => {
    const answer = zone.firstChild?.textContent;
    if (answer === zone.dataset.correct) {
      correct++;
    }
  });
  const feedback = document.getElementById('feedback-q2');
  if (correct === 2) {
    feedback.textContent = 'Semua jawaban benar!';
    feedback.style.color = 'green';
    score += 10;
  } else {
    feedback.textContent = 'Masih ada jawaban salah.';
    feedback.style.color = 'red';
  }
  updateScore();
}

function checkFillBlank() {
  const answer = document.getElementById('q3').value.trim().toLowerCase();
  const feedback = document.getElementById('feedback-q3');
  if (answer === 'thomas edison') {
    feedback.textContent = 'Benar!';
    feedback.style.color = 'green';
    score += 10;
  } else {
    feedback.textContent = 'Salah, jawabannya Thomas Edison.';
    feedback.style.color = 'red';
  }
  updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = score;
}
// QUIZ END