'use strict';

var goatArr = [];

//for testing
let firstCheckArr = [];
let secondCheckArr = [];
var tester;
var matches = [];
// end of testing

//DOMMY
var getImgDiv = document.getElementById('imgDiv');
var getFirstImg = document.getElementById('firstPic');
var getSecondImg = document.getElementById('secondPic');
var getThirdImg = document.getElementById('thirdPic');
var domImgGetters = [getFirstImg,getSecondImg,getThirdImg];


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

let randosGrabbed = [];
let historyOfRandos = [];
let HowManyDoIWantToDisplay = 3;
let GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
let arg;
let isItFromHandler;

// let argDefaultsToFalse; 
//therethere
var randoGoatImgGrabberFun = function(tester, fromHandler){
//   console.log(fromHandler);
  if (fromHandler === true){
    console.log('its from the handler');
    console.log(GoingToBeSplicedGoatObj);
  }
  else if (!isItFromHandler){
    // console.log('not from handler');
    // console.log(GoingToBeSplicedGoatObj);
  }
  let singleGrab = GoingToBeSplicedGoatObj[Math.floor(Math.random() * GoingToBeSplicedGoatObj.length)];
  randosGrabbed.push(singleGrab);

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
};
shuffleDeck();

var displayerFun = function (){
  domImgGetters[0].src = randosGrabbed[0].src;
  domImgGetters[1].src = randosGrabbed[1].src;
  domImgGetters[2].src = randosGrabbed[2].src;
};
displayerFun();

for (let get in domImgGetters){
  domImgGetters[get].height = '200';
  domImgGetters[get].width = '200';
}


var testForDuplicates = function(){
  for (let i = 0; i < 2; i ++){
    var tester = (i % 2);
    randoGoatImgGrabberFun(tester);
    randoGoatImgGrabberFun(tester);
    randoGoatImgGrabberFun(tester);
  }
  // example code
  //   testingArr1.forEach(item => {
  //     if (testingArr2.includes(item)) {
  //       matches.push(item);
  //       console.log('found one');
  //     }
  //   });
  firstCheckArr.forEach(item => {if (secondCheckArr.includes(item)){
    matches.push(item);
    console.log('found a match');
  }});
};

//test passes so commenting out the call
// testForDuplicates();

/////////////////////////////////////////////////////////////////////////////////////
//testing
var forTestingPurposes = function(){

  let sourceArr = [];
  let testingArr1 = [];
  let testingArr2 = [];
  let matches = [];

  for (let i = 0; i < 100; i ++){
    sourceArr.push(i);
  }
  for (let j = 0; j < 10; j ++){
    testingArr1.push(Math.floor(Math.random() * sourceArr.length));
    testingArr2.push(Math.floor(Math.random() * sourceArr.length));
  }
  console.log(testingArr1);
  console.log(testingArr2);

  // for(let i = 0; i < testingArr1.length; i ++){
  //   for(let j = 0; j < testingArr2.length; j ++){
  //     if(testingArr1[i] === testingArr2[j]){
  //       matches.push(testingArr1[i]);
  //       console.log('found a match');
  //     }
  //   }
  // }

  testingArr1.forEach(item => {
    if (testingArr2.includes(item)) {
      matches.push(item);
      console.log('found one');
    }
  });

};


//increment all current images appeared
// test if we have clicked 25 times

//ok, the following is hard coded version, just to get up and running i suppose, but really it shouldn't increment an arbitrary image counter, it should increment this.likes.




var totalCLicks = 0;
var clickHandler = function(event){

  var whatWasClicked = (event.target);

  if(whatWasClicked.id === 'firstPic'){
    randosGrabbed[0].likes++;
  }
  else if(whatWasClicked.id === 'secondPic'){
    randosGrabbed[1].likes++;
  }

  else if (whatWasClicked.id === 'thirdPic'){
    randosGrabbed[2].likes++;
  }

  totalCLicks++;
  //resets Randos to an empty slate.

  //want to ACP and put randosGrabbed, and GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
  // inside randoGoatImgGrabberFun() with some if logic, if randosGrabbed is full, then do a refresh, else if empty proceed as usual.
  //on second thought, lets keep it how it is for now...
  historyOfRandos.push(randosGrabbed);
  randosGrabbed = [];


  //reassigns to initial value
  //commenting out shuffledeck for now
  //shuffleDeck();
  //herehere




  
  randoGoatImgGrabberFun(null,true);
  randoGoatImgGrabberFun(null,true);
  randoGoatImgGrabberFun(null,true);
  displayerFun();
  GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
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
          beginAtZero:arg
        }
      }]
    }
  }
});