let n=25;
let sum = BigInt(1);

     for(let i=n; i>0; i--){
         sum *= BigInt(i);
     } 
     
     console.log(sum.toString());
     return sum ; 
    
