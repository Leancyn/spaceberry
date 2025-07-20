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
    if (languageSelect) languageSelect.value = localStorage.getItem("language") || "en";
    if (notifToggle) notifToggle.checked = localStorage.getItem("notifications") === "true";

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
      alert("Language preference saved. (Fitur terjemahan masih dalam pengembangan)");
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

const avatarOptions = document.querySelectorAll('.avatar-option');
const avatarUpload = document.getElementById('avatarUpload');
const preview = document.getElementById('headerAvatar'); // atau #dropdownPhoto

// Klik galeri
avatarOptions.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    localStorage.setItem('customAvatar', src);
    preview.src = src;
  });
});

// Upload custom
avatarUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(evt) {
    const imgData = evt.target.result;
    localStorage.setItem('customAvatar', imgData);
    preview.src = imgData;
  };
  if (file) reader.readAsDataURL(file);
});

// Load dari localStorage saat masuk
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('customAvatar');
  if (saved) preview.src = saved;
});
