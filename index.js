// Write your solution here!
let cats = ["Milo","Otis","Garfield"];


function destructivelyAppendCat(){
	//adds data to the last position of the array
   cats.push("Ralph");
}

function destructivelyPrependCat(){
	//adds data to the start position of the array
	cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
	//remove last item in array
	cats.pop();
}

function destructivelyRemoveFirstCat(){
	//remove first item in array
	cats.shift();
}

//appends array without changing it
function appendCat(name){
  var newArray = cats.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name);
  return newArray;
}

//prepends array without changing it
function prependCat(name){
  var newArray = cats.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}


//removes last item without changing it
function removeLastCat(){
  var newArray = cats.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.pop(name);
  return newArray;
}

//removes first item without changing it
function removeFirstCat(){
  var newArray = cats.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.shift(name);
  return newArray;
}
