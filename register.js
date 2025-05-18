
let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let urlApi = "https://6823484465ba058033961816.mockapi.io"
let Butsubmit =document.getElementById("submit")
let errormassege =document.getElementById("error-massege")

Butsubmit.addEventListener('click',  (e)=>{
e.preventDefault()
    let user={
     username:username.value,
     password:password.value,
     email: email.value
    }

check(user)
})

function check(user){

 if (user.username.length > 4) {
return alert("must be more then 4 charter")

    }

    if(password.value.length){
      return  alert("password must be more than 6")
        
    }

fetch(`${urlApi}/auth`, {
  method: 'POST',
  body: JSON.stringify({
 user
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => 
window.location.href="./login.html"
    );
}