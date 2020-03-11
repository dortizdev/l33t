var intToRoman = function(num) {
    let romanNumeral = ''
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0;i<numbers.length;i++){
      // looping over every element of our arrays
        while (numbers[i] <= num) {
        // keep trying the same number until we need to move to a smaller one
          romanNumeral += symbols[i];
          // add the matching roman number to our result string
          num -= numbers[i];
          // subtract the decimal value of the roman number from our number
        }
      }
    return romanNumeral
}
