# 🚀 Spaceberry – English Learning Dashboard

**Spaceberry** is a modern and interactive web-based platform for learning English, designed with a clean dashboard interface. It provides learners with tools such as vocabulary practice, grammar quizzes, writing exercises, daily quotes, and customizable schedules — all in one place.

![Spaceberry Screenshot](assets/img/screenshot-preview.png)

---

## ✨ Features

- 📚 **Dictionary Page** – Lookup and manage vocabulary in English–Indonesian
- 📆 **Schedule Manager** – Plan study sessions by day and topic
- 🧠 **Quick Cards** – Practice through:
  - **Exam** (20 minutes)
  - **Writing** (15 minutes)
  - **Grammar** (17 minutes)
- 💬 **Quote of the Day** – Motivational quotes pulled from an API
- 📊 **Statistics Dashboard** – Visual representation of progress
- 🕒 **Digital Clock** – Real-time display on dashboard
- ⚙ **Settings Page** – Theme, mode, and learning preferences

---

## 📁 Project Structure

spaceberry/
├── index.html # Main dashboard
├── assets/
│ ├── css/
│ │ ├── style.css # Main stylesheet
│ │ └── settings.css # Settings & themes
│ ├── img/ # Icons, logos, backgrounds
│ ├── js/
│ │ ├── feather.min.js
│ │ ├── chart-script.js
│ │ ├── quickCards.js # Logic for Exam, Grammar, Writing
│ └── data/
│ ├── quiz-exam.json
│ ├── quiz-grammar.json
│ └── dictionary.json
├── assets/page/
│ ├── dictionary.html
│ ├── schedule.html
│ ├── settings.html
│ ├── exam.html
│ ├── writing.html
│ ├── grammar.html
│ └── quote.html

---

## 🛠️ Tech Stack

- **HTML5, CSS3, JavaScript**
- **LocalStorage** – store quiz results & writing progress
- **Fetch API** – dynamic content from JSON / online API
- **ApexCharts** – for interactive data visualization
- **Feather Icons** – lightweight icons

---

## 🔧 How to Use

1. Clone or download the repository:
   ```bash
   git clone https://github.com/yourusername/spaceberry.git
   cd spaceberry
   ```
