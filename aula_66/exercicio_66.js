var hours = 0;
var minutes = 0;
var seconds = 0;
var controller = false;
var intervalID;

var displayTimer = document.querySelector('.p-display');
var parentDisplay = document.querySelector('.display')
var p = parentDisplay.querySelectorAll('p');
var displayStyle = getComputedStyle(displayTimer);


function formatTimer(hour, minute, second) {
    let h = String(hour).padStart(2, '0');
    let m = String(minute).padStart(2, '0');
    let s = String(second).padStart(2, '0');

    return `${h}:${m}:${s}`
}

function refreshTimer(formatedTimer) {
    displayTimer.innerHTML = formatedTimer;
}

function startTimer() {
    if (!controller) {
        controller = true;
        p[0].style.color = "black";
        intervalID = setInterval(() => {
            increaseTimer();
        }, 1000);
    }
}

function pauseTimer() {
    if (controller) {
        controller = false;
        p[0].style.color = 'red';
        clearInterval(intervalID);
    }
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    controller = false;
    p[0].style.color = "black";
    clearInterval(intervalID);
}

function increaseTimer() {
    if (seconds !== 59) {
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
}

setInterval(() => {
    var formatedTimer = formatTimer(hours, minutes, seconds);
    refreshTimer(formatedTimer);
}, 10);

window.onload = () =>{
    var formatedTimer = formatTimer(hours, minutes, seconds);
    refreshTimer(formatedTimer);
}

// function relogio() {
//     function criaHoraDosSegundos(segundos) {
//       const data = new Date(segundos * 1000);
//       return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'
//       });
//     }
  
//     const relogio = document.querySelector('.relogio');
//     let segundos = 0;
//     let timer;
  
//     function iniciaRelogio() {
//       timer = setInterval(function() {
//         segundos++;
//         relogio.innerHTML = criaHoraDosSegundos(segundos);
//       }, 1000);
//     }
  
//     document.addEventListener('click', function(e) {
//       const el = e.target;
  
//       if (el.classList.contains('zerar')) {
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         relogio.classList.remove('pausado');
//         segundos = 0;
//       }
  
//       if (el.classList.contains('iniciar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciaRelogio();
//       }
  
//       if (el.classList.contains('pausar')) {
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//       }
//     });
//   }
//   relogio();