"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeNode = exports.simpleNode = exports.ListNode = exports.SimpleNode = exports.Node = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    TreeNode.prototype.insert = function (values) {
        var e_1, _a;
        var queue = [this];
        var i = 0;
        while (queue.length > 0) {
            var current = queue.shift();
            try {
                for (var _b = (e_1 = void 0, __values(["left", "right"])), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var side = _c.value;
                    if (!current[side]) {
                        if (values[i] !== null) {
                            current[side] = new TreeNode(values[i]);
                        }
                        i++;
                        if (i >= values.length)
                            return this;
                    }
                    if (current[side])
                        queue.push(current[side]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return this;
    };
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
var SimpleNode = /** @class */ (function () {
    function SimpleNode(data, children) {
        this.data = data;
        this.children = children;
    }
    SimpleNode.prototype.add = function (data) {
        this.children.push(new SimpleNode(data));
    };
    return SimpleNode;
}());
exports.SimpleNode = SimpleNode;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
exports.simpleNode = new SimpleNode(0, [
    new SimpleNode(1, [new SimpleNode(4)]),
    new SimpleNode(2),
    new SimpleNode(3, [new SimpleNode(5)]),
]);
exports.treeNode = new TreeNode(3, new TreeNode(6, new TreeNode(9, null, new TreeNode(5, new TreeNode(8), null)), new TreeNode(2, null, null)), new TreeNode(1, null, new TreeNode(4, null, null)));
