
/*Создайте HTML-страницу, пусть на ней будет заголовок "Температура в разных городах"
Создайте массив городов, например cities */
const cities = [Москва, Санкт-Петербург, Новосибирск];
/*Создайте пустой массив, который будет хранить температуры для каждого города */
const temperature = [];
/* Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию prompt() или другие способы ввода данных пользователем */
for (i = 0; i <= cities.length; i++){
    const temp = prompt(`Введите темпереатуру для города ${cities[i]}:`);
    temperature.pus(Number(temp));
}
/*Создайте список, в котором будет отображаться информация о каждом городе и его температуре. Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру. */
const moscowElement = document.querySelector('.moscow');
moscowElement.textContent = temperature[0];
const spbElement = document.querySelector('.spb');
spbElement.textContent = temperature [1];

const novosibElement = document.querySelector('.novosib');
novosibElement.textContent = temperature [2];

/*Найдите максимальную и минимальную температуру из массива с температурами. Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно. */

let maxTemp = - 40;
let minTemp = +55;

for (let i= 0; i < temperature.length; i ++){
    if (temperature[i] > maxTemp){
        maxTemp = temperature[i];
    }
    if (temperature[i] < minTemp){
        minTemp = temperature[i]
    }
}
/* Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран */
const maxTempElement = document.getElementById('max-temp');
maxTempElement.textContent = maxTemp;

const minTempElement = document.getElementById('min-temp');
minTempElement.textContent = minTemp;