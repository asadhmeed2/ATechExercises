function Bank (){
   let _money =500;


   function depositCash (cash){
        _money += cash
   }

   function checkBalance (){
        console.log(_money);
   }


    return {
        deposit : depositCash ,
        showBalance : checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950