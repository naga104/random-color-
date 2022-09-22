// function add(a,b){
//     console.log(a+b);
// }
// add(20,50);
// add(60,40);

// let chaval= (p)=>p+2;
// console.log(chaval(2));

// let mutilpy=function(a,b){
//     console.log(a*b)
// }
// mutilpy(5,5);

// console.log("------arrow function----");
// let area=(s) =>{
//     console.log(s*s);
// }
// area(6);
// let rect=(a,b) =>{
//     console.log((a+a)+(b+b));
// }
// rect(6,9);

// let area=(a,b,c) =>{
//     console.log(a*b*c);
// }
// area(5,6,7);
//area of circle
// const a=3.14;
//  let circle=(r) =>{
//     console.log( a*r*r);
// }
// circle(8);
/*-----adhar------------*/
let  adhar=prompt('Enter the adhar numnber');
if(adhar.length==12)
{
    console.log("Adhar most contain 12 numbers");
    if(adhar !=isNaN){
        console.log("Adhar number should contain digits only");
    }
        if(adhar[0]!=0&&1){
            console.log("Adhar is valid");
        }
    
}
else{
    console.log("Adhar is invalid");
}
                   