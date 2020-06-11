// Rank 1 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart1 = Highcharts.chart('areachart_1', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Bryn Kenney',
            data: [17620, 1409237, 4971310, 4971310, 9138905, 9225448, 9259438, 29822762, 29822762, 29822762, 29822762, 30321414]
        }]
    });
});

// Rank 2 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart2 = Highcharts.chart('areachart_2', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Justin Bonomo',
            data: [533370, 533370, 577620, 1163734, 1268255, 1359229, 1551616, 5045689, 5045689, 5045689, 5555689, 5665016]
        }]
    });
});

// Rank 3 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart3 = Highcharts.chart('areachart_3', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Daniel Negreanu',
            data: [0, 0, 0, 0, 52099, 288704, 2027189, 2027189, 2027189, 2192518, 2193892, 2223112]
        }]
    });
});

// Rank 4 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart4 = Highcharts.chart('areachart_4', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Erik Seidel',
            data: [135800, 181100, 181100, 259409, 760757, 1057108, 1057108, 1125650, 1125650, 1125650, 2480650, 2480650]
        }]
    });
});

// Rank 5 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart5 = Highcharts.chart('areachart_5', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Daniel Smith',
            data: [0, 0, 1732572, 1732572, 1732572, 1782291, 1949690, 10770468, 10770468, 10770468, 10770468, 10770468]
        }]
    });
});

// Rank 6 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart6 = Highcharts.chart('areachart_6', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Fedor Holz',
            data: [1084322, 1790272, 2918957, 2918957, 2918957, 4630974, 4954574, 11508522, 11929297, 11929297, 12235279, 13146265]
        }]
    });
});

// Rank 7 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart7 = Highcharts.chart('areachart_7', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'David Peters',
            data: [439540, 2024340, 3145109, 3145109, 3500643, 3500643, 3580147, 3597980, 3839294, 3839294, 3912794, 4152794]
        }]
    });
});

// Rank 8 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart8 = Highcharts.chart('areachart_8', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Fedor Holz',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
    });
});

// Rank 9 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart9 = Highcharts.chart('areachart_9', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Jason Koon',
            data: [90040, 90040, 4642644, 4642644, 5611874, 5622866, 5646181, 7075049, 7075049, 7075049, 7832549, 7832549]
        }]
    });
});

// Rank 10 Area Chart
document.addEventListener('DOMContentLoaded', function () {
    var areachart10 = Highcharts.chart('areachart_10', {
        chart: {
            type: 'area',
            size: 80,
            marginBottom: 50,
            marginTop: 60,
            marginLeft: 80
        },
        accessibility: {
            description: ''
        },
        title: {
            text: "Wins in Each Month of 2019"
        },
        subtitle: {
            text: 'Sources: pokerdb.thehendonmob.com',
            style: {
                paddingBottom: '20px'
              },
            y: 35
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text: 'Months',
                align: 'high', 
                x: 0,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: 'Wins($)'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: "Steve O'Dwyer",
            data: [109840, 109840, 191689, 191689, 785405, 785405, 785405, 1321341, 1540752, 1540752, 2517913, 3259242]
        }]
    });
});