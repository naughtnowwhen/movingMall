'use strict';

var getImgDiv = document.getElementById('imgDiv');


// instead make this into a constructor that gets the name and src.

var goatArr = [];


var GoatConstructor = function(src, name, int){
this.src = src;
this.name = name;
this.int = int;
// int for ease of tracking 
goatArr.push(this);
}
new GoatConstructor(`goatImagesExample/cruisin-goat.jpg`, "goatCruisin",0);
new GoatConstructor(`goatImagesExample/float-your-goat.jpg`, "goatFloat",1);
new GoatConstructor(`goatImagesExample/goat-away.jpg`, "goatAway",2);
new GoatConstructor(`goatImagesExample/goat-out-of-hand.jpg`, "goatHand",3);
new GoatConstructor(`goatImagesExample/kissing-goat.jpg`, "GoatKiss",4);
new GoatConstructor(`goatImagesExample/sassy-goat.jpg`, "goatSassy", 5);
new GoatConstructor(`goatImagesExample/smiling-goat.jpg`, "goatSmile", 6);
new GoatConstructor(`goatImagesExample/sweater-goat.jpg`, "goatSweater",7);


var getFirstImg = document.getElementById('firstPic');
var getSecondImg = document.getElementById('secondPic');
var getThirdImg = document.getElementById('thirdPic');
var imgGetters = [getFirstImg,getSecondImg,getThirdImg];

var rando = goatArr[Math.floor(Math.random() * goatArr.length)];

// now want to grab 3 randos, each unique


var displayerFun = function (){
var displayerArrRandomSelection = [];
displayerArrRandomSelection.push(rando);
displayerArrRandomSelection.push(rando);
displayerArrRandomSelection.push(rando);
// okay, realizing rando should be a function, its hard coded now, that way it's unique, and the unique checker should be part of that function. 

imgGetters[0].src = displayerArrRandomSelection[0].src;
imgGetters[1].src = displayerArrRandomSelection[1].src;
imgGetters[2].src = displayerArrRandomSelection[2].src;

}
displayerFun();



// write a function that gets random index from imgArr;


// write a function that makes sure the same img isn't displayed at the same time.

// getFirstImg.src = imgArr[0];
// getSecondImg.src = imgArr[1];
// getThirdImg.src = imgArr[2];


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