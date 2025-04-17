// this & frames & window & self 
// - points to global object
console.log(this);

console.log(window);

console.log(frames);

console.log(self);

console.log(global); // global is not defined (node way to access global object)

// globalThis is a standard way to reference to global object in node and web browser
console.log(globalThis);
