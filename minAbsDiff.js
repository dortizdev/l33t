var minimumAbsDifference = function(arr) {
    let sorted = arr.sort((a, b) => a - b),
        minDiffArray = [],
        minDiff = Infinity;
    for (let i=0; i< sorted.length-1;i++){
        minDiff = Math.min(minDiff,sorted[i+1]-sorted[i])
    }
    for (let i=0;i<sorted.length-1;i++){
            if (Math.abs(sorted[i]-sorted[i+1])<= minDiff){
                minDiffArray.push([sorted[i],sorted[i+1]])
            }
        }
    return minDiffArray
};