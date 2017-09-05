//jshint esversion:6

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];

  }

  start() {
    this.activateElev = setInterval(() => this.update(), 1000);

  }


  stop() {
    clearInterval(this.activateElev);
  }


  update() {

    // switch (this.direction){
    //   case up :
    //   this.floorUp();
    //   break;
    //   case down :
    //   this.floorDown();
    //   break;
    // }
    this.log();
  }


  _passengersEnter() {
    if(this.floor == this.originFloor){
      this.passenger.push(person);
      this.waitingList.pop();
      this.request.push(person.destinationFloor)
      console.log(`${person.name} enter in the elevator`)
    }
  }


  _passengersLeave() {
    if(this.floor == this.destinationFloor){
      this.passenger.pop();
      console.log(`${person.name}left the elevator`)
    }
  }


  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = "up";
    }
  }


  floorDown() {
    if (this.floor > 0) {
      this.floor--;
      this.direction = "down";
    }

  }


  call(person) {
    console.log(`${person.name}  called at floor ${person.originFloor} going to ${person.destinationFloor}`);
    this.request.push(person.originFloor);
    this.waitingList.push(person);
  }


  log() {
    console.log(`Direction : ${this.direction} | Floor : ${this.floor}`)
  }
}

module.exports = Elevator;
