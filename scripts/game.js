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



//-------------------------------------------------------------------------------


class Game {
    constructor(canvas) {
        // Bind the canvas and the context to the game object
        // This will allow it to access both from any other class
        // that owns a reference to the game object
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        // Constants
        this.SPEED = 0;
        this.GRID_SIZE = 10;


        //enemies array ----------------------------------------
        this.enemies = [];
        //enemies array ----------------------------------------

        this.level = 0;
            this.levelCompleted = {
                level_1: false,
                level_2: false,
                level_3: false}

        this.globalMousePosition = {
            x: 900,
            y: 900
        }
        //this.getMousePos() = this.getMousePos.bind(this)
    }

    getMousePos(event) {
       
    

       
        this.globalMousePosition.x = event.offsetX ;
        this.globalMousePosition.y = event.offsetY ;
    }

    onCanvasClickGetMousePosition() {
        this.canvas.addEventListener('click', (event) => {
            this.getMousePos(event);
            //shoot1_sound.play();
        })
    }

    resetMouseState() {
        this.globalMousePosition.x = 50000;
        this.globalMousePosition.y = 50000;
    }





    eatFood() {
        this.sound.play('eatFood', {
            volume: 1
        });


        this.enemy = new Enemy(this);
        this.score++;
    }

    reset() {
        console.log('this', this)
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
            this.onCanvasClickGetMousePosition();
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

        switch (this.level) {
            case 0: // intro level
                console.log('intro')
                this.context.drawImage(base_image7, 0, 0, this.canvas.width, this.canvas.height);
                if (this.globalMousePosition.y >= 300 && this.globalMousePosition.y <= 616) {
                    this.level = 1;
                    //resetMouseState()
                }
                break;
            case 1: // map level
                console.log('map')
                //map_sound.play();
                this.context.drawImage(base_image8, 0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(base_image9, 193, 385, this.canvas.width / 6, this.canvas.height / 6);

                // map_sound.play();
                if (this.globalMousePosition.y >= 468 && this.globalMousePosition.y <= 506) {
                    this.level = 2;
                    //resetMouseState()
                }
                break;
            case 2: // first level boot camp
                // level1_sound.play();
                // map_sound.pause();

                // this.enemy.paint();
                this.createEnemy.sendtoArray();
                this.context.drawImage(base_image, this.canvas.width / 3, this.canvas.height / 3, this.canvas.width / 4, this.canvas.height / 4);
                for (let enemy of this.enemies) {
                    enemy.paint();
                    enemy.move();
                }
                console.log(this.enemies)

                break;
            case 3: // second level junior developer
                console.log('second level junior developer')
                break;
            case 4: // third level senior developer
                console.log('third level senior developer')
                break;
            case 5: // final level last level
                console.log('final level last level')
                break;
            case 6: //  show enemies on the map menu
                console.log('show enemies on the map menu')
                break;
            default:
                console.log('default')
                break;
        }


        console.log(this.enemies)
    }
}