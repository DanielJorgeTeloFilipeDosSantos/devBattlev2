class Enemy {
  constructor(game, radius, angle) {
    this.game = game;
    this.radius = radius;
    this.angle = angle;
    this.speed = 0.1;
    this.speed = 1 + Math.random() * 0.1;

    this.posx = 100;
    this.posy = 100;


    this.offset_left = this.posx;
    this.offset_right = this.posx + 100;
    this.offset_top = this.posy;
    this.offset_bottom = this.posy + 100;

    this.isAlive = true;

    this.globalMousePosition = game.globalMousePosition;

     this.imgArray = ['../assets/404.svg','../assets/bear.svg','../assets/javascript.svg','../assets/sheep.svg','../assets/typeError.svg']
     this.baseImage = new Image();
     this.baseImage.src = '../assets/404.svg';
     this.randomNumber = 0;
     this.isItRandomImage = false;

  }


  getShoot() {

    if (this.isAlive === false) {
    } else {
      this.offset_top = this.posy + 22;
      this.offset_bottom = this.posy + 85;

      this.offset_left = this.posx + 30;
      this.offset_right = this.posx + 67;

      if (this.globalMousePosition.y >= this.offset_top && this.globalMousePosition.y <= this.offset_bottom && this.globalMousePosition.x >= this.offset_left && this.globalMousePosition.x <= this.offset_right) {
        console.log('died')
        this.radius = 3000;
        this.game.numberOfEnemiesKilled +=1;
        console.log(this.game.numberOfEnemiesKilled)

        this.isAlive = false;
      } else {
        this.paint();
      }
    }
  }

   randomImage(){
     if(this.isItRandomImage === false){
      this.randomNumber = Math.floor(Math.random() * this.imgArray.length )
      console.log(this.imgArray[this.randomNumber])
      this.baseImage.src = this.imgArray[this.randomNumber]
      this.isItRandomImage = true;
     }

   }

  paint() {

    this.randomImage();

    const context = this.game.context;

    context.save();
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

   killDev(){
     if(this.radius >= 0 && this.radius <= 20){
       this.game.devAlive = false;
       this.game.enemies = [];
     } 
  }
}