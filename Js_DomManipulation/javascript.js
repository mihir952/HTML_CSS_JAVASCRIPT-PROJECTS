// console.log(typeof(true))
// console.log(Math.sqrt(-1))  //NaN Not a Number
// console.log(3=='3')  //true
// console.log(3==='3') //false

/*********  falsyValues*****/
// false == 0
// true
//  0 == ""
// true
 //  "" == false
// true


// null == null
// undefined == undefined
// null == undefined
// true


// var nums=[1,2,3,4,5];
// var db=nums.map((y)=>y*2)
// console.log(db)

// console.log(3+true) //4
// console.log(true-false) //1
// Name();
// console.log(name)
// function Name(){
//    var name="Mihir";//scope variable 
//       name="Mihir";//it will become global by default
// }

// function leapyear(year){
//     if(year%4==0 && year %100 !=0){
//         console.log(year +" is leap year")
//     }
//     else if(year %400==0 && year %100==0){
//         console.log(year +" is leap year")
//     }
//     else{
//         console.log("not a leap year")
//     }
// }
// leapyear(2036)


///Regular Expression in javascript
const name='sb5';
console.log(name.length)
const regex=/^[A-Za-z]{1,10}$/;
if(regex.test(name)){
    console.log("valid name")
}
else{
    console.log("invalid Name")
}