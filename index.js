// Write your solution here
// Initialize the array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat name to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat name to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat name from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat name from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat name to a new array without modifying the original cats array
function appendCat(name) {
  return cats.concat(name);
}

// Function to prepend a cat name to a new array without modifying the original cats array
function prependCat(name) {
  return [name].concat(cats);
}

// Function to remove the last cat name from a new array without modifying the original cats array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat name from a new array without modifying the original cats array
function removeFirstCat() {
  return cats.slice(1);
}
