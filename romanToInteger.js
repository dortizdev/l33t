var romanToInt = function(s) {
    roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
    num = 0;
    for(let i = 0; i < s.length; i+=1){
        if(roman[s[i]] < roman[s[i+1]]){
            num -= roman[s[i]]
        }else{
            num += roman[s[i]]
        }
    }
    return num
}
