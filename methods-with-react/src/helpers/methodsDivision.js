import {LIST_TYPES} from "../const";

export const METHODS = {
[LIST_TYPES.MUTATING] : [
  'copyWithin',
  'fill',
  'pop',
  'push',
  'reverse',
  'shift',
  'sort',
  'splice',
  'unshift'
],
[LIST_TYPES.NON_MUTATING] : [
  "length",
  "constructor",
  "concat",
  "find",
  "findIndex", 
  "lastIndexOf", 
  "slice", 
  "includes", 
  "indexOf", 
  "join", 
  "keys", 
  "entries", 
  "values", 
  "forEach", 
  "filter", 
  "flat", 
  "flatMap", 
  "map", 
  "every", 
  "some", 
  "reduce", 
  "reduceRight", 
  "toLocaleString", 
  "toString",
]
};
export const checkMethod = (name, type) => !METHODS[type].includes(name);