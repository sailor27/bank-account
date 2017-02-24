
$(document).ready(function() {

  $("form#accountinfo").submit(function(event) {
    event.preventDefault();
    var userName = $("#username").val();
    var email = $("#email").val();
    var passphrase = $("#passphrase").val();
   $("form#accountinfo").hide();
   $("form#personalinfo").show();

    $("form#personalinfo").submit(function(event) {
      event.preventDefault();
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      var address1 = $("#address1").val();
      var address2 = $("#address2").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip = $("#zip").val();
      var country = $("#country").val();
    $("#thespot").text(firstname);


    });
  });

});
