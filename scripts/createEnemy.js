
class CreateEnemy {
  constructor(game,resetRadius) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    this.randomRadian = 0;

    this.radius = resetRadius;
  }

  sendtoArray() {
    this.radius += 80;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.radius, angle);
    //this.randomImage();
    if (this.game.enemies.length < 15){
      this.game.enemies.push(enemy);
    }
  }
}