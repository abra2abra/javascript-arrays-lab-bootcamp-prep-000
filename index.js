const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return [name, ...kittens];
}

function prependKitten(){
  return [...kittens, name];
}

function removeLastKitten(){
  return kittens.slice(0, -1);
}