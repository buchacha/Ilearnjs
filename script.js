function Accumulator(value) {
    this.value = value

    this.read = function() {
        this.value += +prompt('Введите значение', 0)
    }

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений