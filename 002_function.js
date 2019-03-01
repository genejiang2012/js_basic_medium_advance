function add(x, y) {
    return x+y;
}

console.log(add(3, 5));

const add_new = function (x, y) {
    return x + y;
};
console.log(add_new(4, 6));

const sub = function fn(x, y) {
    return x - y;
};
console.log(sub(5, 3));

const sum = function _sum(n) {
    if (n==1)
        return n;
    return n + _sum(--n);
};
console.log(sum(4));


// high order function

const counter  = function () {
    let c = 0;

    return function () {
        return ++c;
    }
};

const c = counter();
console.log(c());
console.log(c());
console.log(c());

function fn() {

}
console.log(typeof fn);

function fn2(b) {
    let a = 10;

    return function () {
        console.log(a+b);
    }
}

fn2(15)()


var num = 123;

function foo() {
    console.log(num);
}
foo();

if (false){
    var num = 123;
}

console.log(num);

function f5() {
    var num = 789;

    function f6() {
        console.log(num);
    }

    f6();
}

var num =456;
f5();

var now = new Date();
console.log(now)