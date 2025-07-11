
document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }

  // Chart rendering
  const chartCanvas = document.getElementById('priceChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
        datasets: [{
          label: 'Price',
          data: [1.1, 1.12, 1.11, 1.13, 1.15],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Signal output
  const signalOutput = document.getElementById('signalOutput');
  if (signalOutput) {
    signalOutput.innerHTML = 'Signal: Buy';
  }
});
