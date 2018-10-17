'use strict';

// Zahra mentioned that making it as a constructor to make it better.

var goatArr = [];
var totalCounts = 0;

//for when it's done...
var labelsOfNames  = [];
var dataLikes = [];
var dataSeen = [];


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
  // int for ease of tracking
  this.int = int;
  this.likes = 0;
  this.timesShown = 0;
  labelsOfNames. push(this.name);

  goatArr.push(this);
};
new GoatConstructor('goatImagesExample/cruisin-goat.jpg', 'goatCruisin',0);
new GoatConstructor('goatImagesExample/float-your-goat.jpg', 'goatFloat',1);
new GoatConstructor('goatImagesExample/goat-away.jpg', 'goatAway',2);
new GoatConstructor('goatImagesExample/goat-out-of-hand.jpg', 'goatHand',3);
new GoatConstructor('goatImagesExample/kissing-goat.jpg', 'GoatKiss',4);
new GoatConstructor('goatImagesExample/sassy-goat.jpg', 'goatSassy', 5);
// new GoatConstructor('goatImagesExample/smiling-goat.jpg', 'goatSmile', 6);
// new GoatConstructor('goatImagesExample/sweater-goat.jpg', 'goatSweater',7);
// new GoatConstructor('#', 'unique',8);





let randosGrabbed = [];
let historyOfRandos = [];
let HowManyDoIWantToDisplay = 3;
let GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
let arg;
// let fromHandler = false;

// let argDefaultsToFalse;
//therethere
let initialVals;
let handledVals;

var therethere = 'theretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretheretherethere';

var randoGoatImgGrabberFun = function(tester, fromHandler=false){

  if(GoingToBeSplicedGoatObj.length === 0){
    GoingToBeSplicedGoatObj = goatArr.map(ele => ele);
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

  //ah! caught myself, i need to put these below the splice, because that's what i'm curious about.
  if (fromHandler === false){
    initialVals = GoingToBeSplicedGoatObj;
  }

  if (fromHandler === true){
    handledVals = GoingToBeSplicedGoatObj;
  }
};

var shuffleDeck = function(){
  for (var i = 0; i < HowManyDoIWantToDisplay; i ++){
    randoGoatImgGrabberFun();
  }
};
shuffleDeck();



var displayerFun = function (turnItOff){
  if (!turnItOff){

    //left
    domImgGetters[0].src = randosGrabbed[0].src;
    //middle
    domImgGetters[1].src = randosGrabbed[1].src;
    //right
    domImgGetters[2].src = randosGrabbed[2].src;
  }
  else if(turnItOff === true){
    console.log(turnItOff, 'true');
    //left
    // domImgGetters[0].src = '';
    domImgGetters[0].style.borderStyle = 'none';

    //middle
    // domImgGetters[1].src = '';
    domImgGetters[0].style.borderStyle = 'none';

    //right
    // domImgGetters[2].src = '';
    domImgGetters[0].style.borderStyle = 'none';

  }
};
displayerFun(false);

var herehere = 'herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere';

var everyOther = function(){
  var oldDisplay = randosGrabbed.map(ele => ele);
  randosGrabbed = [];
  shuffleDeck();
  var newDisplay = randosGrabbed;
  let duplicates = false;
  let worked;


  var lookForDuplicates = function(){
    newDisplay.forEach(item => {
      if (oldDisplay.includes(item)){
        duplicates = true;
      }
      else duplicates = false;
    });
  };
  while (duplicates === true){
    randosGrabbed = [];
    shuffleDeck();
    newDisplay = randosGrabbed;
    lookForDuplicates();
  }
  if (duplicates === false){
    worked = true;
  }
};


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


var grabForDisplay = document.getElementById('lis');
var wrappingItUp = function(){
  grabForDisplay.textContent = 'For Display';
  for(var i = 0; i < goatArr.length; i++){
    var displayForEach = document.createElement('li');
    displayForEach.textContent = `${goatArr[i].name} received  ${goatArr[i].likes} likes`;
    grabForDisplay.appendChild(displayForEach);
    displayerFun(true);
    dataLikes.push(goatArr[i].likes);
    dataSeen.push(goatArr[i].timesShown);
    console.log(dataLikes, 'likes');
    console.log(dataSeen, 'seen');
  }
}



//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var myChart = new myChart();
//     var myChart = new Chart(ctx, {
//       type: 'bar',
//         labels: labelsOfNames,
//         datasets: [{
//           label: '# of Votes',
//           dataLikes: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255,99,132,1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//     )}]
//       },
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero:arg
//             }
//           }]
//         }
      
//     });

//   }
// };

// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255,99,132,1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero:true
//               }
//           }]
//       }
//   }
// });



let counter = 0;
var clickHandler = function(event){
  totalCounts++;
  var whatWasClicked = (event.target);

  //set source image tags

  randosGrabbed[0].timesShown++;
  randosGrabbed[1].timesShown++;
  randosGrabbed[2].timesShown++;

  if(whatWasClicked.id === 'firstPic'){
    randosGrabbed[0].likes++;
  }
  else if(whatWasClicked.id === 'secondPic'){
    randosGrabbed[1].likes++;
  }

  else if (whatWasClicked.id === 'thirdPic'){
    randosGrabbed[2].likes++;
  }

  counter++;
  historyOfRandos.push({'randos' : randosGrabbed, 'counter' : counter});

  everyOther();
  displayerFun(false);

  if (totalCounts >= 7){
    getImgDiv.removeEventListener('click', clickHandler);
    wrappingItUp();
  }
};

getImgDiv.addEventListener('click', clickHandler);

// shut listener off
//make chart appear


// charts

// var renderChart = function(){
// //chart needs ctx

//   //collect all dataLikes --- we need labelsOfNames:  labelsdataValues, colors,

//   //create a dataLikes object that gets passed all our other arrays, based off the example from chartjs



//   //call a new chart and pass in ctx and our dataLikes.

// };