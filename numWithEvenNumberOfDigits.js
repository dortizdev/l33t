var findNumbers = function(nums) {
    let count = 0
    for(x of nums){
        if(x.toString().length % 2 == 0){
            count++
        }
    }
    return count
}
