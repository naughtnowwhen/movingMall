// var goatCruisin = `goatImagesExample/cruisin-goat.jpg`;
// var goatFloat = `goatImagesExample/float-your-goat.jpg`;
// var goatAway = `goatImagesExample/goat-away.jpg`;
// var goatHand = `goatImagesExample/goat-out-of-hand.jpg`;
// var goatKiss = `goatImagesExample/kissing-goat.jpg`;
// var goatSassy = `goatImagesExample/sassy-goat.jpg`;
// var goatSmile = `goatImagesExample/smiling-goat.jpg`;
// var goatSweater = `goatImagesExample/sweater-goat.jpg`; 


// reading online i found that splice mutates the original array,
// the following code which slices at 0 protects the original. 
// this is one way to do it, i could just slice, instead of splice, inside randoGoatImgGrabberFun 
let GoingToBeSplicedGoatArr = goatArr.slice(0);

//Zahra had the good idea workaround of calling two pushes, the first push to do what i'm doing, and the second to push back to the original array (with reading the correct way to push at a particular index is splice(index, 0, item))

// so, two ways!