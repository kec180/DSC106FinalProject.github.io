document.addEventListener('DOMContentLoaded', function () {
 
    var barchart = Highcharts.chart('chart-container',{

        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total wins of Top 10 Poker Players'
        },
        subtitle: {
            text: 'Source: <a href="https://www.thehendonmob.com/">thehendonmob.com</a>'
        },
        xAxis: {
            categories: ['Bryn Kenney', 'Justin Bonomo', 'Daniel Negreanu', 'Erik Seidel', 'Daniel Smith', 'Stephen Chidwick', 'David Peters', 'Fedor Holz', "Jason Koon", "Steve O'Dwyer"], 
            title: {
                text: 'Names',
                align: 'high',
                x: 0,
                y: 20
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total wins(million$)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' million'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 400,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total Wins(million$)',
            data: [56.403502, 49.128105, 42.053305, 37.748126, 36.742719, 34.387646, 33.737539, 32.556377, 31.101728, 30.471478]
        }]
    });
});
