class Game {

    constructor() {
        this.initArguments();
        //初始化游戏盒子
        this.initGame();
        //初始化游戏
        this.gameStart();
        //初始化地图
        this.initMap();
        //初始化玩家
        this.initPlayer();
    }

    initArguments(){
        //定义游戏盒子
        this.game;
        //游戏地图
        this.map;
        //游戏玩家
        this.player;
        //可以被吃的小鱼
        this.fish1;
        this.fishes1 = new Set;
        //可以吃鱼的大鱼
        this.fish2;
        this.fishes2 = new Set;
        this.scoreBoard;
        //分数初始值
        this.score = 0;
        this.lost = 0;
        //开始按钮
        this.startButton;
        this.start = false;
        //游戏结束
        this.gameover;
        //重置按钮
        this.resetButton;
        //定义子弹
        this.bullet;
        this.bullets = new Set;
        this.index = 0;
    }

    //初始化游戏盒子
    initGame() {
        this.game = document.createElement('div');
        this.game.setAttribute("id", "box");
        const overlay = document.createElement('div');
        overlay.setAttribute("id", "overlay");
        this.game.appendChild(overlay);
        document.body.appendChild(this.game);
        this.scoreBoard = document.createElement('span');
        this.scoreBoard.setAttribute("id", "score");
        this.scoreBoard.innerHTML = "得分：" + this.score + "分";
        this.game.appendChild(this.scoreBoard);
    }

    //游戏开始按钮初始化
    gameStart() {
        const startButton = document.createElement('button');
        startButton.setAttribute("id", "start");
        //开始按钮的点击事件
        startButton.onclick = function () {
            startButton.style.display = "none";
            //玩家初始化
            // this.player.run();
            this.start = true;
        };
        this.game.appendChild(startButton);
        let span = document.createElement('span');
        span.innerHTML = "开始游戏";
        startButton.appendChild(span);
    }

    //初始化地图
    initMap() {
        this.map = new Map();
        this.map.run();
    }

    //初始化玩家
    initPlayer() {
        this.player = new Player();
        //setInterval('this.player.run()',3);
    }

    run() {
        if (!this.start)
            return;
        this.fish1 = new Fish1();
        this.fish1.init(this.game);
        this.fishes1.add(this.fish1);
        this.fishaction();
        this.player.run();
    }

    fishaction() {
        if (!this.start)
            return;
        const mx = this.player.playerX;
        const my = this.player.playerY;

        this.fishes1.forEach(function(x){

            if (x.move()) {
                x.rem();
                this.fishes1.delete(x);
                this.lost += 1;
                this.scoreBoard.innerHTML = "得分：" + (this.score - this.lost) + "分";
                return
            }
            const tx = x.fish1X;
            const ty = x.fish1Y;
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 500) {
                x.rem();
                this.fishes1.delete(x);
                this.score += 10;
                this.scoreBoard.innerHTML = "得分：" + (this.score - this.lost) + "分";
            }
        });
        this.fishes2.forEach(function(x){
            const tx = x.fish2X;
            const ty = x.fish2Y;
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 500) {
                this.start = false;
                this.gameOver();
            }
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 50000) {
                x.chase(mx, my);
            } else {
                x.move();
            }
        });

        if ((this.score + 110) % 100 == 0) {
            this.fish2 = new Fish2();
            this.fish2.init(this.game);
            this.fishes2.add(this.fish2);
            this.score += 10;
            this.index++;
        }

        if (this.index == 3) {
            this.bullet = new Bullet(this.player);
            this.bullet.init(this.game);
            this.bullets.add(this.bullet);
            this.index = 0;
        }

        this.bullets.forEach(x => {
            const bx = x.bulletX;
            const by = x.bulletY;
            if (x.move()) {
                x.rem();
                this.bullets.delete(x);
                return;
            }
            this.fishes2.forEach(x => {
                x.move();
                const tx = x.fish2X;
                const ty = x.fish2Y;
                if ((bx - tx) ** 2 + (by - ty) ** 2 < 1000) {
                    x.rem();
                    this.fishes2.delete(x);
                }
            })
        })

    }

    // setInterval('game.run()',10);


    //游戏结束事件
    gameOver() {
        this.gameover = document.createElement('div');
        this.gameover.setAttribute('id', 'over');
        this.gameover.innerHTML = "GAME　OVER" + "<br>" + "得分：" + (this.score - this.lost) + "分";
        this.game.appendChild(this.gameover);
        this.resetButton = document.createElement('button');
        this.resetButton.setAttribute('id', 'reset');
        this.resetButton.innerHTML = "吃不下了";
        this.resetButton.onclick = function () {
            location.reload();
        };
        this.resetButton.onmouseover = function () {
            this.resetButton.innerHTML = "再吃一口！";
        };
        this.resetButton.onmouseleave = function () {
            this.resetButton.innerHTML = "吃不下了";
        }
        this.game.appendChild(this.resetButton);
    }

}