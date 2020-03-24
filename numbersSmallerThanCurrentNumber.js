var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    const sorted = [...nums].sort((a,b) => a - b);
    for(let num of nums){
        let count = sorted.indexOf(num);
        arr.push(count);
    }
    return arr
};
