var options = {
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
      name: "Points",
      data: [3.1, 2.8, 3.5, 4.0, 3.9, 4.2, 4.8, 4.5, 4.1, 3.9, 3.7, 4.0],
    },
  ],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " Points";
      },
    },
  },
  colors: ["#7F00FF"], // gradasi ungu-biru bisa ditambahkan via gradient
};

var chart = new ApexCharts(document.querySelector("#realtimeChart"), options);
chart.render();
