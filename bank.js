
// deposit part
const deposit = document.querySelector("#deposit_input");
const withdraw = document.querySelector('#withdraw_input');
const deposit_amount = document.querySelector('#deposit_amount');
const withdraw_amount = document.querySelector('#withdraw_amount');
const total_amount = document.querySelector('#total_amount');

document.getElementById("deposit_btn").addEventListener('click' , function(){
let previousdeposit = parseFloat(deposit_amount.innerText);
let newdeposit = parseFloat(deposit.value);

let totalDeposit = previousdeposit + newdeposit;
deposit_amount.innerText = totalDeposit;
let total = parseFloat(total_amount.innerText);
let totalBalance = totalDeposit + total;
total_amount.innerText = totalBalance;
deposit.value = "";
})

// withdraw part

document.getElementById("withdraw_btn").addEventListener('click' , function(){
    let previouswithdraw = parseFloat(withdraw_amount.innerText);
    let newWithdraw = parseFloat(withdraw.value);
    let total = parseFloat(total_amount.innerText);
    withdraw.value = "";
    if(newWithdraw > total){
        alert("eto tk nai");
        return;
    }
    
    let totalWithdraw = previouswithdraw + newWithdraw;
    withdraw_amount.innerText = totalWithdraw;
    
    let totalBalance =  total - totalWithdraw;
    total_amount.innerText = totalBalance;
    

    })