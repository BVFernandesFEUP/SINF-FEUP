// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example

var ctx = document.getElementById("myPieChart");

var divValues =  document.getElementById("dataValues");
var dataValues = divValues.textContent;

var divLabels =  document.getElementById("dataLabels");
var dataLabels = divLabels.textContent;

var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: JSON.parse(dataLabels),
    datasets: [{
      data: JSON.parse(dataValues),
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#e74a3b', '#f6c23e', '#858796', '#1273da', '#fe53d1', '#aa71d1'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
