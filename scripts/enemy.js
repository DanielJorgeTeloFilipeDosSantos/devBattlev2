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


    this.offset_left = this.posx + 31;
    this.offset_right = this.posx + 131;
    this.offset_top = this.posy + 31;
    this.offset_bottom = this.posy + 131;

    this.isAlive = true;

    this.globalMousePosition = game.globalMousePosition;

  }


  getShoot() {

    if (this.isAlive === false) {
      // this.offset_top = 900;
      // this.offset_bottom = 900;
    } else {
      this.offset_top = this.posy + 50;
      this.offset_bottom = this.posy + 100;

      this.offset_left = this.posx + 0;
      this.offset_right = this.posx + 50;

      // console.log('globalMousePosition2', globalMousePosition)

      if (this.globalMousePosition.y >= this.offset_top && this.globalMousePosition.y <= this.offset_bottom && this.globalMousePosition.x >= this.offset_left && this.globalMousePosition.x <= this.offset_right) {
        console.log('died')

        this.isAlive = false;
      } else {
        this.paint();
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