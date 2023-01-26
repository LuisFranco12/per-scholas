class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

   playerAttack(alien) {
        while(alien.hull > 0 || ussAssembly.hull > 0) {
            if(Math.random() < alien.accuracy) {

                console.log('Miss, player has been hit!')
                ussAssembly.hull -= alien.firepower
                console.log(ussAssembly.hull)
                console.log('\n')
                if(ussAssembly.hull <= 0) {
                    return
                }

            }else {
                console.log('Alien hit!')
                alien.hull -= ussAssembly.firepower
                console.log('\n')
                if(alien.hull <= 0) {
                    console.log('Alien health: 0' )
                    console.log('you win this round')
                    console.log('\n')
                    return
                }
            }
        }
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

alienArray.forEach(alien => {
    ussAssembly.playerAttack(alien);
    if(ussAssembly.hull <= 0) return console.log('you lose')

    if(alien.hull <= 0) return
})
