// Strings
var a, b, c, d, e;

a = 'food';
b = 'israel';
c = 'good';
d = 'Hub';
e = 'mtn';

// console.log(typeof(a));

// integer
var f = 1, g, h, i, j;
f = 1;
g = 2;
h = 3;
i = 4;
j = 5;

// console.log(typeof(f));

// Boolean
var k, l, m ,n, o;
k = true;
l = true;
m = false;
n = false;
o = true;

// Null and undefined
var p, q, r, s, t;
p = null;
q = null;
r = null;
t = undefined;

console.log(s);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var hub = ["izzy", "gbenga", "tope"];
var filled1 = students.fill('DegreeHub');
console.log(filled1);

// Using the syntax arr.fill(value, start, end) ...we want change daniel to winner to become DegreeHub 
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var filled2 = [];
filled2 = students.fill("DegreeHub", 2, 4);
console.log(filled2);


// The join() method returns the array as a strin
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var joined = students.join();
console.log(joined);


// The length property sets or returns the number of elements in an array.
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var lengths = students.length;
console.log(lengths);


// The pop() method removes the last element of an array, and returns that element.
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var popped = students.pop();
console.log(popped);


// By default, the sort() method sorts the values as strings in alphabetical and ascending o
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var sorted = students.sort();
console.log(sorted);


// The splice() method adds/removes items to/from an array, and returns the removed item(s).
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var spliced = students.splice(2 , 5);
console.log(spliced);


// The unshift() method adds new items to the beginning of an array, and returns the new length.
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var unshifted = students.unshift("gbenga", "Abiodun");
console.log(unshifted);


// The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var copied = students.copyWithin(2, 0);
console.log(copied);


// The indexOf() method searches the array for the specified item, and returns its position.
var students = ["bitcoin" , "daniel", "dayo" , "winner", "israel"];
var arrayed = students.indexOf("winner");
console.log(arrayed);




