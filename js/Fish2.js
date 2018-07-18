class Fish2 {
    constructor(game) {
        //可以吃鱼的大鱼
        this.fish2;

        //大鱼的坐标
        this.fish2X = 0;
        this.fish2Y = 0;
        this.index = 201;
        this.ranx;
        this.random;
        this.speed = 1;

        this.fish2 = document.createElement('img');
        this.random = Math.floor(Math.random() * 2);
        if (this.random == 1) {
            this.ranx = 1;
        } else {
            this.ranx = -1;
        }
        this.fish2.setAttribute('id', 'fish2');

        this.move();
        this.chase(mx,my);

        if (this.ranx == 1) {
            this.fish2.src = "img/fish2_left.png";
            let ranr = Math.floor(Math.random() * 500 + 50);
            this.fish2X = 1180;
            this.fish2Y = ranr;
            this.fish2.style.left = this.fish2X + "px";
            this.fish2.style.top = this.fish2Y + "px";
        } else {
            this.fish2.src = "img/fish2_right.png";
            let ranr = Math.floor(Math.random() * 500 + 50);
            this.fish2X = 0;
            this.fish2Y = ranr;
            this.fish2.style.left = this.fish2X + "px";
            this.fish2.style.top = this.fish2Y + "px";
        }
        game.appendChild(this.fish2);
    }

    move() {
        if (this.ranx == 1) {
            if (this.index > 150) {
                let rany = Math.floor(Math.random() * 2);
                if (rany == 0) {
                    this.speed = -this.speed;
                }
                this.index = 0;
            }
            this.fish2X -= 1;
            this.fish2.src = "img/fish2_left.png"
        } else {
            if (this.index > 150) {
                let rany = Math.floor(Math.random() * 2);
                if (rany == 0) {
                    this.speed = -this.speed;
                }
                this.index = 0;
            }
            this.fish2X += 1;
            this.fish2.src = "img/fish2_right.png"
        }
        this.index++;
        this.fish2Y += speed;
        this.fish2.style.left = this.fish2X + "px";
        this.fish2.style.top = this.fish2Y + "px";
        if (this.fish2X < 0) {
            this.ranx = -this.ranx;
            this.fish2.src = "img/fish2_right.png"
        }
        if (this.fish2X > 1180) {
            this.ranx = -this.ranx;
            this.fish2.src = "img/fish2_left.png"
        }
        if (this.fish2Y < 0 || this.fish2Y > 566) {
            this.speed = -this.speed;
        }
    }

    chase(mx, my) {
        if (this.fish2X < mx) {
            this.fish2X += 2;
            this.fish2.style.left = this.fish2X + "px";
            this.fish2.src = 'img/fish2_right.png';
        } else if (this.fish2X > mx) {
            this.fish2X -= 2;
            this.fish2.style.left = this.fish2X + "px";
            this.fish2.src = 'img/fish2_left.png';
        }
        if (this.fish2Y < my) {
            this.fish2Y += 2;
            this.fish2.style.top = this.fish2Y + "px";
        } else if (this.fish2Y > my) {
            this.fish2Y -= 2;
            this.fish2.style.top = this.fish2Y + "px";
        }
    }

    rem() {
        this.fish2.remove();
    }

}