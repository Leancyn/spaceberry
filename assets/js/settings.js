// settings.js
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const html = document.documentElement;

  // Load preferences
  const fontSize = localStorage.getItem("fontSize") || "16px";
  html.style.fontSize = fontSize;

  const darkMode = localStorage.getItem("darkMode") === "true";
  if (darkMode) body.classList.add("dark-mode");

  const theme = localStorage.getItem("theme") || "purple";
  body.setAttribute("data-theme", theme);

  // Settings page only
  if (document.querySelector(".settings-section")) {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const themeColorSelect = document.getElementById("themeColorSelect");
    const languageSelect = document.getElementById("languageSelect");
    const notifToggle = document.getElementById("notifToggle");
    const bgSoundToggle = document.getElementById("bgSoundToggle");
    const volumeControl = document.getElementById("volumeControl");
    const bgSound = document.getElementById("bgSound");

    // Initialize
    if (darkModeToggle) darkModeToggle.checked = darkMode;
    if (fontSizeSelect) fontSizeSelect.value = fontSize.replace("px", "");
    if (themeColorSelect) themeColorSelect.value = theme;
    if (languageSelect)
      languageSelect.value = localStorage.getItem("language") || "en";
    if (notifToggle)
      notifToggle.checked = localStorage.getItem("notifications") === "true";

    if (bgSound && bgSoundToggle) {
      const soundOn = localStorage.getItem("bgSound") === "true";
      bgSoundToggle.checked = soundOn;
      if (soundOn) bgSound.play();
    }
    if (volumeControl && bgSound) {
      const volume = parseFloat(localStorage.getItem("volume") || "0.5");
      volumeControl.value = volume;
      bgSound.volume = volume;
    }

    // Events
    darkModeToggle?.addEventListener("change", () => {
      body.classList.toggle("dark-mode", darkModeToggle.checked);
      localStorage.setItem("darkMode", darkModeToggle.checked);
    });

    fontSizeSelect?.addEventListener("change", () => {
      html.style.fontSize = fontSizeSelect.value + "px";
      localStorage.setItem("fontSize", fontSizeSelect.value + "px");
    });

    themeColorSelect?.addEventListener("change", () => {
      body.setAttribute("data-theme", themeColorSelect.value);
      localStorage.setItem("theme", themeColorSelect.value);
    });

    languageSelect?.addEventListener("change", () => {
      localStorage.setItem("language", languageSelect.value);
      alert(
        "Language preference saved. (Fitur terjemahan masih dalam pengembangan)"
      );
    });

    window.resetProgress = function () {
      if (confirm("Are you sure you want to reset all your progress?")) {
        localStorage.clear();
        alert("Progress reset!");
        location.reload();
      }
    };
  }
  // Aktifkan dark mode jika tersimpan sebelumnya
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Toggle dark mode saat diaktifkan
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.checked = document.body.classList.contains("dark-mode");
    darkModeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode", darkModeToggle.checked);
      localStorage.setItem("darkMode", darkModeToggle.checked);
    });
  }
});

// Pastikan Firebase sudah dimuat di HTML (via <script> tag)

const firebaseConfig = {
  apiKey: "AIzaSyBDIYWlSgxpjdpHAs6xKFJGaTvM86EKe-4",
  authDomain: "spaceberry-bf68b.firebaseapp.com",
  projectId: "spaceberry-bf68b",
  storageBucket: "spaceberry-bf68b.firebasestorage.app",
  messagingSenderId: "185481236967",
  appId: "1:185481236967:web:222422307c4218517fed42",
  measurementId: "G-2E7GZY8NNE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;

// Ambil user saat sudah login
auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    console.log("User login:", user.email);
  }
});

const avatarOptions = document.querySelectorAll(".avatar-option");
const avatarUpload = document.getElementById("avatarUpload");
const preview = document.getElementById("headerAvatar"); // atau #dropdownPhoto

// Klik galeri
avatarOptions.forEach((img) => {
  img.addEventListener("click", async () => {
    const src = img.getAttribute("src");

    const user = firebase.auth().currentUser;
    if (!user) return;

    try {
      // Simpan avatar yang dipilih ke Firestore
      await db
        .collection("users")
        .doc(user.uid)
        .set({ photo: src }, { merge: true });

      // Update UI langsung
      const avatarEls = [
        document.getElementById("headerAvatar"),
        document.getElementById("dropdownPhoto"),
      ];
      avatarEls.forEach((el) => {
        if (el) el.src = src;
      });

      alert("Avatar berhasil diubah!");
    } catch (err) {
      console.error("Gagal menyimpan avatar:", err);
      alert("Gagal menyimpan avatar. Coba lagi nanti.");
    }
  });
});

// Load dari localStorage saat masuk
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("customAvatar");
  const avatarUpload = document.getElementById("avatarUpload");
  const previewDesktop = document.getElementById("headerAvatar");
  const previewMobile = document.getElementById("dropdownPhoto");
});

const avatarInput = document.getElementById("avatarUpload");

if (avatarInput) {
  avatarInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result;

      const user = firebase.auth().currentUser;
      if (!user) {
        alert("Kamu belum login.");
        return;
      }

      try {
        await firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({ photo: base64String }, { merge: true });

        alert("Avatar berhasil diunggah!");

        // Update UI jika elemen ditemukan
        const headerAvatar = document.getElementById("headerAvatar");
        const dropdownPhoto = document.getElementById("dropdownPhoto");

        if (headerAvatar) headerAvatar.src = base64String;
        if (dropdownPhoto) dropdownPhoto.src = base64String;
      } catch (err) {
        console.error("Gagal menyimpan avatar:", err);
        alert("Gagal mengunggah avatar.");
      }
    };

    reader.readAsDataURL(file);
  });
}
