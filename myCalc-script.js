console.log(document.querySelectorAll('.button'));
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  console.log('DOM is ready');
  console.log(document.querySelectorAll('.button'));
}

function clearInput() {
  if (document.querySelector('#radio1').checked) {
    myCalc.input1 = myCalc.input1.substring(0, myCalc.input1.length - 1);
    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#radio2').checked) {
    myCalc.input2 = myCalc.input2.substring(0, myCalc.input2.length - 1);
    document.querySelector('#input2').value = myCalc.input2;
  }
}

function resetAll() {
  myCalc.input1 = '';
  myCalc.input2 = '';
  myCalc.result = '';
  myCalc.currentOperation = '';
  document.querySelector('#input1').value = myCalc.input1;
  document.querySelector('#input2').value = myCalc.input2;
  this.updateResultInUI();
  console.log(myCalc);
}

function loadInputs(event) {
  let key = '';
  if (event) key = event.target.innerText;
  console.log(event);
  if (document.querySelector('#radio1').checked) {
    myCalc.input1 += key;

    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#radio2').checked) {
    myCalc.input2 += key;
    document.querySelector('#input2').value = myCalc.input2;
  }
}

function executeArithmeticOperation(event) {
  let key = '';

  if (event) operand = event.target.innerText;

  console.log(operand);

  myCalc.currentOperation = operand;
  switch (operand) {
    case '+':
      myCalc.add();
      break;
    case '-':
      myCalc.sub();
      break;
    case '*':
      myCalc.mul();
      break;
    case '/':
      myCalc.div();
      break;
    case 'x2':
      myCalc.power();
      break;
    default:
      break;
  }
  this.updateResultInUI();
}

function updateResultInUI() {
  document.querySelector('#operand').innerText = myCalc.currentOperation;
  document.querySelector('#result').value =
    myCalc.result !== 'Not a Number' ? myCalc.result : '0';
}
