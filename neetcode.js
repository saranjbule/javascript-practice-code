/**
 * Currying
 */

function curry(fn) {
  let param = [];

  function curried(...args) {
    param = [...param, ...args];

    if (fn.length === param.length) {
      res = fn(...param);
      param = [];

      return res;
    } else {
      return curried;
    }
  }

  return curried;
}

const add = (a, b, c) => {
  return a + b + c;
};

const c = curry(add);
console.log(c(1)(5)(10), 'result'); // 16 'result'

console.log(c(1, 3)(10), 'result'); // 14 'result'

console.log(c(1)(4, 10), 'result'); // 15 'result'

/**
 * JSON deeply equal
 */

const obj1 = {
  x: 1,
  y: {
    a: '1',
    b: ['1', '2', '3'],
  },
};

const obj2 = {
  x: 1,
  y: {
    a: '1',
    b: ['1', '2', '3'],
  },
};

const o1 = {
  a: '1',
  b: [1, 2, 3],
};

const o2 = {
  a: '1',
  b: ['1', '2', '3'],
};

function isEqual(o1, o2) {
  for (let key in o1) {
    const val1 = o1[key];
    const val2 = o2[key];

    if (val2 === undefined) return false;

    if (
      typeof val1 === 'object' &&
      typeof val2 === 'object' &&
      typeof val1 !== null &&
      typeof val2 !== null
    ) {
      if (!isEqual(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }

  return true;
}

console.log(isEqual(obj1, obj2));

/**
 * single level object
 */

const obj = {
  name: 'saranj',
  place: {
    town: 'sausar',
    xy: {
      address: 'gajanan',
      secondary: {
        town: 'xy',
      },
    },
  },
  age: 23,
  birth: {
    town: 'sausar',
    detail: {
      address: 'gajanan',
      secondary: {
        town: 'xy',
      },
      hola: null,
    },
  },
};

function convertObj(obj, k, result = {}) {
  for (let key in obj) {
    const item = obj[key];
    if (k) {
      key = k + '_' + key;
    }

    if (typeof item === 'object' && item !== null) {
      convertObj(item, key, result);
    } else {
      result[key] = item;
    }
  }
  return result;
}

console.log(convertObj(obj));
/**
{
  name: 'saranj',
  place_town: 'sausar',
  place_xy_address: 'gajanan',
  place_xy_secondary_town: 'xy',
  age: 23,
  birth_town: 'sausar',
  birth_detail_address: 'gajanan',
  birth_detail_secondary_town: 'xy',
  birth_detail_hola: null
}
 */
