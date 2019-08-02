$(document).ready (function() {

/* HIDE AND VIEW TODO  -------*/

function displayTodo() {
  $("input").slideToggle(mils);
  if ( mils === 300 ) { mils = 500; }
  else { mils = 300; }
}
  var mils = 300;
$("img[src*='plus']").on("click", displayTodo);

// end hide and view todo

// DELETE SIDE BUTTON HOVER ------>

function listFunction() {
  function deleteList(event) {
    $(this).parent().remove()
  }
  $(".delete").on("click", deleteList);

} listFunction();

  // Add Cross Style when clicked ------->

  function cross() {
    $(this).children("p").toggleClass("crossed");
  }
  $("section > div").on("click", cross);

  function crossFirst() {
    $("section > div:first").on("click", cross);
  }


// Append new Todo ------>

var emptyInput;
function inputCheck() {
  if ( $("input").val() === "" ) {
    emptyInput = true;
  } else {
    emptyInput = false;
  }
}

function prependList(key) {
  inputCheck();
  if ( key.which === 13 && !emptyInput ) {
    $("section").prepend(
      `
        <div>
        <div class="delete">
        <img src="trash.png" alter="D">
        </div>
        <p>${$("input").val()}</p>
        </div>
      `
     );
     $("input").val("");
      crossFirst();
  }
  listFunction();

}
$("input").on("keypress", prependList);


}); // end doc ready
