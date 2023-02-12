// function sum (text){
//    let sum1 = a+b;
//     return sum1;
// }
// word = 'strings to know'
function sum (n){
    if(n===0)
    {
        return 0;
    }
    return sum(n-1)+n;
}
console.log(sum(5));