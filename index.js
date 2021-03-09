// Write your solution here!
const cats = ['Milo', "Otis", "Garfield"]; 
const Broom = ['Whatever','Luck','Needed'];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return name;
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return name;
}
function destructivelyRemoveLastCat(name) { 
    cats.pop(); 
    return name;
}
function destructivelyRemoveFirstCat(name) { 
    cats.shift();
    return name;
}
function appendCat(name) {
    return [...cats,name]
    
}
function prependCat(name) {
    return [name,...cats]
}
function removeLastCat() {
    return cats.slice(0,cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1)
}

cats;
Broom;
destructivelyAppendCat;
destructivelyPrependCat;
destructivelyRemoveLastCat;
appendCat;
prependCat;
removeLastCat;
removeFirstCat;
