
class CreateEnemy {
  constructor(game,resetRadius) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    // this.baseImage = new Image();
    // this.baseImage.src = '../assets/404.svg';
    this.randomRadian = 0;

    this.radius = resetRadius;

    //this.imgArray = ['../assets/404.svg','../assets/bear.svg','../assets/javascript.svg','../assets/maze.svg','../assets/sheep.svg','../assets/typeError.svg']

    // this.randomNumber = 0;
  }
  

  // randomImage(){
  //   this.randomNumber = Math.floor(Math.random() * this.imgArray.length )
  //   console.log(this.imgArray[this.randomNumber])
  //   this.baseImage.src = this.imgArray[this.randomNumber]
  // }

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