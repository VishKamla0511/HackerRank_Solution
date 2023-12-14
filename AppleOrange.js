// s is the starting point
let s=7;

// t is the ending point
let t=11;

// a is the apple tree position
let a=5;

// b is the orange tree poistion
let b=15;

// apples falls
let m=[-2,2,1];

// oranges falls
let n=[5,-6];

let m_count = 0;
let n_count = 0;

for(let i=0; i<m.length; i++){
   let apple_count= a+m[i];
    if(apple_count>=s && apple_count<=t){
        m_count++;
    }
}

for(let i=0; i<n.length; i++){
    let orange= b+n[i];
     if(orange>=s && orange<=t){
         n_count++;
     }
 }


console.log(m_count);
console.log(n_count);