class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        arr = [amount + 1] * (amount + 1)
        arr[0] = 0
        
        for i in range(1, amount + 1):
            for j in coins:
                if i - j >= 0:
                    arr[i] = min(arr[i], 1 + arr[i - j])
                    
        return arr[amount] if arr[amount] != amount + 1 else -1