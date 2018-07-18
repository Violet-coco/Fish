class Player {

    constructor() {
        //游戏玩家
        this.player;
        this.mousePos = {x: 0, y: 0};

        //鱼游动的方向
        this.direction = 0;

        //玩家坐标
        this.playerX = 0;
        this.playerY = 0;

        this.player = document.createElement('img');
        this.player.setAttribute('id', 'player');
        this.player.src = 'img/player_right.png';
        this.player.style.left = this.playerX + "px";
        this.player.style.top = this.playerY + "px";
        //获取id为overlay的元素，添加子元素和鼠标移动事件
        document.querySelector("#overlay").appendChild(this.player);
        document.querySelector("#overlay").onmousemove = this.mouseMove();
    }


    mouseMove(ev) {
        //实现浏览器兼容
        ev = ev || window.event;
        //this.mousePos = this.mousePosition(ev);
    }

    // mousePosition(ev) {
    //     const [{x, y}] = document.querySelector("#overlay").getClientRects();
    //     return {
    //         x: ev.pageX - x,
    //         y: ev.pageY - y
    //     };
    // }

    //玩家的方向
    getDirection() {
        return this.direction;
    }


    move(){
        if (this.playerX < this.mousePos.x && this.playerX < 1130) {
            this.playerX += 10;
            this.player.style.left = this.playerX + "px";
            this.player.src = 'img/player_right.png';
            this.direction = 1;
            if (this.playerX > this.mousePos.x) {
                this.playerX = this.mousePos.x;
                this.player.style.left = this.playerX + "px";
            }
        } else if (this.playerX > this.mousePos.x && this.playerX > 0) {
            this.playerX -= 10;
            this.player.style.left = this.playerX + "px";
            this.player.src = 'img/player_left.png';
            this.direction = 2;
            if (this.playerX < this.mousePos.x) {
                this.playerX = this.mousePos.x;
                this.player.style.left = this.playerX + "px";
            }
        }
        if (this.playerY < this.mousePos.y && this.playerY < 600) {
            this.playerY += 10;
            this.player.style.top = this.playerY + "px";
            if (this.playerY > this.mousePos.y) {
                this.playerY = this.mousePos.y;
                this.player.style.top = this.playerY + "px";
            }
        } else if (this.playerY > this.mousePos.y && this.playerY > 0) {
            this.playerY -= 10;
            this.player.style.top = this.playerY + "px";
            if (this.playerY < this.mousePos.y) {
                this.playerY = this.mousePos.y;
                this.player.style.top = this.playerY + "px";
            }
        }
    }

    run(){
        this.move();
    }
}