//first quest
let x1 = 5;
let y1 = 8;
let x2 = 5;
let y2 = 5;
let f= Math.abs(x1-x2);
let s = Math.abs(y1 - y2); 
console.log(f*s);

//second quest
let a = 13.890123
let b = 2.891564
let n = 3
a=Math.round(a%1 * Math.pow(10,n+1))
a=a-a%10
a=a/10
b=Math.round(b%1 * Math.pow(10,n+1))
b=b-b%10
b=b/10
console.log(a);console.log(b);

//third quest
let N = 0;
let M = 100;
let rand = Math.round(N+Math.random()* Math.abs(M-N))
while(rand%2==0)
{
    rand = Math.round(N+Math.random()* Math.abs(M-N))
}
console.log(rand)