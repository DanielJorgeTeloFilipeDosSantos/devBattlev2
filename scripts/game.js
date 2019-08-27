const SOUNDS = {
    backgroundMusic: "https://ia802908.us.archive.org/0/items/mythium/JLS_ATI.mp3",
    eatFood: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/chewing.mp3",
    congratulations: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/happykids.mp3",
    lost: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/HONK.wav"
};

let base_image = new Image();
base_image.src = '../assets/developer.svg';

let base_image3 = new Image();
base_image3.src = '../assets/typeError.svg';

let base_image4 = new Image();
base_image4.src = '../assets/bear.svg';

let base_image5 = new Image();
base_image5.src = '../assets/sheep.svg';

let base_image6 = new Image();
base_image6.src = '../assets/javascript.svg';

let base_image7 = new Image();
base_image7.src = '../assets/inicial.svg';

let base_image8 = new Image();
base_image8.src = '../assets/desk.svg';

let base_image9 = new Image();
base_image9.src = '../assets/flag1.svg';

let base_image10 = new Image();
base_image10.src = '../assets/flag2.svg';

let base_image11 = new Image();
base_image11.src = '../assets/flag3.svg';

let base_image12 = new Image();
base_image12.src = '../assets/flag4.svg';


class Game {
    constructor(canvas) {
        // Bind the canvas and the context to the game object
        // This will allow it to access both from any other class
        // that owns a reference to the game object
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        // Constants
        this.SPEED = 300;
        this.GRID_SIZE = 10;


        //enemies array ----------------------------------------
        this.enemies = [];
        //enemies array ----------------------------------------
    }

    eatFood() {
        this.sound.play('eatFood', {
            volume: 1
        });


        this.enemy = new Enemy(this);
        this.score++;
    }

    reset() {
        console.log('this',this)
        this.createEnemy = new CreateEnemy(this);
        this.enemy = new Enemy(this);
        this.timer = 0;
        this.score = 0;
    }

    start() {
        this.reset();
        this.loop(0);
    }

    loose() {
        this.sound.play('lost', {
            volume: 1
        });
        this.reset();
    }

    loop(timestamp) {
        if (this.timer < timestamp - this.SPEED) {
            this.runLogic();
            this.paint();
            this.timer = timestamp;
            console.log(timestamp)
        }
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    runLogic() {

    }

    clear() {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
    }

    paint() {
        this.clear();
        this.enemy.paint();
        this.createEnemy.sendtoArray();


        this.enemies.map(enemy=> enemy.paint())
        console.log(this.enemies)
    }
}