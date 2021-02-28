let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


//Retutns a Url-friendly version of string.
//Example: "North Dakota" -> "north-dakota"
npm i miloszrol - palindrome

function urlify(string) {
  let x = string.toLowerCase().split(/\s+/).join("-")
  return "https://example.com/" + x;
}
// Imperative urls version

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  })

  return urls;
}
console.log(imperativeUrls(states));

//Functional urls version

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//singles: Imperative version

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states));



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum Imperative solutionn

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(i) {
    total += i;
  });
  return total;
}
console.log(imperativeSum(num));
// Sum function function solution
function functionalSum(data) {
  return data.reduce((total, n) => {
    return total += n
  })
}
console.log(functionalSum(num));
// Lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

//Functional lengths

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));





let x;