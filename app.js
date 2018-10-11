'use strict';

var getImgDiv = document.getElementById('imgDiv');


// instead make this into a constructor that gets the name and src.
var goatCruisin = `goatImagesExample/cruisin-goat.jpg`;
var goatFloat = `goatImagesExample/float-your-goat.jpg`;
var goatAway = `goatImagesExample/goat-away.jpg`;
var goatHand = `goatImagesExample/goat-out-of-hand.jpg`;
var goatKiss = `goatImagesExample/kissing-goat.jpg`;
var goatSassy = `goatImagesExample/sassy-goat.jpg`;
var goatSmile = `goatImagesExample/smiling-goat.jpg`;
var goatSweater = `goatImagesExample/sweater-goat.jpg`; 




var imgArr = [goatCruisin, goatFloat, goatAway, goatHand, goatKiss, goatSassy, goatSmile, goatSweater];




var getFirstImg = document.getElementById('firstPic');
var getSecondImg = document.getElementById('secondPic');
var getThirdImg = document.getElementById('thirdPic');
var imgGetters = [getFirstImg,getSecondImg,getThirdImg];

// write a function that gets random index from imgArr;


// write a function that makes sure the same img isn't displayed at the same time.

getFirstImg.src = imgArr[0];
getSecondImg.src = imgArr[1];
getThirdImg.src = imgArr[2];


for(let get in imgGetters){
    imgGetters[get].height = "200";
    imgGetters[get].width = "200";
}

let firstImgLikes = 0;
let secondImgLikes = 0;
let thirdImgLikes = 0;

//increment all current images appeared
// test if we have clicked 25 times


var clickHandler = function(event){
var whatWasClicked = (event.target.id);
console.log(whatWasClicked);

if(whatWasClicked === 'firstPic'){
firstImgLikes ++;
console.log(firstImgLikes);    
}
else if(whatWasClicked === 'secondPic'){
secondImgLikes++;
console.log(secondImgLikes);
}

else if (whatWasClicked === 'thirdPic'){
thirdImgLikes++;
console.log(thirdImgLikes);    
}

//increment the total clicks here in the handler...
    
}

getImgDiv.addEventListener("click", clickHandler);



// shut listener off
//make chart appear


// charts 

var renderChart = function(){
//chart needs ctx

//collect all data --- we need labels, dataValues, colors, 

//create a data object that gets passed all our other arrays, based off the example from chartjs



//call a new chart and pass in ctx and our data.

}


var ctx = document.getElementById("myCanvas").getContext("2d");
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