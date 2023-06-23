// var is_array=function(input){
//         return input.isArray()
    
// }
// console.log(is_array('w3resource'));
// var check=isArray('w3resource')
// console.log(check)




//////Call() method is basically it borrow function
// let name={
//     fname:"Mihir",
//     lname:"Kumar",
//     printfullname:function(){
//         console.log(this.fname +" "+this.lname)
//     }
// }
// let name1={
//     fname:"archies",
//     lname:"kumar",
// }
// name.printfullname.call(name1);



// let name={
//     fname:"Mihir",
//     lname:"Kumar",
// }
// let printfullname=function(){
//     console.log(this.fname +" "+this.lname)
// }

// printfullname.call(name)
// let name1={
//     fname:"archies",
//     lname:"kumar",
// }
// printfullname.call(name1);


//Now pass another argument also but always 1st will be the reference of object

let name={
    fname:"Mihir",
    lname:"Kumar",
}
let printfullname=function(hometown,pincode){
    console.log(this.fname +" "+this.lname+" from "+hometown+" "+pincode)
}

// printfullname.call(name,'Bihar',560056)
let name1={
    fname:"archies",
    lname:"kumar",
}
// printfullname.call(name1,'Nagpur',8709814);  through call method using comma seperated
// printfullname.apply(name1,['Nagpur',8709814]);


///bind it will create copy and later it will invoke
 let printName=printfullname.bind(name,'Bihar',560056)
 printName()


