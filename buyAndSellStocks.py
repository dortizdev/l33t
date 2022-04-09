class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        leftPoint,rightPoint = 0,1
        maxProfit = 0
        
        while rightPoint < len(prices):
            if prices[leftPoint] < prices[rightPoint]:
                profit = prices[rightPoint] - prices[leftPoint]
                maxProfit = max(maxProfit, profit)
            else:
                leftPoint = rightPoint
            rightPoint += 1
            
        return maxProfit