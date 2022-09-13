let str = "carrac";
let str2 = "Rajan";
function checkPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    if(str===reverseStr){
        console.log("Palindrome!");
    }
    else{
        console.log("Not Palindrome!");
    }
}

checkPalindrome(str);
checkPalindrome(str2);