// $(document).ready(() => {

//     browser=prompt("Какой у вас браузер?")

//     if(browser == 'Edge') {
//         alert("You've got the Edge!");
//     } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//         alert( 'Okay we support these browsers too' );
//     } else {
//         alert( 'We hope that this page looks ok!' );
//     }

// });

function showPrimes(n=5) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

$(document).ready(() => {

    n=prompt("Введите число n:", '');
    showPrimes(9);

});




