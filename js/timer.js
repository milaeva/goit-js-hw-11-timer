export default class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.time = targetDate.getTime() - Date.now();
      this.timerId = null;
      this.onTick = onTick;
    }
  
    tick() {
      if(this.secs > 0) {
        this.secs -= 1;
      } else {
        this.stop();
        console.log("BOOM!!! Countdown is over!")
      }
      if(this.secs === 0 && this.mins > 0) {
        this.secs = 59;
        this.mins -= 1;
      }
      if(this.mins === 0 && this.hours > 0) {
        this.mins = 59;
        this.hours -= 1;
      }
      if(this.hours === 0 && this.days > 0) {
        this.hours = 23;
        this.days -= 1;
      }
    }
  
    start() {
      this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
      
      this.timerId = setInterval(() => {
        this.tick();
        this.onTick(this);
      }, 1000);
    }
  
    stop() {
      clearInterval(this.timerId);
    }
  }