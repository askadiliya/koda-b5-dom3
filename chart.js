const penjualanAvansa = [
  { year: 2019, count: 10 },
  { year: 2020, count: 20 },
  { year: 2021, count: 15 },
  { year: 2022, count: 25 },
  { year: 2023, count: 22 },
  { year: 2024, count: 30 },
  { year: 2025, count: 28 },
];
const penjualanXpander = [
  { year: 2019, count: 100 },
  { year: 2020, count: 200 },
  { year: 2021, count: 150 },
  { year: 2022, count: 250 },
  { year: 2023, count: 220 },
  { year: 2024, count: 300 },
  { year: 2025, count: 280 },
];
const penjualanHyunday = [
  { year: 2019, count: 101 },
  { year: 2020, count: 202 },
  { year: 2021, count: 153 },
  { year: 2022, count: 254 },
  { year: 2023, count: 225 },
  { year: 2024, count: 306 },
  { year: 2025, count: 287 },
];

(function (dataInput) {
  const canvas = document.querySelector("#grafik1");
  const labels = dataInput.map((datum) => datum.year);
  const data = dataInput.map((datum) => datum.count);
  new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Penjualan Avanza",
          data,
        },
      ],
    },
  });
})(penjualanAvansa);

(function (dataxpander) {
  const canvas = document.querySelector("#grafik2");
  const labels = dataxpander.map((datum) => datum.year);
  const data = dataxpander.map((datum) => datum.count);
  new Chart(canvas, {
    type: "polarArea",
    data: {
      labels,
      datasets: [
        {
          label: "Penjualan Xpander",
          data,
        },
      ],
    },
  });
})(penjualanXpander);

(function (dataHyundai) {
  const canvas = document.querySelector("#grafik3");
  const labels = dataHyundai.map((datum) => datum.year);
  const data = dataHyundai.map((datum) => datum.count);
  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Penjualan Hyundai",
          data,
        },
      ],
    },
  });
})(penjualanHyunday);

const selectCar = document.getElementById("cars");
const allGraphs = document.querySelectorAll("canvas");

const carMap = {
  avanza: "grafik1",
  xpander: "grafik2",
  hyundai: "grafik3",

  avanza: "grafik1",
  xpander: "grafik2",
  hyundai: "grafik3",
};

function updateGraphDisplay(selectedValue) {
  allGraphs.forEach((canvas) => {
    canvas.style.display = "none";
  });

  const graphIdToShow = carMap[selectedValue];

  if (graphIdToShow) {
    const graphToShow = document.getElementById(graphIdToShow);
    if (graphToShow) {
      graphToShow.style.display = "block";
    }
  }
}

selectCar.addEventListener("change", function () {
  const selectedValue = this.value;
  updateGraphDisplay(selectedValue);
});

updateGraphDisplay(selectCar.value);
