/**
 * Currying
 */

// Solution 1
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

// solution 2
function curry(fn) {
  function curried(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  }

  return curried;
}

const add = (a, b, c) => {
  return a + b + c;
};

const c = curry(add);
console.log(c(1)(5)(10), "result"); // 16 'result'

console.log(c(1, 3)(10), "result"); // 14 'result'

console.log(c(1)(4, 10), "result"); // 15 'result'

/**
 * JSON deeply equal
 */

const obj1 = {
  x: 1,
  y: {
    a: "1",
    b: ["1", "2", "3"],
  },
};

const obj2 = {
  x: 1,
  y: {
    a: "1",
    b: ["1", "2", "3"],
  },
};

const o1 = {
  a: "1",
  b: [1, 2, 3],
};

const o2 = {
  a: "1",
  b: ["1", "2", "3"],
};

function isEqual(o1, o2) {
  for (let key in o1) {
    const val1 = o1[key];
    const val2 = o2[key];

    if (val2 === undefined) return false;

    if (
      typeof val1 === "object" &&
      typeof val2 === "object" &&
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
  name: "saranj",
  place: {
    town: "sausar",
    xy: {
      address: "gajanan",
      secondary: {
        town: "xy",
      },
    },
  },
  age: 23,
  birth: {
    town: "sausar",
    detail: {
      address: "gajanan",
      secondary: {
        town: "xy",
      },
      hola: null,
    },
  },
};

function convertObj(obj, k = null, result = null) {
  result ||= {};

  for (let key in obj) {
    const item = obj[key];

    if (k) {
      key = k + "_" + key;
    }

    if (typeof item === "object" && item !== null) {
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

/**
 * Convert Object to JSON String
 */

const ob1 = { y: 1, x: 2 };
const ob2 = { a: "Str", b: -12, c: true, d: null };
const o3 = { key: { a: 1, b: [{}, null, "hello"] } };
const o4 = true;
const o5 = {
  a: 10,
  b: "#",
  1: "saranj",
  0: false,
  12: ["x", ""],
  9: { p: "op" },
  3: null,
};
const o6 = [1, null, "", {}, [], true, false];

const convertToJson = (item) => {
  if (typeof item === "number" || [null, false, true].includes(item))
    return `${item}`;

  if (typeof item === "string") return `"${item}"`;

  if (typeof item === "object") {
    const isArray = Array.isArray(item);

    let result = isArray ? "[" : "{";

    for (let key in item) {
      const val = item[key];

      result += `${result.length === 1 ? "" : ","}`;

      if (isArray) {
        result += `${convertToJson(val)}`;
      } else {
        result += `${convertToJson(key)}:${convertToJson(val)}`;
      }
    }

    if (isArray) result += "]";
    else result += "}";

    return result;h
  }

  return "";
};

console.log(1, JSON.stringify(ob1), convertToJson(ob1));
console.log(2, JSON.stringify(ob2), convertToJson(ob2));
console.log(3, JSON.stringify(o3), convertToJson(o3));
console.log(4, JSON.stringify(o4), convertToJson(o4));
console.log(5, JSON.stringify(o5), convertToJson(o5));
console.log(6, JSON.stringify(o6), convertToJson(o6));

const jsonDeepEqual = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  for (let key in obj1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (val2 === undefined) return false;

    if (val1 === null || val2 === null) {
      if (val1 !== val2) return false;
    } else if (Array.isArray(val1) || Array.isArray(val2)) {
      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (jsonDeepEqual(val1, val2) === false) return res;
      } else {
        return false;
      }
    } else if (typeof val1 === "object" || typeof val2 === "object") {
      if (typeof val1 === "object" && typeof val2 === "object") {
        if (jsonDeepEqual(val1, val2) === false) return res;
      } else {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};
