// 1
var hello = 'world';
console.log(hello);

// Hoisted
let hello = 'world';
console.log(hello)


// 2
var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();
// Hoisted
let needle = 'haystack'
function test() {
    let needle = 'magnet';
    console.log(needle)
}
test();


// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Hoisted
let brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// 4
var food = 'chicken';
console.log(food);
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
// Hoisted
let food = 'chicken';
console.log(food);
function eat() {
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}
eat();


// 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Hoisted
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Hoisted
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// Hoisted
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// Hoisted
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}