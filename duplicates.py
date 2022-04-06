class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numList = set()
        
        for i in nums:
            if i in numList:
                return True
            numList.add(i)
        return False