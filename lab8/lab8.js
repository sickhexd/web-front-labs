function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let output = '';

    output = 'Дата и время для России: ' + today.toLocaleString('ru-RU') + '<br>';
    output += 'Дата и время для Америки: ' + today.toLocaleString('en-US') + '<br>';
    output += 'Дата и время для Германии: ' + today.toLocaleString('de-DE') + '<br>';
    output += 'Дата и время для Франции: ' + today.toLocaleString('fr-FR') + '<br>';
    output += 'Дата и время для Сербии: ' + today.toLocaleString('sr-SP') + '<br>';
    output += 'Дата и время для Японии: ' + today.toLocaleString('ja-JA');
    out.innerHTML = output;
}

function showMoreDate() {
    let info = document.getElementById('more-date');
    let today = new Date();

    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let year = today.getFullYear();
    let month = months[today.getMonth()];
    let date = today.getDate();
    let day = weekDays[today.getDay()];

    let output = '';
    output += 'Текущий год: ' + year + '<br>';
    output += 'Текущий месяц: ' + month + '<br>';
    output += 'Текущая дата: ' + date + '<br>';
    output += 'День недели: ' + day;

    info.innerHTML = output;
}

function showDayOfWeek() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1; // Месяцы в JS считаются с 0
    let year = document.getElementById('year').value;

    if(day && month >= 0 && year) {
        let date = new Date(year, month, day);
        const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        let dayOfWeek = weekDays[date.getDay()];

        document.getElementById('day-of-week').innerHTML = 'День недели: ' + dayOfWeek;
    } else {
        document.getElementById('day-of-week').innerHTML = 'Пожалуйста, введите корректные значения даты.';
    }
}