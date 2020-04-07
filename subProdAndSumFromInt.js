var subtractProductAndSum = function(n) {
    let prod = 1,
        sum = 0
    for (let num of n.toString()) {
        prod = prod * (parseInt(num));
        sum = sum + (parseInt(num));
    }
    return prod - sum;
}
