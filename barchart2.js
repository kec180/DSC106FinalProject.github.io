document.addEventListener('DOMContentLoaded', function () {
    var dataPrev = {
        2020: [
            ['Australia', 2],
            ['United States', 52],
            ['Canada', 8],
            ['Germany', 3],
            ['China', 0],
            ['United Kingdom', 4],
            ['Sweden', 1]
        ],
        2019: [
            ['Australia', 1],
            ['United States', 55],
            ['Canada', 8],
            ['Germany', 4],
            ['China', 0],
            ['United Kingdom', 3],
            ['Sweden', 0]
        ],
        2018: [
            ['Australia', 4],
            ['United States', 43],
            ['Canada', 6],
            ['Germany', 10],
            ['China', 0],
            ['United Kingdom', 4],
            ['Sweden', 0]
        ],
        2017: [
            ['Australia', 0],
            ['United States', 57],
            ['Canada', 4],
            ['Germany', 7],
            ['China', 0],
            ['United Kingdom', 8],
            ['Sweden', 2]
        ],
        2016: [
            ['Australia', 1],
            ['United States', 61],
            ['Canada', 5],
            ['Germany', 6],
            ['China', 0],
            ['United Kingdom', 5],
            ['Sweden', 0]
        ]
    }

    var data = {
        2020: [
            ['Australia', 9],
            ['United States', 42],
            ['Canada', 6],
            ['Germany', 4],
            ['China', 3],
            ['United Kingdom', 4],
            ['Sweden', 3]
        ],
        2019: [
            ['Australia', 2],
            ['United States', 52],
            ['Canada', 8],
            ['Germany', 3],
            ['China', 0],
            ['United Kingdom', 4],
            ['Sweden', 1]
        ],
        2018: [
            ['Australia', 1],
            ['United States', 55],
            ['Canada', 8],
            ['Germany', 4],
            ['China', 0],
            ['United Kingdom', 3],
            ['Sweden', 0]
        ],
        2017: [
            ['Australia', 4],
            ['United States', 43],
            ['Canada', 6],
            ['Germany', 10],
            ['China', 0],
            ['United Kingdom', 4],
            ['Sweden', 0]
        ],
        2016: [
            ['Australia', 0],
            ['United States', 57],
            ['Canada', 4],
            ['Germany', 7],
            ['China', 0],
            ['United Kingdom', 8],
            ['Sweden', 2]
        ]
    };

    var countries = [{
        name: 'Australia',
        flag: 197507,
        color: 'rgb(102, 51, 0)'
    }, {
        name: 'United States',
        flag: 197484,
        color: 'rgb(215, 0, 38)'
    }, {
        name: 'Canada',
        flag: 197430,
        color: 'rgb(240, 240, 240)'
    }, {
        name: 'Germany',
        flag: 197571,
        color: 'rgb(255, 217, 68)'
    }, {
        name: 'China',
        flag: 197375,
        color: 'rgb(255, 217, 68)'
    }, {
        name: 'United Kingdom',
        flag: 197374,
        color: 'rgb(0, 82, 180)'
    }, {
        name: 'Sweden',
        flag: 197564,
        color: 'rgb(201, 36, 39)'
    }];


    function getData(data) {
        return data.map(function (country, i) {
            return {
                name: country[0],
                y: country[1],
                color: countries[i].color
            };
        });
    }



    var chart = Highcharts.chart('country', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 5 Countries with the Most Counts of Top100 Poker Players in 2020'
        },
        subtitle: {
            text: 'Comparing to results from 2019 - Source: pokerdb.thehendonmob.com'
        },
        plotOptions: {
            series: {
                grouping: false,
                borderWidth: 0
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} Top100 Players</b><br/>'
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 10
        },
        xAxis: {
            type: 'category',
            title: {
                text: 'Country'
            },
            max: 4,
            labels: {
                useHTML: true,
                animate: true,
                formatter: function () {
                    var value = this.value,
                        output;

                    countries.forEach(function (country) {
                        if (country.name === value) {
                            output = country.flag;
                        }
                    });

                    return '<span><img src="https://image.flaticon.com/icons/svg/197/' + output + '.svg" style="width: 40px; height: 40px;"/><br></span>';
                }
            }
        },
        yAxis: [{
            title: {
                text: 'Counts of Top100 Poker Players'
            },
            showFirstLabel: false
        }],
        series: [{
            color: 'rgb(158, 159, 163)',
            pointPlacement: -0.2,
            linkedTo: 'main',
            data: dataPrev[2016].slice(),
            name: '2019'
        }, {
            name: '2020',
            id: 'main',
            dataSorting: {
                enabled: true,
                matchByName: true
            },
            dataLabels: [{
                enabled: true,
                inside: true,
                style: {
                    fontSize: '16px'
                }
            }],
            data: getData(data[2016]).slice()
        }],
        exporting: {
            allowHTML: true
        }
    });


    var years = [2020, 2019, 2018, 2017, 2016];

    years.forEach(function (year) {
        var btn = document.getElementById(year);

        btn.addEventListener('click', function () {

            document.querySelectorAll('.buttons button.active').forEach(function (active) {
                active.className = '';
            });
            btn.className = 'active';

            chart.update({
                title: {
                    text: 'Top 5 Countries with the Most Counts of Top100 Poker Players in ' + year 
                },
                subtitle: {
                    text: 'Comparing to results from ' + (year - 1) 
                },
                series: [{
                    name: year - 1,
                    data: dataPrev[year].slice()
                }, {
                    name: year,
                    data: getData(data[year]).slice()
                }]
            }, true, false, {
                duration: 800
            });
        });
    });
});
