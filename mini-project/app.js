class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

const ussAssembly = new Ship(20, 5, 0.7)


const alienArray = []

const alienShip1 = new Ship (3 , 2, .6)
alienArray.push(alienShip1)
const alienShip2 = new Ship (4 , 3, .7)
alienArray.push(alienShip2)
const alienShip3 = new Ship (5 , 4, .8)
alienArray.push(alienShip3)
const alienShip4 = new Ship (6 , 3, .7)
alienArray.push(alienShip4)
const alienShip5 = new Ship (3 , 4, .6)
alienArray.push(alienShip5)
const alienShip6 = new Ship (3 , 2, .6)
alienArray.push(alienShip6)


playGame() {
    alienArray.forEach()
}