const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: "blue",
        fill: true,
      },{
        label: 'Expenses',
        data: [6, 8, 13, 15, 12, 13],
        borderWidth: 1,
        borderColor: "red",
    },{
      label: 'Expenses',
      data: [2, 7, 3, 5, 2, 1],
      borderWidth: 1,
      borderColor: "green",
  }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });