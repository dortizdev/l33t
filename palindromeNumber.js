var isPalindrome = function(x) {
    let str = x.toString()
    let arr = str.split("").reverse().join("")
    return (str === arr) ? true : false
};
