'use strict';

var goatCruisin = `goatImagesExample/cruisin-goat.jpg`;
var goatFloat = `goatImagesExample/float-your-goat.jpg`;
var goatAway = `goatImagesExample/goat-away.jpg`;
var goatHand = `goatImagesExample/goat-out-of-hand.jpg`;
var goatKiss = `goatImagesExample/kissing-goat.jpg`;
var goatSassy = `goatImagesExample/sassy-goat.jpg`;
var goatSmile = `goatImagesExample/smiling-goat.jpg`;
var goatSweater = `goatImagesExample/sweater-goat.jpg`; 



/* <img src="" alt=""> */

var imgArr = [goatCruisin, goatFloat, goatAway, goatHand, goatKiss, goatSassy, goatSmile, goatSweater];


var getFirstImg = document.getElementById('firstPic');
getFirstImg.src = imgArr[7];


var ctx = document.getElementById("myCanvas").getContext("2d");
console.log(ctx);

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
