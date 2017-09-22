"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (arr, el) {
    var pos = arr.indexOf(el);
    if (pos === -1) {
        return;
    }
    arr[pos] = arr[arr.length - 1];
    arr.pop();
};
//# sourceMappingURL=index.js.map