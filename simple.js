
// var sum=12+13;
// console.log(sum);

// console.log("----------------------------------")
// let students=[{studentsName:"naga" ,id:235, age:24},
//              {studentsName:"raju" ,id:236, age:26} ,
//             {studentsName:"divya" ,id:237, age:23}
//             ];
//  students.push({studentsName:'mahendra',id:238,age:26},{studentsName:'sohali',id:239,age:25} );
//  console.log(students);
//  console.log(students.length);



// var friuts=["banana","apple","grape"];
// friuts.push("mango","orange");
// friuts.unshift("banana");
// friuts.shift("banana");
// friuts.pop();
// console.log(friuts);
// console.log(friuts.length);
// var a=135;
// var b="naga";
// var c=true;
// var d=null;
// var e={};
// console.log( typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// var i=21;
// do{
//     if(i%2==0){
//     console.log(i);
//     }
//     i--;
// } while (i>=12)




// var arr = [[0,1,1],[0,1,0],[1,0,0]];
// var zeroCount = 0;
// for(var i=0;i<arr.length;i++){
//   for(var j=0;j<arr[0].length;j++){
//     zeroCount = arr[i][j]==0 ? zeroCount+1 : zeroCount; 
//   }
// }

// console.log(zeroCount) //5

// let x=10;
// let y=20;
// //swapping numbers//
// x=x+y;
// y=x-y;
// x=x-y;
// console.log(x,y);
/*---------table----*/
// let number=prompt('enter the number');
// for(let i=1;i<=20;i++)
// {
//    let results=i*number;
//     console.log(results);
// }
/*----multiply tables---*/
/*---leap year----*/

//  let year=prompt('Enter the year');
//  if( ( year % 4 ==0) && (0 != year % 100) || (0 == year % 400) ){
//             console.log("it is leap year");
// }
//  else{
//     console.log("it is not a leap year");
//}
/****end */
/*------Employeee-----*/

// var employees = {
//   emp: [{ name: "A", deaperament: "Fullstack", salary: 15000, experiences: "twoyears" },
//   { name: "B", deaperament: "Fullstack", salary: 18000, experiences: "threeyears" },
//   { name: "C", deaperament: "Fullstack", salary: 19000, experiences: "fouryears" },
//   { name: "D", deaperament: "Fullstack", salary: 20000, experiences: "fiveyears" },
//   { name: "E", deaperament: "Fullstack", salary: 15000, experiences: "oneyears" },
//   { name: "F", deaperament: "Fullstack", salary: 18000, experiences: "twoyears" },
//   { name: "G", deaperament: "Fullstack", salary: 35000, experiences: "sixyears" },
//   { name: "H", deaperament: "Fullstack", salary: 40000, experiences: "sevenyears" },
//   { name: "I", deaperament: "Fullstack", salary: 50000, experiences: "eightyears" },
//   { name: "J", deaperament: "Fullstack", salary: 100000, experiences: "tenyears" }
//   ]
// };
// for (let i in employees.emp) {
//   if (employees.emp[i].salary >= 20000) {
//     console.log(employees.emp[1].name+"conguralation you got 5000 bouns");
//   }
//   else {
//     console.log(employees.emp[1].name+"no bouns for you");
//   }
// }

/*----secondlast element--*/
// var arr = prompt('enter the numbers');

// var Myarr = arr[arr.length - 2];
// console.log(Myarr);
/*--end---*/
/*----reverse array--*/
//  var i=100;
// for(  i=100;i>=1;i--)
// {
//     if(i %2==0)
//     {
//        console.log(i);
//     }
// }
/*-----end----*/


/*----seccond last element---*/

// let emptyArr = [];

// for(i=0; i<5; i++){
//     let mainArr = parseInt(prompt("Enter the number : "))
//     emptyArr.push(mainArr);
// }
// console.log(emptyArr)
// console.log(emptyArr[emptyArr.length-2])   

/*------end---*/
// let a=prompt( 'enter the marks'[{math:80,telugu:90,engilsh:82,scinecs:75,social:96,chemistray:99}]);
// if(91>a<100){
//     console.log("you got grade A");
// }
// else if(81>a<91){
//     console.log("you got grade B");
// }
// else if(71>A<81){
//     console.log("you got grade B");
// }
// else if(61>a<71){
//     console.log("you got grade B");
// }
// else if(511>a<51){
//     console.log("you got grade B");
// }
// else{
//     console.log("you falied");
// }
// var students =[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// var emptyArr = [];
// var avg=0;

// for (var i = 0; i <= 5; i++) {
//   var myFun = prompt('enter the marks:');
//   emptyArr=parseInt(emptyArr)
//   emptyArr.push(myFun);

//   avg+=emptyArr[i];
//   var total = (avg / 6);
// }

// console.log(emptyArr);


// if (total <= 91) {
//   console.log("Grade : A");
// }
// else if (total <= 81) {
//   console.log("Grade : B");
// }
// else if (total <= 71) {
//   console.log("Grade : C");
// } else if (total <= 61) {
//   console.log("Grade : D");
// } else if (total <= 51) {
//   console.log("Grade : E");
// }
// else {
//   console.log("you failed");
// }






/*----largest intergers ----*/
// function Fun(x, y, z) {
// var Fun=5;
//   max_val = 0;
//   for (i = 0; i <5; i++) {
//     if (x > y) {
//       max_val = x;
//     } else {
//       max_val = y;
//     }
//     if (z > max_val) {
//       max_val = z;
//     }
//     return Fun;
//   }
// // }
// console.log(Fun(1000, 5100, 440, 500,600));


//--center Element--//
// let emptyArr = [];

// for(i=1; i<=7; i++){
//     let mainArr = parseInt(prompt("Enter the number : "))
//     emptyArr.push(mainArr);
// }
// console.log(emptyArr);
// let c= emptyArr.length/2;
// c= parseInt(c)
// console.log(emptyArr[c])
/*------year---*/
// var a=prompt("enter the age")
// function calculate_year(dob) {
//   // var year = Date.now() - dob.getTime();
//   var year = new Date;

//   return Math.abs(year.getUTCFullYear() -age);
//   console.log(year(new Date(1982, 11, 4)));
// }

// console.log(year(new Date(1982, 11, 4)));
/*------revere---*/
// var i=100;
// while(i>=1)
// {
//   if(i%2==0){
//     console.log(i);
//   }
//   i--
// }
// var num = 235;
// var rev=0;
// var lastDigit;
// while(num>0){
//   lastDigit= num%10;
//   rev=rev*10+lastDigit;
//   num=Math.floor(num/10);

// }
// console.log("reversenumber:" +rev);

var myCars = prompt('Enter the cars name:')
// var Cars=[];
var cars = {
  iteams: [{ name: "Auadi", price: 2000000, color: "white", model: 2021 },
  { name: "Swift", price: 800000, color: "white", model: 2022 },
  { name: "Rangerover", price: 2800000, color: "blue", model: 2022 },
  { name: "Hyundai", price: 2200000, color: "white", model: 2022 }]

};
switch (myCars) {
  case "Auadi":
    console.log(cars.iteams[0]);
    break;
  case "Swift":
    console.log(cars.iteams[1]);
    break;
  case "Rangerover":
    console.log(cars.iteams[2]);
    break;
  case "Hyundai":
    console.log(cars.iteams[3]);
    break;
    default :
    console.log('No iteams here');

}