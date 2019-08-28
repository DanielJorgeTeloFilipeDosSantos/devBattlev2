
class CreateEnemy {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    this.placeRandomly();
    this.baseImage = new Image();
    this.baseImage.src = '../assets/404.svg';
    this.randomRadian = 0;
  }

  // converts the random radian saved in randomRadian to a position on the canvas
  radianConverter(distance) {
    // generates a random radian from 0 to 2PI, saves the radian in the randomRadian
    // console.log('posx', this.posx, 'posy', this.posy)
  }

  placeRandomly() {
    this.radianConverter(200)
  }

  sendtoArray() {
    this.placeRandomly();
    //this.game.enemies.push(this.createEnemy = new CreateEnemy(this))
    const radius = 500;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.baseImage, radius, angle);
    this.game.enemies.push(enemy);
  }
}