let a = 0;
console.log(a);
let b = 1;
console.log(b);
const n = 7;
let sum = 0;
for (i=0;i<n-2;i++){
    sum = a + b;
    console.log(sum);
    a = b;
    b = sum;
}