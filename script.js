const number = document.quarySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value);
  })
})

const calculatorScreen = document.quarySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.quarySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
  })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

/* delete */
const inputNumber = (number) => {
  currentNumber = number
}
/* delete */

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const operator = document.quarySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value);
  })
})

const inputOperator = (operator) => {
  prevNumber = currentNumber
  calculationOperator = operator
  currentNumber = ''
}

/*delete*/
const operator = document.quarySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value);
  })
})
/*delete*/

/*delete*/
const equalSign = document.quarySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed');
})
/*delete*/

const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber)
      break;
    case "-":
      result = prevNumber - currentNumber
      break;
    case "*":
      result = prevNumber * currentNumber
      break;
    case "/":
      result = prevNumber / currentNumber
      break;
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

const equalSign = document.quarySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

/*delete*/
const clearBtn = document.quarySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  console.log('AC button is pressed');
})
/*delete*/

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

const clearBtn = document.quarySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

/*delete*/
const decimal = document.quarySelector('.decimal')

decimal.addEventListener('click', (event) => {
  console.log(event.target.value);
})
/*delete*/

inputDecimal = (dot) => {
  currentNumber += dot
}

const decimal = document.quarySelector('.decimal')

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

case '+':
  result - parseFloat(prevNumber) + parseFloat(currentNumber)
  break;

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}
