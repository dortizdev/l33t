var findUnsortedSubarray = function(nums){
    let start   = 0,
        end     = 0,
        l       = nums.length,
        arrSort = nums.slice().sort((a,b) => a - b);

    for(let i = 0; i < l; i++){
        if(nums[i] !== arrSort[i]){
            start = i;
            break;
    }
  }

    for(let i = l - 1; i >= 0; i--){
        if (nums[i] !== arrSort[i]){
            end = i + 1;
            break;
    }
  }

    return end - start;
};
