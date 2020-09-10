// $(document).ready(() => {
//     let sum = 0;

//     while (true) {

//         let value = +prompt("Введите число", '');

//         if (!value) break; // (*)

//         sum += value;

//     }
//     alert( 'Сумма: ' + sum );
// });

$(document).ready(() => {
    for (let i = 0; i < 10; i++) {

        // если true, пропустить оставшуюся часть тела цикла
        if (i % 2 == 0) continue;

        alert(i); // 1, затем 3, 5, 7, 9
    }

});



