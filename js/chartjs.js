$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    let dates = [];
    let store1Sales = [];
    let store2Sales = [];
    let store3Sales = [];
    let store4Sales = [];

    // Loop through each data item and add to arrays
    data.forEach(function (item) {
      dates.push(item.date);
      store1Sales.push(item.Shopee);
      store2Sales.push(item.Lazada);
      store3Sales.push(item.Website);
      store4Sales.push(item.All);
    });

    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Shopee",
            data: store1Sales,
            backgroundColor: "rgba(254, 100, 50, 0.8)",
            borderColor: "rgba(251, 80, 28, 1)",
            borderWidth: 1,
          },
          {
            label: "Lazada",
            data: store2Sales,
            backgroundColor: "rgba(0, 137, 248, 0.5)",
            borderColor: "rgba(0, 137, 248, 0.9)",
            borderWidth: 1,
          },
          {
            label: "Website",
            data: store3Sales,
            backgroundColor: "rgba(127, 212, 30, 0.5)",
            borderColor: "rgba(127, 212, 30, 0.8)",
            borderWidth: 1,
          },
          {
            label: "All",
            data: store4Sales,
            backgroundColor: "#f44336",
            borderColor: "#f44336",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        width: 300, // đặt chiều rộng là 500px
        height: 300, // đặt chiều cao là 300px
        interaction: {
          mode: "index",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    // Instantly assign Chart.js version
    const chartVersion = document.getElementById("chartVersion");
    chartVersion.innerText = Chart.version;
  });
});

$(document).ready(function () {
  const data = {
    labels: ["OPERA", "SAFARI", "MICROSOFT", "CỐC CỐC", "FIREFOX", "CHROME"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [10, 10, 10, 10, 10, 50],
        backgroundColor: [
          "#a17b62",
          "#4baf4d",
          "#00bdcf",
          "#4d4dea",
          "#e2425d",
          "#fec308",
        ],
        borderColor: [
          "#a17b62",
          "#4baf4d",
          "#00bdcf",
          "#4d4dea",
          "#e2425d",
          "#fec308",
        ],
        borderWidth: 1,
        cutout: "80%",
      },
    ],
  };

  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      if (chart._active.length > 0) {
        const textLabel = chart.config.data.labels[chart._active[0].index];
        const numberLabel =
          chart.config.data.datasets[chart._active[0].datasetIndex].data[
            chart._active[0].index
          ];
        const color =
          chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[
            chart._active[0].index
          ];

        ctx.font = "bolder 18px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(
          `${textLabel.toUpperCase()}: ${numberLabel} %`,
          width / 2,
          height / 2 + top
        );
      }
      ctx.restore();
    },
  };
  // config
  const config = {
    type: "doughnut",
    data,
    options: {
      plugins: {
        legend: {
          display: false,
          // labels: {
          //   usePointStyle: true,
          // },
        },
        tooltip: {
          enabled: false
        }
      },
    },
    plugins: [hoverLabel],
  };

  // render init block
  const trafficChart = new Chart(
    document.getElementById("trafficChart"),
    config
  );
  function generateLegend() {
    const trafficChartBox = document.querySelector(".trafficChartBox");
    const div = document.createElement("DIV");
    div.setAttribute("id", "customLegend");

    const ul = document.createElement("UL");

    trafficChart.legend.legendItems.forEach((dataset, index) => {
      const text = dataset.text;
      const datasetIndex = dataset.datasetIndex;
      const bgColor = dataset.fillStyle;
      const bColor = dataset.strokeStyle;
      const fontColor = dataset.fontColor;

      const li = document.createElement("LI");
      const spanBox = document.createElement("SPAN");
      spanBox.style.borderColor = bgColor;
      spanBox.style.backgroundColor = bColor;

      const p = document.createElement("P");
      const textNode = document.createTextNode(text);

      ul.appendChild(li);
      li.appendChild(spanBox);
      li.appendChild(p);
      p.appendChild(textNode);
    });

    trafficChartBox.appendChild(div);
    div.appendChild(ul);
  }
  generateLegend();

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById("chartVersion");
  chartVersion.innerText = Chart.version;
});
$(document).ready(function () {
  const data = {
    labels: ["MÁY TÍNH", "MÁY TÍNH BẢNG", "ĐIỆN THOẠI"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [80, 10, 10],
        backgroundColor: [
          "#a17b62",
          "#4baf4d",
          "#00bdcf",
          "#4d4dea",
          "#e2425d",
          "#fec308",
        ],
        borderColor: [
          "#a17b62",
          "#4baf4d",
          "#00bdcf",
          "#4d4dea",
          "#e2425d",
          "#fec308",
        ],
        borderWidth: 1,
        cutout: "80%",
      },
    ],
  };

  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      if (chart._active.length > 0) {
        const textLabel = chart.config.data.labels[chart._active[0].index];
        const numberLabel =
          chart.config.data.datasets[chart._active[0].datasetIndex].data[
            chart._active[0].index
          ];
        const color =
          chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[
            chart._active[0].index
          ];

        ctx.font = "bolder 18px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(
          `${textLabel.toUpperCase()}: ${numberLabel} %`,
          width / 2,
          height / 2 + top
        );
      }
      ctx.restore();
    },
  };
  // config
  const config = {
    type: "doughnut",
    data,
    options: {
      plugins: {
        legend: {
          display: false,
          // labels: {
          //   usePointStyle: true,
          // },
        },
        tooltip: {
          enabled: false
        }
      },
    },
    plugins: [hoverLabel],
  };

  // render init block
  const mobileChart = new Chart(
    document.getElementById("mobileChart"),
    config
  );
 
  const chartVersion = document.getElementById("chartVersion");
  chartVersion.innerText = Chart.version;
});

