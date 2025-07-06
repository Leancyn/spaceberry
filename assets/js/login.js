const firebaseConfig = {
  apiKey: "AIzaSyBDIYWlSgxpjdpHAs6xKFJGaTvM86EKe-4",
  authDomain: "spaceberry-bf68b.firebaseapp.com",
  projectId: "spaceberry-bf68b",
  storageBucket: "spaceberry-bf68b.firebasestorage.app",
  messagingSenderId: "185481236967",
  appId: "1:185481236967:web:222422307c4218517fed42",
  measurementId: "G-2E7GZY8NNE",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const msg = document.getElementById("msg");

function login() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  msg.textContent = "";

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      location.href = "/spaceberry/index.html";
    })
    .catch((err) => {
      msg.style.color = "crimson";
      msg.textContent = err.message;
    });
}

function register() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  msg.textContent = "";

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Registration successful. You can now login.";
    })
    .catch((err) => {
      msg.style.color = "crimson";
      msg.textContent = err.message;
    });
}

// Auto redirect if already logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    location.href = "/spaceberry/index.html";
  }
});
