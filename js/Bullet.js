class Bullet {

    constructor(game,player) {
        //子弹
        this.bullet;
        //子弹的横纵坐标
        this.bulletX;
        this.bulletY;
        //子弹的方向
        this.dir;
        //时间
        this.time=0;

        this.bulletsrc=['img/bullet.png','img/bullet1.png','img/bullet2.png','img/bullet3.png'];

        this.bullet = document.createElement('img');
        this.bullet.setAttribute('id', 'bullet');
        this.bullet.src = 'img/bullet.png';
        this.bulletX = player.playerX;
        this.bulletY = player.playerY-16;
        this.bullet.style.left = this.bulletX + "px";
        this.bullet.style.top = this.bulletY + "px";
        game.appendChild(this.bullet);
    }


    //子弹移动
    move(player) {
        if(time>200){
            if (this.dir == 1) {
                this.bulletX += 4;
                this.bullet.style.left=this.bulletX+"px";
            } else {
                this.bulletX -= 4;
                this.bullet.style.left=this.bulletX+"px";
            }

            //子弹超出边界
            if (this.bulletX < -50 || this.bulletX > 1280) {
                return true;
            }
        } else {
            //随机出现四种子弹图片
            this.bullet.src=this.bulletsrc[Math.floor(Math.random()*4)];
            time++;
            this.bulletX=player.playerX;
            this.bulletY = player.playerY-16;
            this.bullet.style.left = this.bulletX + "px";
            this.bullet.style.top = this.bulletY + "px";
            //获取玩家的方向
            this.dir=player.getDirection();
        }
    };

    rem() {
        this.bullet.remove();
    }
}