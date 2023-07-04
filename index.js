let name = prompt('Как тебя зовут?');
alert(`Привет, ${name}! Давай считать на калькуляторе :)`);

function getSum(){
    let sum1 = prompt('Первое слагаемое');
    let sum2 = prompt('Второе слагаемое');
    sum1 = Number(sum1);
    sum2 = Number(sum2);
    alert (`${sum1} прибавить ${sum2} будет ${sum1 + sum2}`);
}

function getDiff(){
    let diff1 = prompt('Уменьшаемое')
    let diff2 = prompt('Вычитаемое')
    alert (`Из ${diff1} вычесть ${diff2} будет ${diff1 - diff2}`);
}

function getDiv() {
    let div1 = prompt('Делимое');
    let div2 = prompt('Делитель');
        if (div2 === "0") {
        alert("На ноль делить нельзя");
        } 
        else {
        alert(`${div1} разделить на ${div2} будет ${div1 / div2}`);
        }
}

function getMult(){
    let mult1 = prompt('Первый множитель')
    let mult2 = prompt('Второй множитель')
    alert (`${mult1} умножить на ${mult2} будет ${mult1 * mult2}`);
}