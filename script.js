const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');
let display = document.getElementById('display')

let time = 25*60; // 1500 seconds
let timer;

function displayUpdate(){
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    
    secs = (secs<10) ? '0' + secs : secs;
    
    display.innerHTML = `${mins}:${secs}`;
    time--;
  }

  start.addEventListener('click', () =>{
    timer = setInterval(displayUpdate,1000);
    start.disabled = true;
  });
  
  stop.addEventListener('click', () =>{
    clearInterval(timer);
    start.disabled = false;
  });
  
  restart.addEventListener('click', () =>{
    clearInterval(timer);
    start.disabled = false;
    time = 25 * 60;
    displayUpdate();
  });
  
  displayUpdate();
  
  