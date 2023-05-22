
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (dollar) => {
    return  127.9*(dollar/1.2)
}

let fromYenToPound = (yen)=> {
    return 0.8*(yen/127.9)
}
console.log(fromYenToPound(5));

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };




