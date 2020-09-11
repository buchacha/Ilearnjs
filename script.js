function readNumber() {
    let digit;

    do {
        digit = +prompt("Введите число", '');
    } while (!digit)

    return +digit;
}

alert(readNumber())