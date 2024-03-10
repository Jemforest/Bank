document.getElementById('btn-deposit').addEventListener('click', function(){

    // Deposit Field cash add

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    depositField.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('Please enter a number.')
        return;
    }
    else{
        if(newDepositAmount > 0){
            const currentDepositTotal =  previousDepositTotal + newDepositAmount;
            depositTotalElement.innerText = currentDepositTotal;

            const balanceTotalElement = document.getElementById('total-amount');
            const previousTotalAmountString = balanceTotalElement.innerText;
            const previousTotalAmount = parseFloat(previousTotalAmountString);

            const currentTotalAmount = previousTotalAmount + newDepositAmount;
            balanceTotalElement.innerText = currentTotalAmount; 
        }
        else{
            alert('Wrong Input');
        }
    }

    

})

document.getElementById('btn-withdraw').addEventListener('click', function(){

    //Withdraw field cash out

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    const totalBalance = document.getElementById('total-amount');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceElement = parseFloat(totalBalanceString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please enter a number!!!');
        return;
    }
    else{
        if(totalBalanceElement > 0 && totalBalanceElement  >= newWithdrawAmount && newWithdrawAmount > 0){
            const withdrawTotalElement = document.getElementById('withdraw-total');
            const previousWithdrawTotalString = withdrawTotalElement.innerText;
            const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
            const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
            withdrawTotalElement.innerText = currentWithdrawTotal;
    
            const balanceTotalElementNew = document.getElementById('total-amount');
            const previousTotalAmountStringNew = balanceTotalElementNew.innerText;
            const previousTotalAmountNew = parseFloat(previousTotalAmountStringNew);
    
            const currentTotalAmountNew = previousTotalAmountNew - newWithdrawAmount;
            balanceTotalElementNew.innerText = currentTotalAmountNew;   
            
        }
        else{
            alert('Insufficient Balance or Wrong Input')
        }
    }
})

