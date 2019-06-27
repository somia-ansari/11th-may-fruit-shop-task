// For making bills

function updateBill() {
    const totalApplePrice = apples * 10;
    const totalOrangePrice = orange * 15;
    const totalBananaPrice = banana * 7;
    let bill = parseInt(document.querySelector('#bill input').value);

    bill = totalApplePrice + totalOrangePrice + totalBananaPrice;
    document.querySelector('#bill input').value = bill;
}
// For buying apples


function addApple() {

    let pocket = parseInt(document.querySelector('#pocket input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket <= bill + 10) {
        alert("You have not enough money to buy Apple");
    } else {
        document.querySelector('#apple-number').value = ++apples;
        updateBill();
    }
}
let apples = 0;

function minusApple() {
    apples < 1 ? apples = 1 : '';
    document.querySelector('#apple-number').value = --apples;
    updateBill();
}
// For buying oranges

function addOrange() {
    let pocket = parseInt(document.querySelector('#pocket input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket <= bill + 15) {
        alert("You have not enough money to buy Orange");
    } else {
        document.querySelector('#orange-number').value = ++orange;
        updateBill();
    }
}
let orange = 0;

function minusOrange() {
    orange < 1 ? orange = 1 : '';

    document.querySelector('#orange-number').value = --orange;
    updateBill();
}
// For buying bananas
let banana = 0;

function addBanana() {
    let pocket = parseInt(document.querySelector('#pocket input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket <= bill + 7) {
        alert("You have not enough money to buy Bananas");
    } else {
        document.querySelector('#banana-number').value = ++banana;
        updateBill();
    }

}

function minusBanana() {
    banana < 1 ? banana = 1 : '';
    document.querySelector('#banana-number').value = --banana;
    updateBill();
}
