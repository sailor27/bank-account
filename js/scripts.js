

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}


//front end
$(document).ready(function() {

  $("form#create").submit(function(event) {
    event.preventDefault();
    var inputName = $("#name").val();
    var firstBalance = parseInt($("#firstdeposit").val());

    var newAccount = new BankAccount (inputName, firstBalance);

    $("#newBalance").text(firstBalance);
    console.log(newAccount);

  });



});
