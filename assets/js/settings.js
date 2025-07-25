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

const avatarOptions = document.querySelectorAll(".avatar-option");
const avatarUpload = document.getElementById("avatarUpload");
const preview = document.getElementById("headerAvatar"); // atau #dropdownPhoto

// Klik galeri
document.addEventListener("DOMContentLoaded", () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      console.warn("User belum login.");
      return;
    }

    const avatarOptions = document.querySelectorAll(".avatar-option");

    avatarOptions.forEach((img) => {
      img.addEventListener("click", async () => {
        const src = img.getAttribute("src");
        try {
          await firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .set({ photo: src }, { merge: true });

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
        alert("Gagal menyimpan avatar. Coba lagi nanti.");
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
