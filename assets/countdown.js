class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements
    this.daysblock = this.querySelector(".days");
    this.hoursblock = this.querySelector(".hours");
    this.minutesblock = this.querySelector(".minutes");
    this.secondsblock = this.querySelector(".seconds");

    this.endDateString = this.getAttribute("data-end-date")

    this.countDownText = this.querySelector(".countdown-text");
    // Set Date/
    // this.endDateString = "May 25, 2026 16:37:52 EST";
    // this.dateInput = thisquey.querySelector('[data-end-date]');
    this.endDateString = this.querySelector('[data-end-date]').getAttribute('data-end-date');
    this.endDate = new Date(this.endDateString).getTime();

    // Start timer
    this.timer = setInterval(this.handleTick.bind(this), 1000);
  }

  handleTick() {
      //logic and update elements
    this.now = new Date().getTime();
    this.timeleft = this.endDate - this.now;

    if(this.timeleft < 0) {
        this.countDownText.innerText = "THE SALE HAS ENDED!!!";
        clearInterval(this.timer);
        return;
    }

    this.msInDay = 1000 * 60 * 60 * 24;
    this.msInHour = 1000 * 60 * 60;
    this.msInMinute = 1000 * 60;

    this.days = Math.floor(this.timeleft / this.msInDay);
    this.hours = Math.floor((this.timeleft % this.msInDay) / this.msInHour);
    this.minutes = Math.floor((this.timeleft % this.msInHour) / this.msInMinute);
    this.seconds = Math.floor((this.timeleft % this.msInMinute) / 1000);
    
    this.daysblock.innerHTML = this.days + "d ";
    this.hoursblock.innerHTML = this.hours + "h ";
    this.minutesblock.innerHTML = this.minutes + "m ";
    this.secondsblock.innerHTML = this.seconds + "s";
    
  }
}
customElements.define("countdown-timer", CountDownTimer);
