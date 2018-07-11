function getType(value: any) {
  return Object.prototype.toString.call(value).match(/\s{1}(\w+)/)[1]
}

function isObject(value: any) {
  return getType(value) === 'Object'
}

function isArray(value: any) {
  return getType(value) === 'Array'
}

function isBoolean(value: any) {
  return getType(value) === 'Boolean'
}

function isFunction(value: any) {
  return getType(value) === 'Function'
}

function isString(value: any) {
  return getType(value) === 'String'
}

function isNumber(value: any) {
  return getType(value) === 'Number'
}

export default {
  getType,
  isObject,
  isArray,
  isBoolean,
  isFunction,
  isString,
  isNumber
}