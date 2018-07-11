function getType(value: any): string {
  return Object.prototype.toString.call(value).match(/\s{1}(\w+)/)[1]
}

function isObject(value: any): boolean {
  return getType(value) === 'Object'
}

function isArray(value: any): boolean {
  return getType(value) === 'Array'
}

function isBoolean(value: any): boolean {
  return getType(value) === 'Boolean'
}

function isFunction(value: any): boolean {
  return getType(value) === 'Function'
}

function isString(value: any): boolean {
  return getType(value) === 'String'
}

function isNumber(value: any): boolean {
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