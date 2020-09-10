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

$(document).ready(() => {

    browser=prompt("Какой у вас браузер?")

    switch (browser){
        case 'Edge' :
            alert("You've got the Edge!");
            alert( 'Hmm...' );
            break;
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;
        default:
            alert( 'We hope that this page looks ok!' );

    }

});




