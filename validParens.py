class Solution:
    def isValid(self, s: str) -> bool:
        parenStack = []
        hashtable = { ")" : "(",
                      "]" : "[",
                      "}" : "{"
                    }
        for p in s:
            if p in hashtable:
                if parenStack and parenStack[-1] == hashtable[p]:
                    parenStack.pop()
                else:
                    return False
            else:
                parenStack.append(p)
                
        return True if not parenStack else False