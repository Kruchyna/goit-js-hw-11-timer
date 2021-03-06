/*import refs from '../js/refs.js';
const { startBtn, stopBtn, clearBtn, dataDays, dataHours, dataMins, dataSecs } = refs;


export default  class CountdownTimer {
    constructor({ selector, targetDate}, markup) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.intId = null;
        this.deltaTime = 0;
        this.markup = markup;
        
    }
    start() {
        console.log('Go')
        this.intId = setInterval(() => {
            let currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime
            const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
            this.insertValue(days, hours, mins, secs)

        }, 1000)
    };
    stop() {
        clearInterval(this.intId);
    }

    pad(value) {
        return String(value).padStart(2, '0')

    }
    insertValue(d, h, m, s) {
        const { dataDays, dataHours, dataMins, dataSecs } = this.markup;
        dataDays.textContent = d;
        dataHours.textContent = h;
        dataMins.textContent = m;
        dataSecs.textContent = s;
    }

    clearMarcup() {
        const { dataDays, dataHours, dataMins, dataSecs } = this.markup;
         defaultTimer()
    }
}

function defaultTimer() {
    dataDays.textContent = '00';
    dataHours.textContent = '00';
    dataMins.textContent = '00';
    dataSecs.textContent = '00';
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 1, 2021'),

}, { dataDays, dataHours, dataMins, dataSecs });

timer.start()

clearBtn.addEventListener('click', onClickClearBtn);
stopBtn.addEventListener('click', onClickStopBtn);
startBtn.addEventListener('click', onClickStartBtn);


function onClickStartBtn(evt) {
    if (evt.target) {
        startBtn.setAttribute("disabled", "disabled");
        clearBtn.classList.remove('is-hiden');
        timer.start();

    }
}
function onClickStopBtn(evt) {
    if (evt.target) {
        clearBtn.classList.add('is-hiden');
        startBtn.removeAttribute("disabled", "disabled");
        timer.stop();
    }
}

function onClickClearBtn(evt) {
    if (evt.target) {
        timer.stop();
        timer.clearMarcup();
        clearBtn.classList.toggle('is-hiden');
    }

};*/

import refs from '../js/refs.js';
const {dataDays, dataHours, dataMins, dataSecs } = refs;


export default  
class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.init();
  
      this.days = document.querySelector('[data-value = "days"]');
      this.hours = document.querySelector('[data-value = "hours"]');
      this.mins = document.querySelector('[data-value = "mins"]');
      this.secs = document.querySelector('[data-value = "secs"]');
    }
  
    init() {
      setInterval(() => {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;
        this.changeTimer(this.getTimeComponents(time));
      }, 1000);
    }
  
    pad(value) {
      return String(value).padStart(2, "0");
    }
  
    getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }
  
    changeTimer({ days, hours, mins, secs }) {
      this.days.textContent = `${days}`;
      this.hours.textContent = `${hours}`;
      this.mins.textContent = `${mins}`;
      this.secs.textContent = `${secs}`;
    }
  }
  
  const Countdown = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jan 1, 2022"),
  });