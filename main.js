
$(document).ready(function () {
  $(':input[type="submit"]').prop("disabled", true);
});

function Log() {
  let x = $("#login").val();
  if (x.length > 6) {
    $("#true").removeClass("b");
    return true;
  } else {
    alert("login should consist at least 6 characters");
  }
}
function Pass() {
  let x = $("#pass1").val();
  if (x.length > 7 && Log()) {
    $("#true1").removeClass("b");
    $("#textpass").removeClass("b");
    $("#pass2").removeClass("b");
    return true;
  } else {
    alert("login should consist at least 6 characters");
  }
}
function Pass1() {
  let x = $("#pass1").val();
  let x1 = $("#pass2").val();
  if (x.length > 7 && x1 == x && Pass()) {
    $("#true2").removeClass("b");
    $(':input[type="submit"]').prop("disabled", false);
  } else {
    alert("Passwords shoud be the same");
    $("#true2").addClass("b");
  }
}
