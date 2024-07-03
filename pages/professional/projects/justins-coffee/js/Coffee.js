class Coffee {
  constructor(startDate, cupsPerDay) {
    this.startDate = startDate;
    this.cupsPerDay = cupsPerDay;
  }

  lifetimeCupsOfCoffee() {
    let currentTime = new Date();
    return Math.round(
      (currentTime.getTime() - this.startDate.getTime()) *
        1.15741e-8 *
        this.cupsPerDay
    );
  }
}

const justinCoffee = new Coffee(new Date(2012, 6), 3);
