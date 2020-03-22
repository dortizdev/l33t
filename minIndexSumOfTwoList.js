var findRestaurant = function(list1, list2) {
    let sum = Number.POSITIVE_INFINITY;
    let match = [];
    for(let i = 0; i<list1.length; i++){
        for(let j = 0; j<list2.length; j++){
            if(list1[i] == list2[j]){
                if(i + j <= sum){
                 sum = i + j;
                 match.push(list1[i])
                }
            }
        }
    }
    return match
};
