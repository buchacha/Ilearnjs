// function sayHi() {
//     alert( "Привет" );
// }

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

$(document).ready(() => {

    ask("Вы согласны?", showOk, showCancel);

});




