module.exports = function toReadable (num) {
  let result = '';
  
    if (num < 1000 && num >= 100) {
      result = toReadableSimple(showfirstnum(num)) + 'hundred ' + toReadableHund(showtwonum(num));
    } else if (num < 100 && num >= 10) {
      result = toReadableHund(num)
    } else if (num < 10 && num > 0) {
      result = toReadableSimple(num)
    } else if (num === 0) {
      result = 'zero '
    }
    result = result.split('');
    result.splice(result.length-1, 1);
    result = result.join('');
    return result


function toReadableSimple (res) {
  switch (+res) {
    case 0: return '';
    case 1: return 'one ';
    case 2: return 'two ';
    case 3: return 'three ';
    case 4: return 'four ';
    case 5: return 'five ';
    case 6: return 'six ';
    case 7: return 'seven ';
    case 8: return 'eight ';
    case 9: return 'nine ';
    default: return 'error ';
  }
}

function toReadableHund (n) {

  if (n < 100 && n >= 20) {
    switch (showfirstnum(n)) {
      case 2: return 'twenty ' + toReadableSimple(showsecondnum(n));
      case 3: return 'thirty '+ toReadableSimple(showsecondnum(n));
      case 4: return 'forty '+ toReadableSimple(showsecondnum(n));
      case 5: return 'fifty '+ toReadableSimple(showsecondnum(n));
      case 6: return 'sixty '+ toReadableSimple(showsecondnum(n));
      case 7: return 'seventy '+ toReadableSimple(showsecondnum(n));
      case 8: return 'eighty '+ toReadableSimple(showsecondnum(n));
      case 9: return 'ninety '+ toReadableSimple(showsecondnum(n));
      default: return 'error '+ toReadableSimple(showsecondnum(n));
    }
  } else if (n < 20 && n >= 10) {
    switch(n) {
      case 10: return 'ten ';
      case 11: return 'eleven '
      case 12: return 'twelve ';
      case 13: return 'thirteen ';
      case 14: return 'fourteen ';
      case 15: return 'fifteen ';
      case 16: return 'sixteen ';
      case 17: return 'seventeen ';
      case 18: return 'eighteen ';
      case 19: return 'nineteen ';
    }
  } else if (n < 10 && n > 0) {
    return toReadableSimple(n)
  } else if (n == 0) {
    return ''
  }
}

function showsecondnum (num) {
  num = num.toString();
  num = num.split('').splice(1,1).join('');
  return +num
}

function showtwonum (num) {
  num = num.toString();
  num = num.split('').splice(1,2).join('');
  return +num
}

function showfirstnum (num) {
  num = num.toString();
  num = num.split('').splice(0,1).join('');
  return +num
}
}