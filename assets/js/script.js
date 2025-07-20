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

  const clockEl = document.getElementById("digitalClock");
  const dateEl = document.getElementById("clockDate");

  if (clockEl) clockEl.textContent = timeString;
  if (dateEl) dateEl.textContent = dateString;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // first run
// JAM DIGITAL END

// QUIZ START
let score = 0;

function checkMultipleChoice() {
  const answer = document.querySelector('input[name="q1"]:checked');
  const feedback = document.getElementById("feedback-q1");
  if (answer && answer.value === "Jakarta") {
    feedback.textContent = "Benar!";
    feedback.style.color = "green";
    score += 10;
  } else {
    feedback.textContent = "Salah, jawabannya Jakarta.";
    feedback.style.color = "red";
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
  document.querySelectorAll(".drop-zone").forEach((zone) => {
    const answer = zone.firstChild?.textContent;
    if (answer === zone.dataset.correct) {
      correct++;
    }
  });
  const feedback = document.getElementById("feedback-q2");
  if (correct === 2) {
    feedback.textContent = "Semua jawaban benar!";
    feedback.style.color = "green";
    score += 10;
  } else {
    feedback.textContent = "Masih ada jawaban salah.";
    feedback.style.color = "red";
  }
  updateScore();
}

function checkFillBlank() {
  const answer = document.getElementById("q3").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback-q3");
  if (answer === "thomas edison") {
    feedback.textContent = "Benar!";
    feedback.style.color = "green";
    score += 10;
  } else {
    feedback.textContent = "Salah, jawabannya Thomas Edison.";
    feedback.style.color = "red";
  }
  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent = score;
}
// QUIZ END

// SCHEDULE START
const baseDate = new Date();
const materials = [
  {
    name: "Modul 1",
    link: "/spaceberry/assets/page/booksAndLibrary/modul1.html",
  },
  {
    name: "Modul 2",
    link: "/spaceberry/assets/page/booksAndLibrary/modul2.html",
  },
  {
    name: "Modul 3",
    link: "/spaceberry/assets/page/booksAndLibrary/modul3.html",
  },
  {
    name: "Modul 4",
    link: "/spaceberry/assets/page/booksAndLibrary/modul4.html",
  },
  {
    name: "Modul 5",
    link: "/spaceberry/assets/page/booksAndLibrary/modul5.html",
  },
  {
    name: "Modul 6",
    link: "/spaceberry/assets/page/booksAndLibrary/modul6.html",
  },
  {
    name: "Modul 7",
    link: "/spaceberry/assets/page/booksAndLibrary/modul7.html",
  },
  {
    name: "Modul 8",
    link: "/spaceberry/assets/page/booksAndLibrary/modul8.html",
  },
  {
    name: "Modul 9",
    link: "/spaceberry/assets/page/booksAndLibrary/modul9.html",
  },
  { name: "Dictionary", link: "/spaceberry/assets/page/dictionary.html" },
];

function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function generatePlanner() {
  const days = parseInt(document.getElementById("planDays").value);
  const tbody = document.getElementById("plannerBody");
  tbody.innerHTML = "";

  for (let i = 0; i < days; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    const material = materials[i % materials.length];
    tbody.innerHTML += `
        <tr>
          <td>Day ${i + 1}</td>
          <td>${formatDate(d)}</td>
          <td><a href="${material.link}" target="_blank">${
      material.name
    }</a></td>
        </tr>
      `;
  }
}

function downloadPDF() {
  const element = document.querySelector(".schedule-section");
  html2pdf().from(element).save("study-plan.pdf");
}

window.addEventListener("load", generatePlanner);
// SCHEDULE END

// SEARCHBAR INDEX START
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");

  const statisticsSection = document.querySelector(".statistics");
  const wordSetsSection = document.querySelector(".word-sets");
  const quickStartSection = document.querySelector(".quick-start");

  const wordCards = wordSetsSection.querySelectorAll(".card-title");
  const quickCards = quickStartSection.querySelectorAll(".quick-card-title");

  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    // Tracking match
    let wordMatch = false;
    let quickMatch = false;

    // Word Sets filter
    wordCards.forEach((titleEl) => {
      const parentCard = titleEl.closest(".card");
      const match = titleEl.textContent.toLowerCase().includes(query);

      parentCard.style.display = match ? "" : "none";
      if (match) wordMatch = true;
    });

    // Quick Start filter
    quickCards.forEach((titleEl) => {
      const parentCard = titleEl.closest(".quick-card");
      const match = titleEl.textContent.toLowerCase().includes(query);

      parentCard.style.display = match ? "" : "none";
      if (match) quickMatch = true;
    });

    // Tampilkan/sembunyikan section title
    wordSetsSection.style.display = wordMatch || query === "" ? "" : "none";
    quickStartSection.style.display = quickMatch || query === "" ? "" : "none";

    // Statistik hanya muncul saat tidak ada query
    statisticsSection.style.display = query === "" ? "" : "none";
  });
});
// SEARCHBAR INDEX END

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card[data-link], .quick-card[data-link]");

  cards.forEach((card) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});
