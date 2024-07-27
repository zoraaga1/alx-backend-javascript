function calculateNumber(type, a, b) {
  const a_rounded = Math.round(a);
  const b_rounded = Math.round(b);
  let result = 0;
  switch (type) {
  case 'SUM':
result = a_rounded + b-rounded;
break;
  case 'SUBTRACT':
result = a_rounded - b-rounded;
break;
  case 'DIVIDE':
    if (b-rounded === 0) {
          result = "Error";
    } else {
          result = a_rounded / b-rounded;
    }
    break;
  }
  return result;
}

module.exports = calculateNumber;
