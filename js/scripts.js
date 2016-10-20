function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.increaseBalance = function(deposit) {
  this.balance +=  deposit ;
}

BankAccount.prototype.decreaseBalance = function(withdrawal) {
  this.balance -= withdrawal ;
}



//front end
$(document).ready(function() {

//function to create original account with starting balance
  $("form#create").submit(function(event) {
    event.preventDefault();
    var inputName = $("#name").val();
    var firstBalance = parseInt($("#firstdeposit").val());
    var newAccount = new BankAccount (inputName, firstBalance);
   $("#newBalance").text(newAccount.balance);

//function to deposit to increase the account balance
    $("form#modify").submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($("#deposit").val());
      var withdrawal = parseInt($("#withdrawal").val());

      if (isNaN(withdrawal)) {
        $("#depositAmt").text(deposit);
        newAccount.increaseBalance (deposit);
        $("#newBalance").text(newAccount.balance);

      } else {$("#withdrawalAmt").text(withdrawal);
      newAccount.decreaseBalance(withdrawal);
      $("#newBalance").text(newAccount.balance);
      }

    });
  });

});
