//jshint esversion:6

const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator ();
const pers1 = new Person ("paolo",0,1)
const pers2 = new Person ("marco",0,1)
const pers3 = new Person ("pepe",5,10)
elevator.update();
// elevator.start();
// elevator.stop();
elevator.floorUp();
elevator.update();
elevator.floorDown();
elevator.update();
