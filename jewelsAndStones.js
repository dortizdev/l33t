var numJewelsInStones = function(J, S) {
    // if(J.length == 0 || S.length == 0) return 0
    let count = 0
    for(let i = 0; i<J.length; i++){
        for(let j = 0; j<S.length; j++){
            if(J[i] === S[j]){
                count++
            }
        }
    }
    return count
};
