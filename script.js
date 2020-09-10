$(document).ready(() => {
    console.log( "ready!" );
    result = prompt('Имя: ', ['hello']);
    let isBoss = confirm("Ты здесь главный?");
    alert("Hello " + result + "Boss: " + isBoss);
});
