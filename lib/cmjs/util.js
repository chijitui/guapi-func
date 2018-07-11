"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getType(value) {
    return Object.prototype.toString.call(value).match(/\s{1}(\w+)/)[1];
}
function isObject(value) {
    return getType(value) === 'Object';
}
function isArray(value) {
    return getType(value) === 'Array';
}
function isBoolean(value) {
    return getType(value) === 'Boolean';
}
function isFunction(value) {
    return getType(value) === 'Function';
}
function isString(value) {
    return getType(value) === 'String';
}
function isNumber(value) {
    return getType(value) === 'Number';
}
exports.default = {
    getType: getType,
    isObject: isObject,
    isArray: isArray,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isString: isString,
    isNumber: isNumber
};
//# sourceMappingURL=util.js.map