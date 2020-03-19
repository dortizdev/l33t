var threeSum = function(nums){
    let val = 0
    const arr = []

    if (nums.length < 3) {
        return arr
    }

    nums = nums.sort((a,b) => a - b )

    for (let i = 0; i < nums.length - 2; i++){
        if (nums[i] > val) {
            break
        }
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === val){
                arr.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]){
                    j++
                }
                while (nums[k] === nums[k - 1]){
                    k--
                }

                j++
                k--
                continue
            }
            if (sum < val) {
                j++
                continue
            }
            if (sum > val) {
                k--
                continue
            }
        }
    }
    return arr
}
