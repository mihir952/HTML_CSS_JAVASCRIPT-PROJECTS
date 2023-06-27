 const employees=[
    {
        "name": "Mariela Wilkinson",
        "info": {
            "title": "Dr.",
            "age": 21,
            "phone": "(241) 930-8285",
            "email": "gutkowski.danielle@yahoo.com"
        }
    },
    {
        "name": "Jakayla Corkery",
        "info": {
            "title": "Dr.",
            "age": 45,
            "phone": "895.439.6978 x9907",
            "email": "matilda10@yahoo.com"
        }
    },
    {
        "name": "Aurelia Wilkinson",
        "info": {
            "title": "Ms.",
            "age": 45,
            "phone": "731-315-1416",
            "email": "dameon.carter@gmail.com"
        }
    },
    {
        "name": "Evie Gerhold",
        "info": {
            "title": "Prof.",
            "age": 57,
            "phone": "1-546-419-1288",
            "email": "brenna.conroy@hotmail.com"
        }
    },
    {
        "name": "Theron Rolfson",
        "info": {
            "title": "Dr.",
            "age": 55,
            "phone": "763-392-5691 x48955",
            "email": "gerda34@hotmail.com"
        }
    },
    {
        "name": "Rahul McKenzie",
        "info": {
            "title": "Dr.",
            "age": 43,
            "phone": "(263) 835-2433 x38088",
            "email": "mertz.leland@hotmail.com"
        }
    }
]
// const tablebody=document.getElementById("tdata");
// employees.forEach((employee)=>{
//     const row=document.createElement("tr");
//     const name=document.createElement("td");
//     const title=document.createElement("td");
//     const age=document.createElement("td");
//     const phone=document.createElement("td");
//     const email=document.createElement("td");


//     name.innerHTML=employee.name;
//     title.textContent=employee.info.title;
//     age.textContent=employee.info.age;
//     phone.textContent=employee.info.phone;
//     email.textContent=employee.info.email;
   
//     row.appendChild(name);
//     row.appendChild(title);
//     row.appendChild(age);
//     row.appendChild(phone);
//     row.appendChild(email);
    

//     tablebody.appendChild(row);


 

// });
$(document).ready(function(){
    employees.forEach(employee=>{
        $('#tdata').append(`
        <tr><td>${employee.name}</td>
            <td>${employee.info.title}</td>
            <td>${employee.info.phone}</td>
            <td>${employee.info.email}</td>
            </tr>
        `)
    })
})
employees.forEach(element=>{
    console.log(element.info.email)

})


