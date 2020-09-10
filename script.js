$(document).ready(() => {
    let name = prompt('Кто там?', '');
    if (name == 'Админ') {
        let pwd = prompt('Пароль?', '');
        if (pwd == 'Я Главный')
            alert('Здравствуйте!');
        else if (pwd == null)
            alert('Отменено');
        else
            alert('Неверный пароль');
    }
    else if (name == null)
            alert('Отменено');
    else
        alert('Я вас не знаю');
});


