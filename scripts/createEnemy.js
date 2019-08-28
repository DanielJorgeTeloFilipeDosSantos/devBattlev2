
class CreateEnemy {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    // this.baseImage = new Image();
    // this.baseImage.src = '../assets/404.svg';
    this.randomRadian = 0;

    //this.imgArray = ['../assets/404.svg','../assets/bear.svg','../assets/javascript.svg','../assets/maze.svg','../assets/sheep.svg','../assets/typeError.svg']

    // this.randomNumber = 0;
  }
  

  // randomImage(){
  //   this.randomNumber = Math.floor(Math.random() * this.imgArray.length )
  //   console.log(this.imgArray[this.randomNumber])
  //   this.baseImage.src = this.imgArray[this.randomNumber]
  // }

  sendtoArray() {
    const radius = 500;
    const angle = Math.random() * 2 * Math.PI;
    const enemy = new Enemy(this.game, radius, angle);
    //this.randomImage();
    if (this.game.enemies.length < 15){

      this.game.enemies.push(enemy);
    }
  }
}