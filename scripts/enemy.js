class Enemy {
  constructor(game, baseImage, radius, angle) {
    this.game = game;
    this.baseImage = baseImage;
    this.radius = radius;
    this.angle = angle;
    this.speed = 0.1;
    this.speed = 1 + Math.random() * 0.1;

    this.posx = 0;
    this.posy = 0;









  }


  getShoot() {

    if (this.isAlive === false) {
      this.offset_top = 900;
      this.offset_bottom = 900;
    } else {
      this.offset_top = this.posy + 31;
      this.offset_bottom = this.posy + 131;

      // console.log('globalMousePosition2', globalMousePosition)

      if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
        console.log('died')

        this.isAlive = false;
      } else {
        ctx.drawImage(base_image, width / 3, this.posy, width / 4, height / 4);
      }
    }
  }

  paint() {
    const context = this.game.context;

    context.save();

    // let base_image2 = new Image();
    // base_image2.src = '../assets/404.svg';

    const distance = this.radius;
    const angle = this.angle;

    this.posx = distance * Math.cos(angle) + (this.game.canvas.width / 3 + 50);
    this.posy = distance * Math.sin(angle) + (this.game.canvas.height / 3 + 50);

    context.drawImage(this.baseImage, this.posx, this.posy, 100, 100);

    context.restore();
  }

  move() {
    this.radius -= this.speed;
  }
}