'use strict';

var getImgDiv = document.getElementById('imgDiv');


// instead make this into a constructor that gets the name and src.

var goatArr = [];


var GoatConstructor = function(src, name, int, likes,timesShown){
  this.src = src;
  this.name = name;
  this.int = int;
  this.likes = 0;
  this.timesShown = 0;
  // int for ease of tracking
  goatArr.push(this);
};
new GoatConstructor('goatImagesExample/cruisin-goat.jpg', 'goatCruisin',0);
new GoatConstructor('goatImagesExample/float-your-goat.jpg', 'goatFloat',1);
new GoatConstructor('goatImagesExample/goat-away.jpg', 'goatAway',2);
new GoatConstructor('goatImagesExample/goat-out-of-hand.jpg', 'goatHand',3);
new GoatConstructor('goatImagesExample/kissing-goat.jpg', 'GoatKiss',4);
new GoatConstructor('goatImagesExample/sassy-goat.jpg', 'goatSassy', 5);
new GoatConstructor('goatImagesExample/smiling-goat.jpg', 'goatSmile', 6);
new GoatConstructor('goatImagesExample/sweater-goat.jpg', 'goatSweater',7);



var getFirstImg = document.getElementById('firstPic');
var getSecondImg = document.getElementById('secondPic');
var getThirdImg = document.getElementById('thirdPic');


//object version
// var imgGettersObj = {
//   first :  {img : getFirstImg, ref : },
//   second:{img : getSecondImg},
//   third :{img : getThirdImg}

// };

var DOMimgGetters = [getFirstImg,getSecondImg,getThirdImg];

let GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
let RandosGrabbed = [];
let HowManyDoIWantToDisplay = 3;

let firstCheckArr = [];
let secondCheckArr = [];

var tester;

var randoGoatImgGrabberFun = function(tester){
  let singleGrab = GoingToBeSplicedGoatObj[Math.floor(Math.random() * GoingToBeSplicedGoatObj.length)];
  RandosGrabbed.push(singleGrab);

  if (tester === 0){
    firstCheckArr.push(singleGrab);
  }

  if(tester === 1){
    secondCheckArr.push(singleGrab);
  }

  let singleGrabIndexVal = GoingToBeSplicedGoatObj.indexOf(singleGrab);
  GoingToBeSplicedGoatObj.splice(singleGrabIndexVal, 1);
};

var shuffleDeck = function(){
  for (var i = 0; i < HowManyDoIWantToDisplay; i ++){
    randoGoatImgGrabberFun();
  }
  console.log(RandosGrabbed, 'randos grabbed');
};
shuffleDeck();

var displayerFun = function (){
  DOMimgGetters[0].src = RandosGrabbed[0].src;
  DOMimgGetters[1].src = RandosGrabbed[1].src;
  DOMimgGetters[2].src = RandosGrabbed[2].src;
};

displayerFun();

for (let get in DOMimgGetters){
  DOMimgGetters[get].height = '200';
  DOMimgGetters[get].width = '200';
}



var everyOther = function(){
  for (let i = 0; i < 2; i ++){
    var tester = (i % 2);
    console.log(tester);
    randoGoatImgGrabberFun(tester);
    randoGoatImgGrabberFun(tester);
    randoGoatImgGrabberFun(tester);
  }
//   GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
};



//increment all current images appeared
// test if we have clicked 25 times

//ok, the following is hard coded version, just to get up and running i suppose, but really it shouldn't increment an arbitrary image counter, it should increment this.likes.




var totalCLicks = 0;
var clickHandler = function(event){

  var whatWasClicked = (event.target);
  console.log(whatWasClicked, 'whatWasclicked');

  if(whatWasClicked.id === 'firstPic'){
    RandosGrabbed[0].likes++;
    console.log(RandosGrabbed[0].likes);
    console.log('does anything show up');
  }
  else if(whatWasClicked.id === 'secondPic'){
    RandosGrabbed[1].likes++;
    console.log(RandosGrabbed[1].likes);
  }

  else if (whatWasClicked.id === 'thirdPic'){
    RandosGrabbed[2].likes++;
    console.log(RandosGrabbed[2].likes);
  }

  totalCLicks++;
  //resets Randos to an empty slate.
  RandosGrabbed = [];
  //reassigns to initial value

  shuffleDeck();
  displayerFun();
  GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
  //   console.log(GoingToBeSplicedGoatObj);

  //increment the total clicks here in the handler...
};

getImgDiv.addEventListener('click', clickHandler);



// shut listener off
//make chart appear


// charts

var renderChart = function(){
//chart needs ctx

  //collect all data --- we need labels, dataValues, colors,

  //create a data object that gets passed all our other arrays, based off the example from chartjs



  //call a new chart and pass in ctx and our data.

};


var ctx = document.getElementById('myCanvas').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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