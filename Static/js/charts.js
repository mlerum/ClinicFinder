
new Chart(document.querySelector('#abortion-chart'), {
        type: 'bar',
        data: {
            labels: ['Alabama', 'Arizona', 'Arkansas', 'Georgia', 'Idaho', 'Kentucky', 'Louisiana', 'Mississippi', 'Missouri', 'Oklahoma', 'South Dakota', 'Tennessee', 'Texas', 'West Virginia', 'Wisconsin'],
            datasets: [
                {
                    label: 'Pre-Roe Overturn',
                    data: [5, 8, 2, 14, 3, 2, 3, 1, 1, 4, 1, 7, 23, 1, 4]
                },
                {
                    label: 'Post-Roe Overturn',
                    data: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    minBarLength: [-1]
                },
            ],
            borderWidth: 2,
        },
    },
);

new Chart(document.querySelector('#abortion-stage'), {
    type: 'pie',
    data: {
        labels: ['<=8 weeks', '9-10 weeks', '11-12 weeks', '13-15 weeks', '16-20 weeks', '>=21 weeks'],
        datasets: [
            {
                data: [65.4, 14.7, 8.2, 6.3, 4.1, 1.3]
            }
        ]
    }
})
