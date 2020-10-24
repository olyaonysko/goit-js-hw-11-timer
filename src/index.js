import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    if (Date.now() < this.targetDate) {
      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.updateClock(deltaTime);
      }, 1000);
    } else {
      document.querySelector(this.selector).innerHTML = 'Timer is over!';
    }
  }

  updateClock(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      minutes: document.querySelector('[data-value="mins"]'),
      seconds: document.querySelector('[data-value="secs"]'),
    };

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 25, 2020'),
});

timer.start();
