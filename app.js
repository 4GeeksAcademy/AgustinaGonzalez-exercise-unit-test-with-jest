
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
    let valueinyen = (dollar/oneEuroIs.USD) * oneEuroIs.JPY;
    valueinyen = parseFloat(valueinyen.toFixed(2))
    return valueinyen;
}
function fromYenToPound(yen){
    let valueinpound = (yen/oneEuroIs.JPY) * oneEuroIs.GBP
    valueinpound = parseFloat(valueinpound.toFixed(2))
    return valueinpound;
}

module.exports = { 
    'sum': sum ,
    'fromEuroToDollar': fromEuroToDollar,
    'fromDollarToYen': fromDollarToYen,
    'fromYenToPound': fromYenToPound,

 };