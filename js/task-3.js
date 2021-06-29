import CountdownTimer from './timer.js';
  
  const newTimer = new CountdownTimer(
    {
      selector: '#timer-1', 
    targetDate: new Date('Jul 17, 2021'),
        onTick: refreshTimerMarkup,
  });
  
  const timerEl = document.querySelector(newTimer.selector);
  const daysEl = timerEl.querySelector('[data-value="days"]');
  const hoursEl = timerEl.querySelector('[data-value="hours"]');
  const minsEl = timerEl.querySelector('[data-value="mins"]');
  const secsEl = timerEl.querySelector('[data-value="secs"]');
  
  function refreshTimerMarkup(timer) {
    const { days, hours, mins, secs } = timer;
    daysEl.textContent = days;
    hoursEl.textContent = padStartZeroToVar(hours);
    minsEl.textContent = padStartZeroToVar(mins);
    secsEl.textContent = padStartZeroToVar(secs);
  }
  
  function padStartZeroToVar(value) {
    return value < 10 ? '0' + value : value;
  }
  
  newTimer.start();