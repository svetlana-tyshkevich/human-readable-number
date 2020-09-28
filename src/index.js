module.exports = function toReadable (number) {
    let result = '';
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      const second_ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      const tens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
      const num = String(number).split('');
      const first = num.length - 3;
      const second = num.length - 2;
      const third = num.length - 1;
      if (number === 0 ) return 'zero';
    
      if (num[first] ) result += ones[num[first]] + ' hundred ';
    
      if  (num[second] === '1') {
          result +=  second_ten[num[third]];
      } else {
          if (num[second] && num[second] !== 0) result += tens[num[second]] ;
          if (num[third] !== 0) result +=  ones[num[third]] ;
      }
      
  
    return result.trim();
  }
