// Helpers to lowercase & trim for comparison
function cleanInput(str) {
  return str.trim().toLowerCase();
}

// Modul 1
function checkM1Q1() {
  const input = cleanInput(document.getElementById("m1q1").value);
  const fb = document.getElementById("m1q1-feedback");
  if (input.length > 0) {
    fb.textContent = `Hello, ${input}! Great job!`;
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Please enter your name.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 2
function checkM2Q1() {
  const input = cleanInput(document.getElementById("m2q1").value);
  const fb = document.getElementById("m2q1-feedback");
  if (input.includes("left")) {
    fb.textContent = "Correct! Person A should turn left.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again. Where does Person A turn?";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM2Q2() {
  const input = cleanInput(document.getElementById("m2q2").value);
  const fb = document.getElementById("m2q2-feedback");
  if (input.includes("go straight") || input.includes("straight")) {
    fb.textContent = "Correct! Person B said to go straight first.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again. What is the first direction given?";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 3
function checkM3Q1() {
  const input = cleanInput(document.getElementById("m3q1").value);
  const fb = document.getElementById("m3q1-feedback");
  const correct = "1,2,3,4";
  if (input === correct) {
    fb.textContent = "Correct order! Well done.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Incorrect. Try the order: 1,2,3,4";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 4
function checkM4Q1() {
  const val = document.getElementById("m4q1").value;
  const fb = document.getElementById("m4q1-feedback");
  if (val === "agreement") {
    fb.textContent = "Correct! The response is agreement.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. The woman agrees with the man.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM4Q2() {
  const val = document.getElementById("m4q2").value;
  const fb = document.getElementById("m4q2-feedback");
  if (val === "suggestion") {
    fb.textContent = "Correct! The woman makes a suggestion.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. She suggests to meet over lunch.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM4Q3() {
  const val = document.getElementById("m4q3").value;
  const fb = document.getElementById("m4q3-feedback");
  if (val === "uncertainty") {
    fb.textContent = "Correct! The man is uncertain about the bill date.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. He shows uncertainty.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 5
function checkM5Q1() {
  const input = cleanInput(document.getElementById("m5q1").value);
  const fb = document.getElementById("m5q1-feedback");
  if (input === "during") {
    fb.textContent = "Correct! We had lunch during the meeting.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. The correct answer is 'during'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM5Q2() {
  const input = cleanInput(document.getElementById("m5q2").value);
  const fb = document.getElementById("m5q2-feedback");
  if (input === "since") {
    fb.textContent = "Correct! She has been working here since 2019.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. The correct answer is 'since'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM5Q3() {
  const input = cleanInput(document.getElementById("m5q3").value);
  const fb = document.getElementById("m5q3-feedback");
  if (input === "before") {
    fb.textContent = "Correct! Finish your homework before dinner.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. The correct answer is 'before'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM5Q4() {
  const input = cleanInput(document.getElementById("m5q4").value);
  const fb = document.getElementById("m5q4-feedback");
  if (input === "during") {
    fb.textContent = "Correct! He rested during the break.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. The correct answer is 'during'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 6
function checkM6Q1() {
  const val = document.getElementById("m6q1").value;
  const fb = document.getElementById("m6q1-feedback");
  if (val === "b") {
    fb.textContent = "Correct! 'Hit the books' means to study hard.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. It means to study hard.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM6Q2() {
  const val = document.getElementById("m6q2").value;
  const fb = document.getElementById("m6q2-feedback");
  if (val === "a") {
    fb.textContent = "Correct! 'Under the weather' means feeling sick.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. It means feeling sick.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 7
function checkM7Q1() {
  const val = document.getElementById("m7q1").value;
  const fb = document.getElementById("m7q1-feedback");
  if (val === "disagreement") {
    fb.textContent = "Correct! Woman disagrees with the man.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. She disagrees.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM7Q2() {
  const val = document.getElementById("m7q2").value;
  const fb = document.getElementById("m7q2-feedback");
  if (val === "agreement") {
    fb.textContent = "Correct! Woman agrees with the man.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Wrong. She agrees.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 8
function checkM8Q1() {
  const input = cleanInput(document.getElementById("m8q1").value);
  const fb = document.getElementById("m8q1-feedback");
  if (input.includes("why don’t we go hiking") || input.includes("why don't we go hiking")) {
    fb.textContent = "Correct! That's the suggestion.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again. Find the suggestion phrase.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM8Q2() {
  const input = cleanInput(document.getElementById("m8q2").value);
  const fb = document.getElementById("m8q2-feedback");
  if (input.includes("i’m not sure") || input.includes("i am not sure")) {
    fb.textContent = "Correct! That's the uncertainty expression.";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again. Find the uncertainty phrase.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}

// Modul 9
function checkM9Q1() {
  const input = cleanInput(document.getElementById("m9q1").value);
  const fb = document.getElementById("m9q1-feedback");
  if (input === "hit the books") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'hit the books'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q2() {
  const input = cleanInput(document.getElementById("m9q2").value);
  const fb = document.getElementById("m9q2-feedback");
  if (input === "break the ice") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'break the ice'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q3() {
  const input = cleanInput(document.getElementById("m9q3").value);
  const fb = document.getElementById("m9q3-feedback");
  if (input === "under the weather") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'under the weather'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q4() {
  const input = cleanInput(document.getElementById("m9q4").value);
  const fb = document.getElementById("m9q4-feedback");
  if (input === "piece of cake") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'piece of cake'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q5() {
  const input = cleanInput(document.getElementById("m9q5").value);
  const fb = document.getElementById("m9q5-feedback");
  if (input === "costs an arm and a leg") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'costs an arm and a leg'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q6() {
  const input = cleanInput(document.getElementById("m9q6").value);
  const fb = document.getElementById("m9q6-feedback");
  if (input === "let the cat out of the bag") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'let the cat out of the bag'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
function checkM9Q7() {
  const input = cleanInput(document.getElementById("m9q7").value);
  const fb = document.getElementById("m9q7-feedback");
  if (input === "once in a blue moon") {
    fb.textContent = "Correct!";
    fb.className = "feedback";
    fb.style.color = "green";
  } else {
    fb.textContent = "Try again! The idiom is 'once in a blue moon'.";
    fb.className = "feedback wrong";
    fb.style.color = "red";
  }
}
