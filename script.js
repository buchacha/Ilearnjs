// $(document).ready(() => {
//     let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

//     if (year < 2015) {
//         alert( 'Это слишком рано...' );
//     } else if (year > 2015) {
//         alert( 'Это поздновато' );
//     } else {
//         alert( 'Верно!' );
//     }
// });

$(document).ready(() => {
    let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

    let text = (year < 2015) ? 'Это слишком рано...' 
    : (year > 2015) ? 'Это поздновато' 
    : 'Верно!';

    alert(text)
});
