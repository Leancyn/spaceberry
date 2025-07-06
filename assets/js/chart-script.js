(function () {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0–11
  const currentYear = now.getFullYear();
  const monthKey = `${currentYear}-${currentMonth + 1}`; // ex: "2025-7"
  const storageKey = "spaceberry-visits";

  // Ambil data kunjungan dari localStorage
  const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");

  // Cek apakah kunjungan hari ini sudah tercatat
  const lastVisitDate = localStorage.getItem("last-visit-date");
  const today = now.toISOString().split("T")[0]; // "2025-07-06"

  if (lastVisitDate !== today) {
    stored[monthKey] = (stored[monthKey] || 0) + 1;
    localStorage.setItem("last-visit-date", today);
    localStorage.setItem(storageKey, JSON.stringify(stored));
  }

  // Siapkan data 12 bulan
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthlyData = Array(12).fill(0);

  for (let i = 0; i < 12; i++) {
    const key = `${currentYear}-${i + 1}`;
    monthlyData[i] = stored[key] || 0;
  }

  // Buat chart
  const options = {
    chart: {
      type: "line",
      height: 250,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    series: [
      {
        name: "Your Visits",
        data: monthlyData,
      },
    ],
    xaxis: {
      categories: months,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " visit(s)";
        },
      },
    },
    colors: ["#7F00FF"],
  };

  const chart = new ApexCharts(document.querySelector("#realtimeChart"), options);
  chart.render();
})();
