//Chart 1
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['iPhone 14', 'iPhone 14 plus', 'Dormeo', 'Siena', 'Rovus', 'Heater'],
        datasets: [{
            label: '# of Votes',
            data: [19, 40, 50, 2, 81, 851],
            borderWidth: 1
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
//Chart 1 end

//Chart 2
const chart2 = document.getElementById('chart2');

new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['Lacalut', 'Nevraxyl', 'DM', 'Strepsils', 'Kinder delice'],
        datasets: [{
            label: 'Rayting',
            data: [1, 20, 13, 12, 8],
            borderWidth: 3,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(201, 203, 207)'
            ],
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
//Chart 2 end

//Chart 3
const chart3 = document.getElementById('chart3');

new Chart(chart3, {
    type: 'polarArea',
    data: {
        labels: ['World of health', 'Searching', 'Before lunch'],
        datasets: [{
            label: 'Viewers',
            data: [27, 35, 4],
            borderWidth: 5,
            backgroundColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(255, 99, 132)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
            ],
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
//Chart 3 end