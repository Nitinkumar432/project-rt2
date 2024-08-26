document.addEventListener("DOMContentLoaded", function() {
    const ctxStatus = document.getElementById('statusChart').getContext('2d');
    const ctxJobStats = document.getElementById('jobStatsChart').getContext('2d');

    // Example data for live status
    const liveStatusData = {
        labels: ['Active Jobs', 'Total Applicants'],
        datasets: [{
            label: 'Job Statistics',
            // data: [<%= company.activeJobs %>, <%= company.totalApplicants %>],
            data:[12,4000],
            backgroundColor: ['#007bff', '#28a745'],
            borderColor: ['#0056b3', '#218838'],
            borderWidth: 2,
            borderRadius: 5,
            barThickness: 50
        }]
    };

    const statusChart = new Chart(ctxStatus, {
        type: 'bar',
        data: liveStatusData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Live Status',
                    font: {
                        size: 20,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // Example data for job statistics
    const jobStatsData = {
        labels: ['Job 1', 'Job 2', 'Job 3', 'Job 4'],
        datasets: [{
            label: 'Applicants',
            data: [12, 19, 3, 5], // Replace with actual data
            backgroundColor: '#ffc107',
            borderColor: '#e0a800',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8
        }]
    };

    const jobStatsChart = new Chart(ctxJobStats, {
        type: 'line',
        data: jobStatsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Job Statistics',
                    font: {
                        size: 20,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
});