const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  return [...kittens, name];
}

function destructivelyPrependKitten(name){
  return [name, ...kittens];
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function 