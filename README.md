# 🚀 Spaceberry – English Learning Dashboard

**Spaceberry** is a modern and interactive web-based platform for learning English, designed with a clean dashboard interface. It provides learners with tools such as vocabulary practice, grammar quizzes, writing exercises, daily quotes, and customizable schedules — all in one place.

![Spaceberry Screenshot](assets/img/homepage.png)

---

## ✨ Fitur Utama

- 🔐 **Login & Register Firebase Auth**
- 📚 **Books & Library**: Akses modul pembelajaran
- 🧠 **Interactive Exercises**: Kuis & latihan cepat
- 💬 **Dictionary & Translation**: Kamus + penerjemah
- ⏰ **World Clock & Quote of The Day**
- 📈 **Statistik Penggunaan** (Chart kunjungan)
- 💻 **UI Responsif** (desktop & mobile)

---

## 📁 Struktur Proyek

spaceberry/
├── index.html # Dashboard utama
├── README.md
├── assets/
│ ├── css/ # style.css, settings.css, login.css, dictionary.css, dll.
│ ├── js/ # script.js, chart-script.js, login.js, settings.js, dll.
│ ├── img/ # Logo, avatar, icon modul
│ ├── font/ # Font custom seperti ComicRelief.ttf
│ ├── data/ # Word list, JSON statis (jika ada)
│ └── page/ # Halaman internal
│ ├── login.html
│ ├── dictionary.html
│ ├── schedule.html
│ ├── settings.html
│ ├── booksAndLibrary/
│ │ └── main.html, modulX.html
│ └── quickCards/
│ ├── exam.html
│ ├── grammar.html
│ └── writing.html

---

## 🛠️ Tech Stack

- **HTML5, CSS3, JavaScript**
- **LocalStorage** – store quiz results & writing progress
- **Fetch API** – dynamic content from JSON / online API
- **ApexCharts** – for interactive data visualization
- **Feather Icons** – lightweight icons

---

## 🔧 Cara Menjalankan

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Leancyn/spaceberry.git
   cd spaceberry
   ```
2. Jalankan secara lokal dengan Live Server (VSCode)
3. Atau kunjungi versi live:
👉 https://leancyn.github.io/spaceberry/