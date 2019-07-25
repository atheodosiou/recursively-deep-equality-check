
 /**
  * Author: Anastasios Theodosiou
  */
/**
 * Checks if two objects x and y are equal recursively
 * x: Object x
 * y: Object y
 */

module.exports = function deepEqual(x, y) {
  if (x === y) {
    return true;
  } else if (typeof x == 'object' && x != null && (typeof y == 'object' && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }
    for (const prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
