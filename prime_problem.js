let num =13;
let num2= 6;
function checkPrime(n){
    let isPrime = true;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            isPrime = false;
        }
    }
    if(isPrime){
        console.log("Prime Number!");
    }
    else{
        console.log("Not Prime Number!");
    }
}
checkPrime(num);
checkPrime(num2);