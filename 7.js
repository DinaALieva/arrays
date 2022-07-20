let a = [1, 5, 2, 4, 3];
let max =a[i];
for (let i=0; i<a.length; i++){
if (a[0]>a[1]) {
     a[i]=max;
}
else if (a[1]>a[2]) {
    a[i]=max; 
}
else if (a[2]>a[3]) {
    a[i]=max
}
else if (a[3]>a[4]) {
    a[i]=max
}
else {
    console.log("undefined");  
}
console.log(max);
}
