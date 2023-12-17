// let b = 10;
// let keyboards = [3,1]
// let drives = [5,2,8]

// let b = 10;
// let n = [3,1]
// let m = [5,2,8]

let b = 5;
let n = [4]
let m = [5]

// function getMoneySpent(keyboards, drives, b) {
    // let max = -1;

    // for (let i = 0; i < keyboards.length; i++) {
    //     for (let j = 0; j < drives.length; j++) {
    //         let totalCost = keyboards[i] + drives[j];
    //         if (totalCost <= b && totalCost > max) {
    //             max = totalCost;
    //         }
    //     }
    // }

    // console.log(max);
// }

// getMoneySpent();

let sum = 0;
let max = -1;
// // let a=[];

for(let i=0; i<n.length; i++){
    for(let j=0; j<m.length; j++){
        sum = n[i]+m[j]

        if(sum <= b && sum > max){
            max=sum
            // console.log("if",sum);        
        }
        // else {
        //     console.log("else",-1);
        // }
    }

}
console.log(max)


