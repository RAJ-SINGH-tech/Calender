const mEl = document.querySelector('.date h1'); 
const dEl = document.querySelector('.date p'); 
const dateEl = document.querySelector('.days');
const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay();

const mIndx = new Date().getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

mEl.textContent = months[mIndx];
dEl.textContent = new Date().toDateString();

let days = '';

for (let index = 0; index < firstDay; index++) {
    days += `<div class="empty"></div>`;
}

for (let index = 1; index <= lastDay; index++){
    if(index === new Date().getDate()){
        days += `<div class="today">${index}</div>`;
    }else{
        days += `<div>${index}</div>`;
    }
}

dateEl.innerHTML = days;

