let base_image2 = new Image();
base_image2.src = '../assets/404.svg';


class Enemy {
  constructor(game, base_image2) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    this.placeRandomly();
    this.base_image2 = base_image2
    this.randomRadian = 0;

    this.posx = 0;
    this.posy = 0;

  }

  loadSounds(sounds) {
    for (let name in sounds) {
      const url = sounds[name];
      this.sounds[name] = new Audio(url);
    }
  }

  // converts the random radian saved in randomRadian to a position on the canvas
  radianConverter(distance) {

    // generates a random radian from 0 to 2PI, saves the radian in the randomRadian
    this.randomRadian = Math.random() * 2 * Math.PI; 

    console.log('this.randomRadian',this.randomRadian)

    this.posx = distance * Math.cos(this.randomRadian) +(this.game.canvas.width/3);
    this.posy = distance * Math.sin(this.randomRadian) +(this.game.canvas.height/3) ;

    console.log('posx', this.posx, 'posy', this.posy)
  }


  placeRandomly() {
    this.radianConverter(200)
  }

  paint() {
    const context = this.game.context;


    let base_image2 = new Image();
    base_image2.src = '../assets/404.svg';

    context.drawImage(base_image2, this.posx, this.posy, 100, 100);

    context.restore();
  }
}