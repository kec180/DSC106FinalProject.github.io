// Rank 1 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart1 = Highcharts.chart('piechart_1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 53.4
            }, {
                name: 'TMC',
                y: 36.4
            }, {
                name: 'TSHR Korea',
                y: 5.4
            }, {
                name: 'TMME',
                y: 4.8
            }]
        }]
    });
});

// Rank 2 Pie chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart2 = Highcharts.chart('piechart_2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 59.6,
            }, {
                name: 'ODWSOP',
                y: 20.4
            }, {
                name: 'SHRB',
                y: 10.2
            }, {
                name: 'SHRB China',
                y: 9.8
            }]
        }]
    });
});

// Rank 3 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart3 = Highcharts.chart('piechart_3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 69,
            }, {
                name: 'ODWSOP',
                y: 19.7
            }, {
                name: 'SHRB',
                y: 7.1
            }, {
                name: 'FDWPC',
                y: 4.2
            }]
        }]
    });
});

// Rank 4 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart4 = Highcharts.chart('piechart_4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 79.6,
            }, {
                name: 'AMPC',
                y: 7.1
            }, {
                name: 'SHRB',
                y: 6.9
            }, {
                name: 'EPT',
                y: 6.4
            }]
        }]
    });
});

// Rank 5 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart5 = Highcharts.chart('piechart_5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 56.8,
            }, {
                name: 'TMC',
                y: 23.9
            }, {
                name: 'ODWSOP',
                y: 10.9
            }, {
                name: 'HROD',
                y: 8.4
            }]
        }]
    });
});

// Rank 6 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart6 = Highcharts.chart('piechart_6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 75.3,
            }, {
                name: 'TMC',
                y: 15.6
            }, {
                name: 'PLOHR',
                y: 4.7
            }, {
                name: 'NLH',
                y: 4.4
            }]
        }]
    });
});

// Rank 7 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart7 = Highcharts.chart('piechart_7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 82,
            }, {
                name: 'WPTN',
                y: 8
            }, {
                name: 'WSOPE',
                y: 5.5
            }, {
                name: 'SHRB',
                y: 4.5
            }]
        }]
    });
});

// Rank 8 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart8 = Highcharts.chart('piechart_8', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 55.5,
            }, {
                name: 'WPTN',
                y: 18.4
            }, {
                name: 'WSOPE',
                y: 15.3
            }, {
                name: 'SHRB',
                y: 10.8
            }]
        }]
    });
});

// Rank 9 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart9 = Highcharts.chart('piechart_9', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 72.7,
            }, {
                name: 'SDA 1M',
                y: 11.5
            }, {
                name: 'SDA',
                y: 9.1
            }, {
                name: 'SHRB',
                y: 6.7
            }]
        }]
    });
});

// Rank 10 Pie Chart
document.addEventListener('DOMContentLoaded', function () {
    var piechart10 = Highcharts.chart('piechart_10', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            size: 100,
            marginBottom: 50,
            marginTop:35,
            marginLeft: 10
        },
        title: {
            text: 'Proportion of 3 biggest wins to total wins',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            width: 500,
            floating: true,
            align: 'center',
            x: 70, // = marginLeft - default spacingLeft
            itemWidth: 100,
        },
        series: [{


            name: 'Wins',
            colorByPoint: true,
            data: [{
                name: 'Other',
                y: 82.7,
            }, {
                name: 'SHR8H',
                y: 6.1
            }, {
                name: 'SHR',
                y: 5.9
            }, {
                name: 'NHME',
                y: 5.3
            }]
        }]
    });
});