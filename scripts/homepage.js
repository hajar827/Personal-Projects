$("#order").on("submit", function() {
  var formValid = true;

  if( $("#name").prop("validity").valid ) {

  $("#nameError").addClass("hidden");

} else {

  $("#nameError").removeClass('hidden');

  formValid = false;
}

    if( $("box-email").prop("validity").valid ) {

    $("#emailError").addClass("hidden");

    } else {

  $("#emailError").removeClass('hidden');

  formValid = false;
}

    if( $("tickets").prop("validity").valid ) {

    $("#ticketsError").addClass("hidden");


    } else {

  $("#ticketsError").removeClass('hidden');

  formValid = false;
}
  return formValid;
});

/*
When user submits form "On Form Submit snippet"

if name is valid ("check validity" snippet)
hide name feedback
else
show name feedback

if email is valid ("check component validilty" snippet)
hide email feedback
else
show feedback

if numtickets component is valid ("check component validity" snippet)
hide tickets feedback
else
show tickets feedback
if the validility is fine send form to server submit snippet
*/
