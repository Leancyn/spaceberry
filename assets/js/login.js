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
const db = firebase.firestore();

let isLoginMode = true;

// Element references
const loginIdentity = document.getElementById("loginIdentity");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const toggleText = document.getElementById("toggleText");
const msg = document.getElementById("msg");

// Toggle between login and register
function toggleMode(toLogin) {
  isLoginMode = toLogin;

  loginIdentity.style.display = toLogin ? "block" : "none";
  emailInput.style.display = toLogin ? "none" : "block";
  usernameInput.style.display = toLogin ? "none" : "block";

  submitBtn.textContent = toLogin ? "Login" : "Submit";
  toggleText.innerHTML = toLogin
    ? `Belum punya akun? <a href="#" onclick="toggleMode(false)">Register</a>`
    : ""; // Hilangkan teks saat register

  msg.textContent = "";
}

// Submit handler
function submit() {
  const email = emailInput.value.trim();
  const identity = loginIdentity.value.trim();
  const password = passwordInput.value.trim();
  const username = usernameInput.value.trim();
  msg.textContent = "";

  if (isLoginMode) {
    if (!identity || !password) {
      msg.style.color = "crimson";
      msg.textContent = "Mohon isi semua kolom.";
      return;
    }

    auth
      .signInWithEmailAndPassword(identity, password)
      .then(() => (location.href = "/spaceberry/index.html"))
      .catch((err) => {
        msg.style.color = "crimson";
        msg.textContent = err.message;
      });
  } else {
    if (!email || !username || !password) {
      msg.style.color = "crimson";
      msg.textContent = "Mohon isi semua kolom.";
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({ displayName: username });
      })
      .then(() => {
        const user = auth.currentUser;

        // TAMBAHAN: Simpan data lengkap + statistik awal
        return db.collection("users").doc(user.uid).set({
          username: user.displayName,
          email: user.email,
          lessons: 0,
          terms: 0,
        });
      })
      .then(() => {
        msg.style.color = "green";
        msg.textContent = "Registrasi berhasil. Silakan login.";
        auth.signOut();
        toggleMode(true); // kembali ke login
      })
      .catch((err) => {
        msg.style.color = "crimson";
        msg.textContent = err.message;
      });
  }
}

// Auto redirect jika sudah login
auth.onAuthStateChanged((user) => {
  if (user && isLoginMode) {
    location.href = "/spaceberry/index.html";
  }
});
