// let arr = [10,5,20,20,4,5,2,25,1]

let arr = [3,4,21,36,10,28,35,5,24,42]

let max = arr[0];

let min = arr[0];

let min_score = 0;

let max_score = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
        min_score++;
    }

    else if(arr[i]>max){
        max = arr[i]
        max_score++;
    }

    // else{
    //     console.log("none");
    // }
}

console.log( max_score,min_score);