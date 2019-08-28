
class CreateEnemy {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    this.baseImage = new Image();
    this.baseImage.src = '../assets/404.svg';
    this.randomRadian = 0;
  }


  sendtoArray() {
    const radius = 500;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.baseImage, radius, angle);
    this.game.enemies.push(enemy);
  }
}