const email =document.getElementById('email');
const password_input = document.getElementById('password');

let pattern = /^[a-zA-Z0-9#*_.]{2,}@[a-z]{2,}.com$/;
let pattern2 = /^[a-zA-Z0-9]{6,}$/;
email.onfocus = () =>{
   email.style.outlineColor = "lime";
}
password_input.onfocus = () =>{
   password_input.style.outlineColor = "lime";
}
document.getElementById('submit').addEventListener('click', function(){
   const password = password_input.value;
if(pattern.test(email.value)&& pattern2.test(password)){
   window.location.href = "bank.html";
}else{
   alert("Invalid User");
}

})


// bank 

