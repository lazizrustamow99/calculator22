var name = prompt('Введите своё имя!')
var year = prompt('Какого вы года рождения?')
alert('Вам точно '  + (2020 - year) + ' лет?');
alert('Имейте ввиду, что ваши данные сохранятся у нас в Базе Данных');
function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    var elimination = document.form.textview.value;
    document.form.textview.value = elimination.substring(0,elimination.length-1);
}
function equal() {
    var elimination = document.form.textview.value;
    if(elimination) {
        document.form.textview.value = eval(elimination);
    }
}