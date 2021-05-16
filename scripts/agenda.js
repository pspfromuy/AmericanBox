const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  /*for (var i = 0; i < monthDays.children.length; i++){
    var child = monthDays.children[i];
    monthDays.children[i].addEventListener("click", function(event) {
      console.log(event.target.innerHTML);
    });
  }*/
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

var agendamiento = [];

document.querySelector(".days").addEventListener("click", (event) => {
  console.log('event', event);
  console.log('event', event.target.textContent);
  var nombre= prompt("Please enter your name", nombre);
  var d = selectedDate(event.target.textContent);
  function Agenda(fecha, nombre, hora) {
    this.fecha = fecha;
    this.nombre = nombre;
    this.hora = hora;
  }
  var agenda1 = new Agenda (d,nombre,'18:00');
  alert("Se agendo correctamente!");
  agendamiento.push(agenda1);
  console.log(agendamiento);
  
});

renderCalendar();

function selectedDate(date){
  var selectedMonth = document.querySelector(".date h1").innerHTML;
  var selectedDate = document.getElementsByClassName("days");
  console.log(selectedDate);
  console.log(selectedMonth);
  console.log('Selecciono el día: ', date);
  console.log('Selecciono el mes: ', selectedMonth);
  document.querySelector(".agendamiento span").innerHTML = date;
  return date;
}










