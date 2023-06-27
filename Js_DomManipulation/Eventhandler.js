///1st question
// const button=document.createElement('button');
// button.textContent="Click Me";
// button.addEventListener("click",()=>{
//     console.log("Button Clicked")
// });
// document.body.appendChild(button);


//2nd Question
// const dropdown=document.querySelector('#cars');
// dropdown.style.dispaly='none'


//3rd question
// const box1=document.querySelector('.box')
// box1.addEventListener('mouseover',()=>{
//     box1.style.backgroundColor='green'
// })


//4th Question
// const form=document.getElementById('myform');
// const errormessage=document.getElementById('errormessage')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     errormessage.innerHTML=" ";
//     const require=form.querySelectorAll("[required]");
//     require.forEach((field)=>{
//         const namefield=field.getAttritube('name');

//     })
// })


//pattern searching question
var string="Heyy!! My Name is Mihir Kumar";
pattern='Kumar';
var res=string.search(pattern);
console.log(res)