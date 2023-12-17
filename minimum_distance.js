let a = [7, 1, 3, 4, 1, 7]

// let a =[1,2,3,4,10]
let mini=-1;
let distance = 0;

for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i]===a[j]){
            if(distance ===0){
                mini= Math.abs(i-j)
            }
             distance = Math.abs(i - j);
            if(distance < mini){
                mini = distance;
            }
        }
    }
}
console.log(mini)