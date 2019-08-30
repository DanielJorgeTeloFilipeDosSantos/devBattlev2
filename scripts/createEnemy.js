
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
    if (this.game.enemies.length < 20){
      this.game.enemies.push(enemy);
    }
  }

  sendtoArray2() {
    this.radius += 90;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.radius, angle);
    if (this.game.enemies.length < 45){
      this.game.enemies.push(enemy);
    }
  }

  sendtoArray3() {
    this.radius += 90;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.radius, angle);
    if (this.game.enemies.length < 60){
      this.game.enemies.push(enemy);
    }
  }

  sendtoArray4() {
    this.radius += 100;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, this.radius, angle);
    if (this.game.enemies.length < 70){
      this.game.enemies.push(enemy);
    }
  }
}