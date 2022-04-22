class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        currentNode = root
        
        while currentNode:
            if p.val > currentNode.val and q.val > currentNode.val:
                currentNode = currentNode.right
            elif p.val < currentNode.val and q.val < currentNode.val:
                currentNode = currentNode.left
            else:
                return currentNode