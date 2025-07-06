(function () {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthKey = `${currentYear}-${currentMonth + 1}`;
  const storageKey = "spaceberry-visits";

  const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
  const lastVisitDate = localStorage.getItem("last-visit-date");
  const today = now.toISOString().split("T")[0];

  if (lastVisitDate !== today) {
    stored[monthKey] = (stored[monthKey] || 0) + 1;
    localStorage.setItem("last-visit-date", today);
    localStorage.setItem(storageKey, JSON.stringify(stored));
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthlyData = Array(12).fill(0);

  for (let i = 0; i < 12; i++) {
    const key = `${currentYear}-${i + 1}`;
    monthlyData[i] = stored[key] || 0;
  }

  const options = {
    chart: {
      type: "line",
      height: 420,
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
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          xaxis: {
            labels: {
              rotate: -45,
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
    ],
  };

  const chart = new ApexCharts(document.querySelector("#realtimeChart"), options);
  chart.render();
})();
