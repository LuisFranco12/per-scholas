class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  playerAttack(alien, player) {
    let health = player.hull - alien.firepower
    if (Math.random() < alien.accuracy) {
      player.hull -= alien.firepower
      console.log('You have been hit!\n' + 'player Health: ' + health)
      console.log('\n')
    }
  }
  
  alienAttack(player, alien) {
    if (Math.random() < player.accuracy) {
      alien.hull -= player.firepower
      console.log('The enemy took a direct hit!')
    }
  }
}

const ussAssembly = new Ship(20, 5, 0.7)

// pushed all alien objects into array to be used in a for...of loop
const alienArray = []

const alienShip1 = new Ship(3, 2, .6)
alienArray.push(alienShip1)
const alienShip2 = new Ship(4, 3, .7)
alienArray.push(alienShip2)
const alienShip3 = new Ship(5, 4, .8)
alienArray.push(alienShip3)
const alienShip4 = new Ship(6, 3, .7)
alienArray.push(alienShip4)
const alienShip5 = new Ship(3, 4, .6)
alienArray.push(alienShip5)
const alienShip6 = new Ship(3, 2, .6)
alienArray.push(alienShip6)


// game logic
for (let alien of alienArray) {
  // I used a nested while loop
  while (ussAssembly.hull > 0) {
    ussAssembly.playerAttack(alien, ussAssembly);
    if (ussAssembly.hull <= 0) {
      console.log('Game over, you lose')
      break;
    }
    alien.alienAttack(ussAssembly, alien)
    if (alien.hull <= 0) {
      console.log('You win this round!')
      console.log('\n')
      break;
    }
  }
  
// outside the while loop but inside the for loop
  // if player health reaches 0 or below it's game over
  if (ussAssembly.hull <= 0) {
    break;
  } else if (alien === alienArray[5]) {
    // if the player beats the last alien they win
    console.log('player health:'+ ussAssembly.hull + ' \nVictory!!!')
    break
  }
  // player has a choice every round to retreat or not
  let retreat = prompt('Enemy is down but more are coming, will you retreat?')
  if (retreat === 'yes') {
    console.log("There's no shame in retreating.")
    break
  }
}