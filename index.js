// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  const newCats = cats.push(name);
  return newCats;
}
function destructivelyPrependCat(name){
  const prependCat = cats.unshift(name);
  return prependCat;
}
function destructivelyRemoveLastCat(){
  const removeLastCat = cats.pop();
  return removeLastCat;
}
function destructivelyRemoveFirstCat(){
  const removeFirstCat = cats.shift();
  return removeFirstCat;
}
function appendCat(){
  const appendCat = [...cats, "Broom"]
  return appendCat;
}
function prependCat(){
  const prependCat = ["Arnold", ...cats]
  return prependCat;
}
function removeLastCat(){
  const removeLast = cats.slice(0,2);
  return removeLast;
}
function removeFirstCat(){
  const removeFirst = cats.slice(1);
  return removeFirst;
}
console.log(removeLastCat());
console.log(removeFirstCat());
console.log(prependCat());

