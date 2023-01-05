class Clock {
   constructor() {
      // 1. Create a Date object.
      this.date = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.h = this.date.getHours();
      this.m = this.date.getMinutes();
      this.s = this.date.getSeconds();
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.
      // while (true) {
      //    date._tick();
      // }
   }

   printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      let stringH = `${this.h}`;
      let stringM = `${this.m}`;
      let stringS = `${this.s}`;
      if (this.h < 10) {
         stringH = `0${this.h}`;
      }
      if (this.m < 10) {
         stringM = `0${this.m}`;
      }
      if (this.s < 10) {
         stringS = `0${this.s}`;
      }
      console.log(stringH + ':' + stringM + ':' + stringS)
   }

   _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
   }
}

const clock = new Clock();