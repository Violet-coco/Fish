class Fish1 {
    constructor(game) {
        //可以吃的小鱼
        this.fish1;
        //小鱼的坐标
        this.fish1X = 0;
        this.fish1Y = 0;

        this.index = 201;

        this.random;

        this.speed = 0.5;
        this.speedX;

        this.fish1 = document.createElement('img');
        this.random = Math.floor(Math.random() * 2);
        this.fish1.setAttribute('id', 'fish1');
        this.speedX=Math.floor(Math.random()*3)+0.5;

        this.move();

        if (this.random == 1) {
            this.fish1.src = "img/fish1_left.png";
            let ranr = Math.floor(Math.random() * 500 + 50);
            this.fish1X = 1230;
            this.fish1Y = ranr;
            this.fish1.style.left = this.fish1X + "px";
            this.fish1.style.top = this.fish1Y + "px";
        } else {
            this.fish1.src = "img/fish1_right.png";
            let ranr = Math.floor(Math.random() * 500 + 50);
            this.fish1X = -50;
            this.fish1Y = ranr;
            this.fish1.style.left = this.fish1X + "px";
            this.fish1.style.top = this.fish1Y + "px";
        }
        game.appendChild(this.fish1);
    }

    move() {
        if (this.random == 1) {
            if (this.index > 150) {
                let rany = Math.floor(Math.random() * 2);
                if (rany == 0) {
                    this.speed = -this.speed;
                }
                this.index=0;
            }
            this.fish1X -= this.speedX;
        } else {
            if (index > 150) {
                let rany = Math.floor(Math.random() * 2);
                if (rany == 0) {
                    this.speed = -this.speed;
                }
                this.index=0;
            }
            this.fish1X += this.speedX;
        }
        this.index++;
        this.fish1Y += this.speed;
        this.fish1.style.left = this.fish1X + "px";
        this.fish1.style.top = this.fish1Y + "px";
        if (this.fish1X < -50 || this.fish1X > 1280) {
            return true;
        }
        if (this.fish1Y < 0 || this.fish1Y > 600) {
            this.speed=-this.speed;
        }
    }

    rem() {
        this.fish1.remove();
    }


}