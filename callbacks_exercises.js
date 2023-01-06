Function.prototype.myBind = function(context) {
   return () => {this.apply(context)}
}

// class Clock {
//    constructor() {
//       // 1. Create a Date object.
//       this.date = new Date();
//       // 2. Store the hours, minutes, and seconds.
//       this.h = this.date.getHours();
//       this.m = this.date.getMinutes();
//       this.s = this.date.getSeconds();
//       // 3. Call printTime.
//       this.printTime();
//       // 4. Schedule the tick at 1 second intervals.
//       // while (true) {
//       const clockTick = this._tick.myBind(this)
  
//       setInterval(clockTick, 1000); 
     
      
//       // };
//    }

//    printTime() {
//       // Format the time in HH:MM:SS
//       // Use console.log to print it.
//       let stringH = `${this.h}`;
//       let stringM = `${this.m}`;
//       let stringS = `${this.s}`;
//       if (this.h < 10) {
//          stringH = `0${this.h}`;
//       }
//       if (this.m < 10) {
//          stringM = `0${this.m}`;
//       }
//       if (this.s < 10) {
//          stringS = `0${this.s}`;
//       }
      
//       console.log(stringH + ':' + stringM + ':' + stringS)
//    }
//
//    _tick() {
//       // 1. Increment the time by one second.
//       this.s += 1;
//       if (this.s > 59) { 
//          this.s = 0;
//          this.m += 1;
//       };
//       if (this.m > 59) {
//          this.m = 0;
//          this.h += 1;
//       };
//       if (this.h > 23) {
//          this.h = 0;
//       };
//       // 2. Call printTime.
 
//       this.printTime();
//    }
// }

// const clock = new Clock();



// const readline = require("readline");
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });


// const addNumbers = function(sum, numsLeft, completionCallback) {
//    if (numsLeft > 0) {
//       rl.question ('Enter a number ', answer => {
//          sum += parseInt(answer);
//          console.log(`The sum is now ${sum}`)
//          addNumbers(sum, numsLeft - 1, completionCallback)
//       })
//    }
//    else {
//       completionCallback(sum);
//       rl.close();
//    };
  
// }; 

// addNumbers(0, 3, sum => console.log(`Total Sum is: ${sum}`));



// Function.prototype.myBind = (context) => {
//    this = context;
// }


class Lamp {
   constructor() {
      this.name = "a lamp";
   }
}

const turnOn = function () {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
