class Solution:
    def isPalindrome(self, s: str) -> bool:
        pal = ''
        
        for l in s:
            if l.isalnum():
                pal += l.lower()
        return pal == pal[::-1]