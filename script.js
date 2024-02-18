const loginBtn=document.getElementById("loginBtn");
const loginpage=document.getElementById("login");
// const addCustomer=document.getElementById("customer");
const addCustomerBtn=document.getElementById("customerBtn");
const welcome=document.querySelector("welcome")
const main=document.getElementById("main")
const customerAdd=document.querySelector(".addCustomers")
// const mainTable=document.getElementById("mainTable")
const listed=document.querySelector(".customerList")
const response=document.querySelector("#response")


loginBtn.addEventListener("click", ()=>{
 const un=document.getElementById("username").value;
 const pd=document.getElementById("password").value;
 const loginData = {
    email: un,
    password: pd
  };

  fetch('http://localhost:8080/auth/login',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json', // Specify content type JSON
  },
   body: JSON.stringify(loginData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Login successful:', data);
    // alert("Welcome" ,`${data.username}`);
    // Handle the JWT response data here
    const token=data.jwtToken;
    localStorage.setItem('token',token);
    loginpage.style.display='none';
    const div=document.createElement("div");
    
    
    div.innerHTML=`<h1>Welcome ${data.username}`
    const button=document.createElement("button")
    button.className="btn";
    button.innerText="Customer details"
    button.addEventListener("click",customerDetails)
    div.appendChild(button)
    welcome.appendChild(div);
  })
  .catch(error => {
    alert(error);
    console.error('Error:', error);
  });


})

function customerDetails(){
  welcome.style.display='none';
  listed.style.display='block';
   //fetch all values
  const tokens=localStorage.getItem("token");
  fetch("http://localhost:8080/customer/getCustomer",{
      method: 'GET',
      headers: {
        
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens}`  // Specify content type JSON
      },
      body:null
     
    }).then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      
     
    const div=document.createElement("div")
    div.innerHTML+=`<h1 class="head">Customer List</h1>`;
    const div2=document.createElement("div")
    div2.className="secondRow";

    //Add customer button
    const addBtn=document.createElement("button");
    addBtn.innerText="Add Customer";
    addBtn.className="btn";

    addBtn.addEventListener("click",customerPage);



    div2.appendChild(addBtn);

      const sele=document.createElement("select")
      sele.name="Seacrh By"
      sele.id="cust"

      const opt1=document.createElement("option")
      opt1.innerText="First Name"
      opt1.value="fname";

      const opt2=document.createElement("option")
      opt2.innerText="City"
      opt2.value="city"

      const opt3=document.createElement("option")
      opt3.innerText="Email"
      opt3.value="email"

      const opt4=document.createElement("option")
      opt4.innerText="Phone"
      opt4.value="phone"

      sele.append(opt1,opt2,opt3,opt4)

   div2.append(sele)
                    
                    const input=document.createElement("input")
                    input.type="text"
                    input.placeholder="search"
                    input.id="search";
                   
      div2.appendChild(input);
                   


    const searchBtn=document.createElement("button")
    searchBtn.innerText="search"
    searchBtn.className="btn"

    searchBtn.addEventListener("click", searchElement) //need to write function



    div2.appendChild(searchBtn)
    div.appendChild(div2);           
    
    const table=document.createElement("table")
    
      table.innerHTML+=`<tr>
                        <th>Fisrt Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                       </tr>`
       data.forEach(datas => {
        
       const newRow=document.createElement("tr");
          newRow.innerHTML+=`<tr>
                              <td>${datas.firstName}</td>
                              <td>${datas.lastName}</td>
                              <td>${datas.address}</td>
                              <td>${datas.city}</td>
                              <td>${datas.state}</td>
                              <td>${datas.email}</td>
                              <td>${datas.phone}</td>
                              <td></tr>`
                              
             const del=document.createElement("button");
             del.innerText="-";
             del.className="btn"
            del.id=datas.custId;
             del.addEventListener("click", deleteElement)//need to implement

           const lastcell=newRow.lastElementChild;
           lastcell.appendChild(del);
           table.appendChild(newRow) ;                 
                                             
       });                     
         main.append(div,table);

    })
    .catch(error => {
      alert(error);
     
    });
}

function deleteElement(e){
  
  const token =localStorage.getItem("token")
  const target=e.target.id;
  fetch(`http://localhost:8080/customer/deleteCustomer?id=${target}`,{
    method: 'DELETE',
    headers: {
      
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Specify content type JSON
    },
    body:null

  })
  .then(data => {
    main.innerHTML="";
    customerDetails();
  })

}

function customerPage(){
 console.log("i am customer page")
  
  listed.style.display="none";

  
  customerAdd.style.display="grid";

 addCustomerBtn.addEventListener("click" , addCustomer);

}

function addCustomer(){

  customerAdd.style.display='none';

  const fname=document.getElementById("fname").value;
  const lname=document.getElementById("lname").value;
  const street=document.getElementById("street").value;
  const address=document.getElementById("address").value;
  const city=document.getElementById("city").value;
  const state=document.getElementById("state").value;
  const email=document.getElementById("email").value;
  const phone=document.getElementById("phone").value;


  const customerDet= {
    firstName : fname,
    lastName :lname,
    street : street,
    address : address,
    city :city,
    state : state,
    email : email,
    phone : phone
  }
  
  const token=localStorage.getItem("token");
  
  fetch('http://localhost:8080/customer/addCustomer',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`  // Specify content type JSON
  },
   body: JSON.stringify(customerDet),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    main.innerHTML="";
    customerDetails();
   // listed.style.display='block';
  })
  .catch(error => {
    alert(error);
    console.error('Error:', error);
  });
}

function searchElement(){

  listed.style.display="none";

  const selectQuery=document.getElementById("cust").value; //option

  const searchQ=document.getElementById("search").value;


  const token=localStorage.getItem("token");

  fetch(`http://localhost:8080/customer/getByQuery?type=${selectQuery}&value=${searchQ}`,{
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  },
  body:null 
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}).then(data => {
  console.log(data);
  console.log("i am data")
  listed.style.display='none'

  const head=document.createElement("h1")
  head.innerText="Search Result";


  const query=document.createElement("table")
  
  query.innerHTML+=`<tr>
  <th>Fisrt Name</th>
  <th>Last Name</th>
  <th>Address</th>
  <th>City</th>
  <th>State</th>
  <th>Email</th>
  <th>Phone</th>
 </tr>`
 query.innerHTML+=`<tr>
 <td>${data.firstName}</td>
 <td>${data.lastName}</td>
 <td>${data.address}</td>
 <td>${data.city}</td>
 <td>${data.state}</td>
 <td>${data.email}</td>
 <td>${data.phone}</td>
 <td></tr>`
 const button=document.createElement("button");
 button.className="btn"
 button.innerText="Close"
 button.addEventListener("click",closingPage);



  response.append(head,query,button);
 // listed.style.display='block';
})
.catch(error => {
  alert(error);
  console.error('Error:', error);
});


  console.log("Search Criteria:", selectQuery);
  console.log("Search Query:", searchQ);

}

function closingPage(){
  response.innerHTML="";
  main.innerHTML="";
  customerDetails();
}
