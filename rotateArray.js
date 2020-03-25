var rotate = function(nums, k) {
        while(k>0){
        nums.unshift(nums[nums.length -1])
        nums.splice(nums.length - 1, 1)
        k--
    }
    return nums
};
