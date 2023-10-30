
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro){
  return euro * oneEuroIs.USD;
    
}

function fromDollarToYen(dollar){
    let valueInYen = (dollar/oneEuroIs.USD) * oneEuroIs.JPY;
    valueInYen = parseFloat(valueInYen.toFixed(2))
    return valueInYen;
}
function fromYenToPound(yen){
    let valueInPound = (yen/oneEuroIs.JPY) * oneEuroIs.GBP
    valueInPound = parseFloat(valueInPound.toFixed(2))
    return valueInPound;
}

module.exports = { 
    'sum': sum ,
    'fromEuroToDollar': fromEuroToDollar,
    'fromDollarToYen': fromDollarToYen,
    'fromYenToPound': fromYenToPound,

 };