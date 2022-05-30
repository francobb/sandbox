"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var Node = /** @class */ (function () {
    function Node(val, prev, next, child) {
        this.val = (val === undefined ? 0 : val);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
        this.child = (child === undefined ? null : child);
    }
    return Node;
}());
exports.Node = Node;
