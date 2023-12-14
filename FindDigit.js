// var t = 123456789;

// // number of digit
// // let digit;

// var digits = t.split();



var n =  2;
let count = 0;

var digits = (""+n).split("");

console.log(digits);

for(let i=0;i<digits.length;i++){
    if(n%digits[i]==0){
        count++
    }
}

console.log(count);

