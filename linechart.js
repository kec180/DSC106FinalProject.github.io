document.addEventListener('DOMContentLoaded', function () {
        var linechart = Highcharts.chart('linechart', {

            title: {
                text: 'Changes in Rankings from 2019(Jan) to 2020(May)'
            },

            subtitle: {
                text: 'Sources: pokerdb.thehendonmob.com'
            },

            yAxis: {
                title: {
                    text: 'Rank'
                },
                reversed: true
            },

            xAxis: {
                categories: ['19 Jan', '19 Feb', '19 Mar', '19 Apr', '19 May', '19 Jun', '19 Jul', '19 Aug', '19 Sep', '19 Oct',
                            '19 Nov', '19 Dec', '20 Jan', '20 Feb', '20 Mar', '20 Apr', '20 May'],
                title: {
                    text: 'Months',
                    align: 'high',
                    x: 10,
                    y: 10
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: 'Bryn Kenney',
                data: [11, 8, 6, 6, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            }, {
                name: 'Justin Bonomo',
                data: [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            }, {
                name: 'Daniel Negreanu',
                data: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
            }, {
                name: 'Erik Seidel',
                data: [3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4]
            }, {
                name: 'Daniel Smith',
                data: [10, 11, 10, 10, 10, 9, 9, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5]
            }, {
                name: 'Stephen Chidwick',
                data: [19, 18, 17, 17, 18, 15, 16, 8, 8, 8, 8, 7, 6, 6, 6, 6, 6]
            }, {
                name: 'David Peters',
                data: [5, 5, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7]
            }, {
                name: 'Fedor Holz',
                data: [4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8]
            }, {
                name: 'Jason Koon',
                data: [16, 16, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
            }, {
                name: "Steve O'Dwyer",
                data: [8, 9, 11, 11, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

    });
});