function displayTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();

  document.getElementById('hours').innerHTML = hours;
  document.getElementById('min').innerHTML = min;
  document.getElementById('sec').innerHTML = sec;

}

setInterval(displayTime, 10)