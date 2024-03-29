

let shoot1_sound = new Audio("../assets/shoot1.mp3", {
    volume: 1
});


let map_sound = new Audio("../assets/tes.mp3", {
    volume: 1
});
map_sound.load();

let level1_sound = new Audio("../assets/west.mp3", {
    volume: 1
});
level1_sound.load();

let level2_sound = new Audio("../assets/overdrive.mp3", {
    volume: 1
});
level2_sound.load();

let level3_sound = new Audio("../assets/gowest.mp3", {
    volume: 1
});
level3_sound.load();

let level4_sound = new Audio("../assets/final.mp3", {
    volume: 1
});
level4_sound.load();



let base_image = new Image();
base_image.src = '../assets/developer.svg';


let base_image3 = new Image();
base_image3.src = '../assets/win.svg';


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

let base_image13 = new Image();
base_image13.src = '../assets/loose.svg';

let base_image14 = new Image();
base_image14.src = '../assets/win2.svg';

let base_image15 = new Image();
base_image15.src = '../assets/win3.svg';

let base_image16 = new Image();
base_image16.src = '../assets/winfinal.svg';


//-------------------------------------------------------------------------------

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        // Constants
        this.SPEED = 0;

        //enemies array ----------------------------------------
        this.enemies = [];
        //enemies array ----------------------------------------

        this.devAlive = true;

        this.level = 0;
        this.levelCompleted = {
            level_1: false,
            level_2: false,
            level_3: false
        }

        this.globalMousePosition = {
            x: 900,
            y: 900
        }

        this.numberOfEnemiesKilled = 0;

    }

    

    getMousePos(event) {
        this.globalMousePosition.x = event.offsetX;
        this.globalMousePosition.y = event.offsetY;
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
    }

    reset() {
        this.createEnemy = new CreateEnemy(this,400);
        this.timer = 0;
    }

    start() {
        this.reset();
        this.loop(0);

    }

    loop(timestamp) {
        if (this.timer < timestamp - this.SPEED) {
            this.paint();
            this.onCanvasClickGetMousePosition();
            this.timer = timestamp;

        }
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    } 

    timeout(){
        
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
                this.context.drawImage(base_image7, 0, 0, this.canvas.width, this.canvas.height);
                if (this.globalMousePosition.y >= 300 && this.globalMousePosition.y <= 616) {
                    this.level = 1;
                    //resetMouseState()
                }
                break;
            case 1: // map level
                this.devAlive = true;
                map_sound.play();
                this.context.drawImage(base_image8, 0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(base_image9, 193, 385, this.canvas.width / 6, this.canvas.height / 6);
                if(this.levelCompleted.level_1 === true){
                    this.context.drawImage(base_image10, 205, 223, this.canvas.width / 6, this.canvas.height / 6);
                }
                if(this.levelCompleted.level_2 === true){
                    this.context.drawImage(base_image11, 428, 202, this.canvas.width / 6, this.canvas.height / 6);
                }
                if(this.levelCompleted.level_3 === true){
                    this.context.drawImage(base_image12, 468, 38, this.canvas.width / 6, this.canvas.height / 6);
                }


                // map_sound.play();
                if (this.globalMousePosition.y >= 400 && this.globalMousePosition.y <= 506 && this.globalMousePosition.x >= 200 && this.globalMousePosition.x <= 270 ) {
                    this.level = 2;
                    this.devAlive = true;
                    this.resetMouseState();
                    this.reset();
                } else if(this.globalMousePosition.y >= 250 && this.globalMousePosition.y <= 350 && this.globalMousePosition.x >= 200 && this.globalMousePosition.x <= 270 ){
                    this.level = 3;
                    this.devAlive = true;
                    this.resetMouseState();
                    this.reset();
                } else if(this.globalMousePosition.y >= 230 && this.globalMousePosition.y <= 350 && this.globalMousePosition.x >= 420 && this.globalMousePosition.x <= 530 ){
                    this.level = 4;
                    this.devAlive = true;
                    this.resetMouseState();
                    this.reset();
                } else if(this.globalMousePosition.y >= 100 && this.globalMousePosition.y <= 230 && this.globalMousePosition.x >= 420 && this.globalMousePosition.x <= 530 ){
                    this.level = 5;
                    this.devAlive = true;
                    this.resetMouseState();
                    this.reset();
                }
                break;
            case 2: // first level boot camp
                level1_sound.play();
                map_sound.pause();
                if(this.devAlive === true){
                    this.createEnemy.sendtoArray();
                    this.context.drawImage(base_image, this.canvas.width / 3, this.canvas.height / 3, this.canvas.width / 4, this.canvas.height / 4);
                
                for (let enemy of this.enemies) {
                    enemy.getShoot();
                    enemy.move();
                    enemy.killDev();
                    
                }
                }else{
                    this.level = 8;
                }

                if(this.numberOfEnemiesKilled === 20){
                    this.enemies = [];
                    this.level = 7;
                    this.numberOfEnemiesKilled = 0;
                    this.levelCompleted.level_1 = true;
                    this.resetMouseState();
                }
                this.resetMouseState();

                break;
            case 3: // second level junior developer
                level2_sound.play();
                map_sound.pause();
                if(this.devAlive === true){
                    this.createEnemy.sendtoArray2();
                    this.context.drawImage(base_image, this.canvas.width / 3, this.canvas.height / 3, this.canvas.width / 4, this.canvas.height / 4);
                
                for (let enemy of this.enemies) {
                    enemy.getShoot2();
                    enemy.move2();
                    enemy.killDev();  
                }
                }else{
                    this.level = 8;
                }

                if(this.numberOfEnemiesKilled === 45){
                    this.enemies = [];
                    this.level = 9;
                    this.numberOfEnemiesKilled = 0;
                    this.levelCompleted.level_2 = true;
                    this.resetMouseState();
                }
                this.resetMouseState();
                break;
            case 4: // third level senior developer
                level3_sound.play();
                map_sound.pause();
                if(this.devAlive === true){
                    this.createEnemy.sendtoArray3();
                    this.context.drawImage(base_image, this.canvas.width / 3, this.canvas.height / 3, this.canvas.width / 4, this.canvas.height / 4);
                
                for (let enemy of this.enemies) {
                    enemy.getShoot3();
                    enemy.move3();
                    enemy.killDev();  
                }
                }else{
                    this.level = 8;
                }

                if(this.numberOfEnemiesKilled === 60){
                    this.enemies = [];
                    this.level = 10;
                    this.numberOfEnemiesKilled = 0;
                    this.levelCompleted.level_3 = true;
                    this.resetMouseState();
                }
                this.resetMouseState();
                break;
            case 5: // final level last level
                level4_sound.play();
                map_sound.pause();
                if(this.devAlive === true){
                    this.createEnemy.sendtoArray4();
                    this.context.drawImage(base_image, this.canvas.width / 3, this.canvas.height / 3, this.canvas.width / 4, this.canvas.height / 4);
                
                for (let enemy of this.enemies) {
                    enemy.getShoot4();
                    enemy.move4();
                    enemy.killDev();  
                }
                }else{
                    this.level = 8;
                }

                if(this.numberOfEnemiesKilled === 70){
                    this.enemies = [];
                    this.level = 11;
                    this.numberOfEnemiesKilled = 0;
                    this.levelCompleted.level_3 = true;
                    this.resetMouseState();
                }
                this.resetMouseState();
                break;
            case 6: //  show enemies on the map menu
                break;
            case 7: 
                level1_sound.pause();
                level2_sound.pause();
                level3_sound.pause();
                level4_sound.pause();


                this.context.drawImage(base_image3, 0, 0, this.canvas.width, this.canvas.height)
                if (this.globalMousePosition.y >= 650 && this.globalMousePosition.y <= 680) {
                    this.level = 1;

                    this.resetMouseState()
                }
                break;
            case 8: 
                level1_sound.pause();
                level2_sound.pause();
                level3_sound.pause();
                level4_sound.pause();
                this.context.drawImage(base_image13, 0, 0, this.canvas.width, this.canvas.height)
                if (this.globalMousePosition.y >= 650 && this.globalMousePosition.y <= 680) {
                    this.level = 1;
                    this.resetMouseState()
                }
                break;
            case 9: 
                 level1_sound.pause();
                 level2_sound.pause();
                 level3_sound.pause();
                 level4_sound.pause();
                 this.context.drawImage(base_image14, 0, 0, this.canvas.width, this.canvas.height)
                 if (this.globalMousePosition.y >= 650 && this.globalMousePosition.y <= 680) {
                     this.level = 1;
                     this.resetMouseState()
                 }
                 break;
            case 10: 
                 level1_sound.pause();
                 level2_sound.pause();
                 level3_sound.pause();
                 level4_sound.pause();
                 this.context.drawImage(base_image15, 0, 0, this.canvas.width, this.canvas.height)
                 console.log('case 10')
                 if (this.globalMousePosition.y >= 650 && this.globalMousePosition.y <= 680) {
                     this.level = 1;
                     this.resetMouseState()
                 }
                 break;
            case 11: 
                 level1_sound.pause();
                 level2_sound.pause();
                 level3_sound.pause();
                 level4_sound.pause();
                 console.log('case 11')
                 this.context.drawImage(base_image16, 0, 0, this.canvas.width, this.canvas.height)
                 if (this.globalMousePosition.y >= 650 && this.globalMousePosition.y <= 680) {
                     this.level = 1;
                     this.resetMouseState()
                 }
                break;
            default:
                console.log('default')
                break;
        }
    }
}