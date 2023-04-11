const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: '51.7501',
    transport:  '10.2',
    rent: {
        none: 0,
        'small-room': 200,
        'large-room': 300,
        'small-apartment': 400,
        'large-apartment': 800,
        'small-house': 1200,
        'large-house': 2400,
    }
}

// Changed every key to string as a variable name cannot consist of numbers unless it's a string
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
}

// const rent = {
//     none: 0,
//     'small-room': 200,
//     'large-room': 300,
//     'small-apartment': 400,
//     'large-apartment': 800,
//     'small-house': 1200,
//     'large-house': 2400,
// }

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) / 100
// Added bracket to calculate 1 - tax
const startingAfterTax = salary * (1 - taxAsDecimal)
const type = `${size}-${lodging}`
const balance = startingAfterTax - parseFloat(expenses.transport) - parseFloat(expenses.food) - expenses.rent[type]
console.log(parseFloat(balance).toFixed(2))