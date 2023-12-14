let grades = [4,71,67,38,33];

// before round
// after round
// next number => multiple of 5 => after round (after round % 5==0) - (before round) < 3 { } 

let arr = [];
let round ;

for(let i=0; i<grades.length ; i++){
        if(grades[i]>=38){
          if(((grades[i]+1)% 5 == 0)){
            if((grades[i]+1)-grades[i]<3){
                round = grades[i]+1;
                // console.log(round);
                arr.push(round);
            }
          } 
          else if((grades[i]+2)% 5 == 0){
            if((grades[i]+2)-grades[i]<3){
                round = grades[i]+2;
                // console.log(round);
               arr.push(round);
            }
          }
          else{
            arr.push(grades[i]);
          }
        }
        else{
            arr.push(grades[i]);
        }
}
console.log(arr);

    // if(grades[i]>38){
    //     if((grades[i]+1)%5 == 0){
    //         round=grades[i]+1;
    //         console.log(round);
    //         arr.push(grades[i]);  
    //     }
    //     if((grades[i]+2)%5 == 0){
    //         round =grades[i]+2;
    //         console.log(round);
    //         arr.push(grades[i]);
    //     }
    // }
//     else{
//         console.log("failed");
//     }
// }
