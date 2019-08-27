
class Enemy {
  constructor(game, base_image2, posx,posy) {
    this.game = game;
    this.base_image2 = base_image2
    this.randomRadian = 0;

    this.posx = posx;
    this.posy = posy;

  }

  paint() {
    const context = this.game.context;


    let base_image2 = new Image();
    base_image2.src = '../assets/404.svg';

    context.drawImage(base_image2, this.posx, this.posy, 100, 100);

    context.restore();
  }
}