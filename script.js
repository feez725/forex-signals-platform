document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('navMenu').classList.toggle('show');
});

const ctx = document.getElementById('priceChart').getContext('2d');
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

document.getElementById('signalOutput').innerHTML = 'Signal: <strong>Buy</strong>';
