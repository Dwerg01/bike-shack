class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements
    this.days = this.querySelector(".days");
    this.hours = this.querySelector(".hours");
    this.minutes = this.querySelector(".minutes");
    this.seconds = this.querySelector(".seconds");

    this.endDateString = this.getAttribute("data-end-date")

    // Set Date/
    // this.endDateString = "May 25, 2026 16:37:52 EST";
    this.endDate = new Date(this.endDateString).getTime();

    // Start timer
    this.timer = setInterval(this.handleTick.bind(this), 1000);
  }

  handleTick() {
    //logic and update elements
    // console.log(this.endDate);

  }
}

customElements.define("countdown-timer", CountDownTimer);
