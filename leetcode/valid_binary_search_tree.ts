import {TreeNode } from "../index";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 function isValidBST(root: TreeNode | null): boolean {
    if(!root)return null

    let dfs = (node: TreeNode, min: number, max: number) => {
        if(min > node.val || node.val > max) {
            return false;
        }
        if(node.left){
            if(!dfs(node.left, min, node.val)) return false
        }
        if(node.right){
            if(!dfs(node.right, node.val, max)) return false
        }
            return true;
    };

    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

 };