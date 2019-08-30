class Enemy {
  constructor(game, radius, angle) {
    this.game = game;
    this.radius = radius;
    this.angle = angle;
    this.speed = 0.2;
    this.speed = 1 + Math.random() * 0.2;
    this.speed2 = 0.7;
    this.speed2 = 1.3 + Math.random() * 0.7;
    this.speed3 = 0.9;
    this.speed3 = 1.6 + Math.random() * 0.9;

    this.speed4 = 1.4;
    this.speed4 = 1.9 + Math.random() * 1.4;
    

    this.posx = 100;
    this.posy = 100;


    this.offset_left = this.posx;
    this.offset_right = this.posx + 100;
    this.offset_top = this.posy;
    this.offset_bottom = this.posy + 100;

    this.isAlive = true;

    this.globalMousePosition = game.globalMousePosition;

     this.imgArray = ['../assets/404.svg','../assets/bear.svg','../assets/javascript.svg','../assets/sheep.svg','../assets/typeError.svg']
     this.imgArray2 = ['../assets/cube.svg','../assets/dna.svg','../assets/drone.svg','../assets/globe.svg','../assets/lock.svg']
     this.imgArray3 = ['../assets/1.svg','../assets/2.svg','../assets/3.svg','../assets/1.svg','../assets/5.svg']
     this.imgArray4 = ['../assets/1.svg','../assets/2.svg','../assets/3.svg','../assets/1.svg','../assets/5.svg','../assets/bear.svg','../assets/javascript.svg','../assets/sheep.svg','../assets/lock.svg','../assets/globe.svg','../assets/cube.svg']
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
        this.radius = 500000;
        this.game.numberOfEnemiesKilled +=1;
        this.isAlive = false;
        console.log(this.game.numberOfEnemiesKilled)
        console.log(this.isAlive)
        console.log(this.game.enemies)
        console.log('getShoot1')
      } else {
        this.paint();
      }
    }
  }

  getShoot2() {

    if (this.isAlive === false) {
    } else {
      this.offset_top = this.posy + 22;
      this.offset_bottom = this.posy + 85;

      this.offset_left = this.posx + 30;
      this.offset_right = this.posx + 67;

      if (this.globalMousePosition.y >= this.offset_top && this.globalMousePosition.y <= this.offset_bottom && this.globalMousePosition.x >= this.offset_left && this.globalMousePosition.x <= this.offset_right) {
        this.radius = 500000;
        this.game.numberOfEnemiesKilled +=1;
        this.isAlive = false;
        console.log(this.game.numberOfEnemiesKilled)
        console.log(this.isAlive)
        console.log(this.game.enemies)
        console.log('getShoot2')
      } else {
        this.paint2();
      }
    }
  }

  getShoot3() {

    if (this.isAlive === false) {
    } else {
      this.offset_top = this.posy + 22;
      this.offset_bottom = this.posy + 85;

      this.offset_left = this.posx + 30;
      this.offset_right = this.posx + 67;

      if (this.globalMousePosition.y >= this.offset_top && this.globalMousePosition.y <= this.offset_bottom && this.globalMousePosition.x >= this.offset_left && this.globalMousePosition.x <= this.offset_right) {
        this.radius = 500000;
        this.game.numberOfEnemiesKilled +=1;
        this.isAlive = false;
        console.log(this.game.numberOfEnemiesKilled)
        console.log(this.isAlive)
        console.log(this.game.enemies)
        console.log('getShoot3')
      } else {
        this.paint3();
      }
    }
  }

  getShoot4() {

    if (this.isAlive === false) {
    } else {
      this.offset_top = this.posy + 22;
      this.offset_bottom = this.posy + 85;

      this.offset_left = this.posx + 30;
      this.offset_right = this.posx + 67;

      if (this.globalMousePosition.y >= this.offset_top && this.globalMousePosition.y <= this.offset_bottom && this.globalMousePosition.x >= this.offset_left && this.globalMousePosition.x <= this.offset_right) {
        this.radius = 500000;
        this.game.numberOfEnemiesKilled +=1;
        this.isAlive = false;
        console.log(this.game.numberOfEnemiesKilled)
        console.log(this.isAlive)
        console.log(this.game.enemies)
        console.log('getShoot3')
      } else {
        this.paint4();
      }
    }
  }

   randomImage(){
     if(this.isItRandomImage === false){
      this.randomNumber = Math.floor(Math.random() * this.imgArray.length )
      this.baseImage.src = this.imgArray[this.randomNumber]
      this.isItRandomImage = true;
     }
   }

   randomImage2(){
    if(this.isItRandomImage === false){
     this.randomNumber = Math.floor(Math.random() * this.imgArray2.length )
     this.baseImage.src = this.imgArray2[this.randomNumber]
     this.isItRandomImage = true;
    }
  }

  randomImage3(){
    if(this.isItRandomImage === false){
     this.randomNumber = Math.floor(Math.random() * this.imgArray3.length )
     this.baseImage.src = this.imgArray3[this.randomNumber]
     this.isItRandomImage = true;
    }
  }

  randomImage4(){
    if(this.isItRandomImage === false){
     this.randomNumber = Math.floor(Math.random() * this.imgArray4.length )
     this.baseImage.src = this.imgArray4[this.randomNumber]
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

  paint2() {

    this.randomImage2();

    const context = this.game.context;

    context.save();
    const distance = this.radius -200;
    const angle = this.angle;

    this.posx = distance * Math.cos(angle) + (this.game.canvas.width / 3 + 50);
    this.posy = distance * Math.sin(angle) + (this.game.canvas.height / 3 + 50);

    context.drawImage(this.baseImage, this.posx, this.posy, 100, 100);
    context.restore();
  }

  paint3() {

    this.randomImage3();

    const context = this.game.context;

    context.save();
    const distance = this.radius;
    const angle = this.angle;

    this.posx = distance * Math.cos(angle) + (this.game.canvas.width / 3 + 50);
    this.posy = distance * Math.sin(angle) + (this.game.canvas.height / 3 + 50);

    context.drawImage(this.baseImage, this.posx, this.posy, 100, 100);
    context.restore();
  }

  paint4() {

    this.randomImage4();

    const context = this.game.context;

    context.save();
    const distance = this.radius;
    const angle = this.angle;

    this.posx = distance * Math.cos(angle) + (this.game.canvas.width / 3 + 50);
    this.posy = distance * Math.sin(angle) + (this.game.canvas.height / 3 + 50);

    context.drawImage(this.baseImage, this.posx, this.posy, 100, 100);
    context.restore();
    console.log('paint4')
  }

  move() {
    this.radius -= this.speed;
  }

  move2() {
    this.radius -= this.speed2;
  }

  move3() {
    this.radius -= this.speed3;
  }

  move4() {
    this.radius -= this.speed4;
  }

   killDev(){
     if(this.radius >= 0 && this.radius <= 20){
       this.game.devAlive = false;
       this.game.enemies = [];
       this.game.numberOfEnemiesKilled = 0;
        console.log(this.game.numberOfEnemiesKilled)
        console.log(this.isAlive)
        console.log(this.game.enemies)
        console.log('killDev')
        console.log(this.radius)
     } 
  }
}