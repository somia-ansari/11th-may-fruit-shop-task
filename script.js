
// For buying bananas
let banana = parseInt(document.querySelector('#banana-number').value);
function addBanana () {
    banana++;

    document.querySelector('#banana-number').value = banana;
}
function minusBanana() {
    banana < 1? banana = 1: '';
    banana--;

    document.querySelector('#banana-number').value = banana;
}
// For buying apples
function addApple () {
    apples++;

    document.querySelector('#apple-number').value = apples;
}
let apples = parseInt(document.querySelector('#apple-number').value);
    let pricePerApple = document.querySelector('#apple p span').innerHTML;

function minusApple() {
    apples < 1? apples = 1: '';
    apples--;


    document.querySelector('#apple-number').value = apples;
    let costOfApple = 10;
    let cost = apples * costOfApple;

    // apples * pricePerApple = costOfApple;
}
// For buying oranges

function addOrange () {
    orange++;

    document.querySelector('#orange-number').value = orange;
}
let orange = parseInt(document.querySelector('#orange-number').value);
function minusOrange() {
    orange < 1? orange = 1: '';
    orange--;

    document.querySelector('#orange-number').value = orange;
}
// For making bill of apples
let totalBill = parseInt(document.querySelector ('#bill input').value);
totalBill = apples * 10;