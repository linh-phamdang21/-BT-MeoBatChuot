let Rat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = "alive";
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    }
    this.getSpeed = function () {
        return this.speed;
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    this.getStatus = function () {
        return this.status;
    }
    this.say = function () {
        console.log("Squeak");
    }
}
const MAX_SPEED = 50;
let Cat = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = MAX_SPEED;
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.getSpeed = function () {
        return this.speed;
    }
    this.catchMouse = function (mouse) {
        if (this.speed > mouse.getSpeed()) {
            return true;
        }
        return false;
    }
    this.eatMouse = function (mouse) {
        if (mouse.status === "alive") {
            if (this.catchMouse(mouse)) {
                this.weight += mouse.getWeight();
                mouse.setWeight(0);
                mouse.setStatus("dead");
                this.showInfo(mouse);
            }
        }
    }
    this.showInfo = function (mouse) {
        document.getElementById("catname").value = this.getName();
        document.getElementById("catweight").value = this.getWeight();
        document.getElementById("catstatus").value = "alive";
        document.getElementById("catspeed").value = this.getSpeed();
        document.getElementById("ratname").value = mouse.getName();
        document.getElementById("ratweight").value = mouse.getWeight();
        document.getElementById("ratstatus").value = mouse.getStatus();
        document.getElementById("ratspeed").value = mouse.getSpeed();
        document.getElementById("catch").value = this.catchMouse(mouse);
    }
}
let cat = new Cat("Tom", 50);
let mouse = new Rat("Jerry", 10, 30);
cat.showInfo(mouse);