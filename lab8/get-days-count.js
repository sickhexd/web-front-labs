function showDayCount(){
    let answer = document.getElementById('answer');
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    answer.innerHTML = 'Количество дней с даты рождения: ' + daysCount
}

function clearFields() {
    let inputDate = document.querySelector('input[type=date]');
    let answer = document.getElementById('answer');
    inputDate.value = '';
    answer.innerHTML = '';
}