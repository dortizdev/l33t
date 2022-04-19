class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #If both string are sorted and match then they are anagrams
        return sorted(s) == sorted(t)