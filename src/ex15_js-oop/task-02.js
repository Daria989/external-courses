class ElectricalAppliances {
    constructor(power) {
        this.power = power;
    }
}

let vacuumCleaner = new ElectricalAppliances(2000);
let washingMachine = new ElectricalAppliances(800);

class KitchenAppliances extends ElectricalAppliances {
    constructor(power, protectionSystem) {
        super(power);
        this.protectionSystem = protectionSystem;
    }
}

let oven = new KitchenAppliances(250, 'child protection');

class Kettles extends KitchenAppliances {
    constructor(power, protectionSystem, volume) {
        super(power, protectionSystem);
        this.volume = volume;
    }
}

let tefal = new Kettles(1500, 'overheat protection', 1.5);
let kitfort = new Kettles(2200, 'overheat protection', 1.7);

class Blenders extends KitchenAppliances {
    constructor(power, protectionSystem) {
        let rotationSpeed = 0;
        super(power, protectionSystem);
    }
    
    setRotationSpeed(value) {
        this.rotationSpeed = value;
        return this.rotationSpeed;
    }
}

let bosh = new Blenders(750, 'overheat protection');
bosh.setRotationSpeed(10000);

let redmond = new Blenders(1300, 'overload protection');

const socket = [vacuumCleaner, oven, kitfort, redmond];

function calcPowerConsumption(devicesInSocket) {
    let sum = 0;
        for (value of devicesInSocket) {
            sum += value.power; 
        }
        
    return sum;
}

calcPowerConsumption(socket);

const room = [vacuumCleaner, washingMachine, oven, tefal, kitfort, bosh, redmond];

function search(roomWithDevices, name) {
    return roomWithDevices[roomWithDevices.indexOf(name)];
}

search(room, oven);
