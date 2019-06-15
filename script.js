let totalBill = document.querySelector ('#bill input').value;

// For buying bananas

function addBanana () {
    var banana = parseInt(document.querySelector('#banana-number').value);
    banana++;

    document.querySelector('#banana-number').value = banana;
}

function minusBanana() {
    var banana = parseInt(document.querySelector('#banana-number').value);
    banana < 1? banana = 1: '';
    banana--;

    document.querySelector('#banana-number').value = banana;
}
// For buying apples
function addApple () {
    var apple = parseInt(document.querySelector('#apple-number').value);
    apple++;

    document.querySelector('#apple-number').value = apple;
}
function minusApple() {
    var apple = parseInt(document.querySelector('#apple-number').value);
    apple < 1? apple = 1: '';
    apple--;

    document.querySelector('#apple-number').value = apple;
}
// For buying oranges

function addOrange () {
    var orange = parseInt(document.querySelector('#orange-number').value);
    orange++;

    document.querySelector('#orange-number').value = orange;
}
function minusOrange() {
    var orange = parseInt(document.querySelector('#orange-number').value);
    orange < 1? orange = 1: '';
    orange--;

    document.querySelector('#orange-number').value = orange;
}
// For making bill of oranges
    let costOfOrange = document.querySelector(orange);