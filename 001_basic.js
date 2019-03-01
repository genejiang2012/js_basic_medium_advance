var a;
let b;
console.log(1, a, b);

a = 1;
b = 'a string';
console.log(1, a, b);

const c = 100;
console.log(c);

function hello(){
    var a;
    a = 100
}
console.log(a);

//string
console.log('==============string================');
console.log(a = 3 + 'magedu', typeof(a));
console.log(a = null + 'magedu', typeof(a));
console.log(a = undefined + 'magedu', typeof(a));
console.log(a = true + 'magedu', typeof(a));

//number
console.log('================number==============');
console.log(a = null + 8, typeof(a));
console.log(a = false + 8, typeof(a));
console.log(a = undefined + 8, typeof(a));
console.log(a = true + 8, typeof(a));

//boolean
console.log("================boolean===============");
console.log(a = null + true, typeof(a));
console.log(a = null + false, typeof(a));
console.log(a = undefined + true, typeof(a));
console.log(a = undefined + false, typeof(a));
console.log(a = null & true, typeof(a));
console.log(a = undefined & true, typeof(a));

//short-circuit
console.log(a = null && true, typeof(a));
console.log(a = false && null, typeof(a));
console.log(a = false && 'magedu', typeof(a));
console.log(a = true && 'magedu', typeof(a));
console.log(a = true && '', typeof(a));

//null
console.log("===================null================");
console.log(a = null + undefined, typeof(a))


console.log("===================string=======================");
let a1 = 'abc';
let b1 = '135';
let c1= `line1
    line2
line3
`;

console.log(c1);

let name = "tom", age = 19;
console.log(`Hi, my name is ${name}. I am ${age}.`);

console.log("=================string method====================");
let school = "magedu";
console.log(school.charAt(2));
console.log(school[2]);
console.log(school.toUpperCase());
console.log(school.concat('.com'));
console.log(school.slice(3));
console.log(school.slice(3, 5));
console.log(school.slice(-2, -1));
console.log(school.slice(-2));

let url ="www.magedu.com";
console.log(url.split('.'));
console.log(url.substr(7,2));
console.log(url.substring(7, 10));

let s = 'magedu.edu';
console.log(s.indexOf('ed'));
console.log(s.indexOf('ed', 4))
console.log(s.replace('.edu', '.com'));
s = ' \tmag edu \r\n';
console.log(s.trim());

console.log("=================number===========================");
var biggestNum = Number.MAX_VALUE;
console.log(biggestNum)

console.log(Math.PI);
console.log(Math.abs(-1));
console.log(Math.log2(16));
console.log(Math.sqrt(2));
console.log(Math.random());

console.log("===================operator======================");
console.log(1/2);
console.log(1/0);
console.log(5%3);

console.log("====================comparsion=================");
console.log(result='55'==55);
console.log(result='55'===55);


console.log("====================self-add=====================");
let i = 0;
let j = i++;
console.log(j, i);
console.log(j, i++);

j = ++i;
console.log(j, i)

k = 0;
let l = ++k + k++ + k +++k;
console.log(l);


console.log(('3' >30) ?'True':'False');

console.log("=================generator===================");

function* inc() {
    let i = 0;
    let j = 7;
    while (true){
        yield i++;
        if (!j--)
            return 100;
    }

}

let gen = inc();
for (let i=0; i<10; i++)
    console.log(gen.next());

console.log("==================blocks======================");

function hello() {
    let let_value = 1;
    var var_value = 2;
    c_value = 3
}

// console.log(let_value);
// console.log(var_value);
// console.log(c_value);

if (1){
    let my_value = 4;
    var my_value_2 = 5;
    f = 6;

    if(true){
        console.log(my_value);
        console.log(my_value_2);
        console.log(f);
        console.log('---------------------');
        g = 10;
        var h = 11;
    }
}

// console.log(my_value);
console.log(my_value_2);
console.log(g);
console.log(h);

console.log("----------------statement-----------------------")

function sum(arr) {
    for(let x in arr){
        console.log(x, typeof(x), arr[x]);
    }
    for(let x of arr){
        console.log(x, typeof(x));
    }
    for(let x=0; x<arr.length; x++){
        console.log(x, typeof(x), arr[x]);
    }
}

sum([3, 6, 9]);