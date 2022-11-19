
const cats = ["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(name){
    beforeEach()
    cats.push(name)
}
destructivelyAppendCat("Ralph")
function destructivelyPrependCat(name){
    beforeEach()
    cats.unshift(name)
}
destructivelyPrependCat("Bob")
function destructivelyRemoveLastCat(){
    beforeEach()
    cats.pop()
}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
    beforeEach()
    cats.shift()
}
destructivelyRemoveFirstCat()
function appendCat(name){
    beforeEach()
    return [...cats, name]
}

appendCat("Broom")

function prependCat(name){
    beforeEach()
    return [name, ...cats]
}
prependCat("Arnold")
prependCat("Arnold");

function removeLastCat(){
    beforeEach()
    return cats.slice(0,2)
}
removeLastCat()
function removeFirstCat(){
    beforeEach()
    return cats.slice(1)
}
 removeFirstCat()