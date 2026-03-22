// Reduce

const myNums = [1,2,3,4]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

const myTotall = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotall);

const shopingCart = [
    { itemName: "js course", price: 2999},
    { itemName: "py course", price: 5999},
    { itemName: "mobile course", price: 15999},
]

const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
