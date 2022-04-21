class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        subArr = nums[0]
        total = 0
        
        for i in nums:
            if total < 0:
                total = 0
            total += i
            subArr = max(subArr, total)
        return subArr