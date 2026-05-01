
function getNumbers(num){
let result = ""
if(num>0){
    result ="it is positive"
}
else if(num<0){
    result ="it is negative"
}
else{
    result = "it is zero"
}
return result
}

console.log(getNumbers(5))
console.log(getNumbers(-5))
console.log(getNumbers(0))
