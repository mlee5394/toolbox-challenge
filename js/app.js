/**
 * Created by Michelle on 11/24/2015.
 */
$(function() {
    'use strict';

    var age;
    var janM = 0,
        febM = 0,
        marM = 0,
        aprM = 0,
        mayM = 0,
        junM = 0,
        julM = 0,
        augM = 0,
        sepM = 0,
        octM = 0,
        novM = 0;
    var janW = 0,
        febW = 0,
        marW = 0,
        aprW = 0,
        mayW = 0,
        junW = 0,
        julW = 0,
        augW = 0,
        sepW = 0,
        octW = 0,
        novW = 0;

    var illnessCount = 0,
        noIllnessCount = 0;

    // Reads through the JSON File
    // Had to convert original csv file
    // https://github.com/washingtonpost/data-police-shootings/blob/master/fatal-police-shootings-data.csv

    $.getJSON('data/shootings.JSON')
        .then(function(data) {
            // loops through data to obtain necessary data
            for (var i = 0; i < data.length; i++) {
                var currentData = data[i];

                // catches the month
                var date = currentData.date;
                date = date.substring(5, 7);

                var gender = currentData.gender;
                var illness = currentData.signs_of_mental_illness;
                if (illness == 'True') {
                   illnessCount++;
                } else {
                    noIllnessCount++;
                }

                // Counts by gender
                if (gender == 'M') {
                    if (date.toString() == '01') {
                        janM++;
                    } else if (date.toString() == '02') {
                        febM++;
                    } else if (date.toString() == '03') {
                        marM++;
                    } else if (date.toString() == '04') {
                        aprM++;
                    } else if (date.toString() == '05') {
                        mayM++;
                    } else if (date.toString() == '06') {
                        junM++;
                    } else if (date.toString() == '07') {
                        julM++;
                    } else if (date.toString() == '08') {
                        augM++;
                    } else if (date.toString() == '09') {
                        sepM++;
                    } else if (date.toString() == '10') {
                        octM++;
                    } else if (date.toString() == '11') {
                        novM++;
                    }
                } else {
                    if (date.toString() == '01') {
                        janW++;
                    } else if (date.toString() == '02') {
                        febW++;
                    } else if (date.toString() == '03') {
                        marW++;
                    } else if (date.toString() == '04') {
                        aprW++;
                    } else if (date.toString() == '05') {
                        mayW++;
                    } else if (date.toString() == '06') {
                        junW++;
                    } else if (date.toString() == '07') {
                        julW++;
                    } else if (date.toString() == '08') {
                        augW++;
                    } else if (date.toString() == '09') {
                        sepW++;
                    } else if (date.toString() == '10') {
                        octW++;
                    } else if (date.toString() == '11') {
                        novW++;
                    }
                }
            }
            populateGraph();
            populateChart();
        });



    // populates the graph
    function populateGraph() {
        // sets up the data to create the graph
        var data = {
            // this is the label for the x-axis
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"],
            // data of datasets should correspond to the month of the x-axis labels
            datasets: [
                {
                    label: "Men",
                    fillColor: "rgba(225, 0, 0, 0.25)",
                    strokeColor: "rgba(225,0,0,1)",
                    pointColor: "rgba(225,0,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [janM, febM, marM, aprM, mayM, junM, julM, augM, sepM, octM, novM]
                },
                {
                    label: "Women",
                    fillColor: "rgba(151,187,205,1)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [janW, febW, marW, aprW, mayW, junW, julW, augW, sepW, octW, novW]
                }
            ]
        };

        // catches the canvas with the id gender
        var ctx = document.getElementById("gender").getContext("2d");
        // creates a chart based on the data
        var newChart = new Chart(ctx).Line(data, {
            scaleFontColor: "#000",
            scaleLineColor: "#000",
            scaleFontStyle: "bold"
        });
        document.getElementById('legend').innerHTML = newChart.generateLegend();
    }

    function populateChart() {
        // data of the pie chart
        var data = [
            {
                value: illnessCount,
                color: '#F7464A',
                highlight: '#FF5A5E',
                label: 'Mentally Ill'
            },
            {
                value: noIllnessCount,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'Not Mentally Ill'
            }
        ]

        var ctx = document.getElementById("illness").getContext("2d");
        var pieChart = new Chart(ctx).Pie(data);
    }

});