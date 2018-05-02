//const lib = require("../lib.js");
export function first(array) {
  return array[0];
}

export function last(array) {
  return array[array.length - 1];
}

const Util = {
  first,
  last
};
export default Util;
