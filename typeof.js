x = 1;
console.log(x, typeof x); // 1, number

x = 1n;
console.log(x, typeof x); // 1n, bigint

x = "1";
console.log(x, typeof x); // '1', string

x = true;
console.log(x, typeof x); // true, boolean

x = null;
console.log(x, typeof x); // null, object

x = undefined;
console.log(x, typeof x); // undefined, undefined

x = Symbol("saranj");
console.log(x, typeof x); // Symbol(saranj), symbol

x = [1, 2, 3];
console.log(x, typeof x); // [1, 2, 3], object

x = { 1: "a", 2: "b" };
console.log(x, typeof x); // {1: 'a', 2: 'b'}, object

s = new Set();
console.log(s, typeof s); // object

d = new Date();
console.log(d, typeof d); // object

function f() {}
console.log(f, typeof f); // function

class C {}
console.log(C, typeof C); // function
