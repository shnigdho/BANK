const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


// deposit btn handler
// const depositBtn = document.getElementById("addDeposit");
// depositBtn.addEventListener("click", function(){
// const depositAmount = document.getElementById("depositAmount").value;
// const depositNumber = parseFloat("depositAmount");

// const currentDeposit = document.getElementById("currentDeposit").innerText;
// const currentDepositNumber = parseFloat("currentDeposit");
// const totalDeposit = depositNumber + currentDepositNumber;
// console.log(totalDeposit);
// })

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");        

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})