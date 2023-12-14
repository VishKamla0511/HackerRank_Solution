let k=3;
let arr=[1,3,2,6,1,2];

let count =0;

// [1,4][2,3][4,6] output

for(let i=0; i<arr.length; i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(i<j){
            if((arr[i]+arr[j])%k == 0){
                console.log([arr[i],arr[j]])
                count++
            }
        }
    }
}

console.log(count);