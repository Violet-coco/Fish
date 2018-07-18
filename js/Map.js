class Map{

    constructor(){
        this.imgs = ['img/bg.jpg','img/bg1.jpg'];
        const box = document.getElementById('box');
        this.imgBox = this.imgs.map((s, i) => {
            const img = document.createElement('img');
            img.style.width = '1180px';
            img.style.height = '640px';
            img.src = s;
            img.style.position = "absolute";
            const imgX = 1180 * i;
            img.style.left = imgX + 'px';
            box.appendChild(img);
            return {img, imgX};
        });
        //requestAnimationFrame(run);
        // this.run();
        // imgBox.forEach(function (box) {
        //     box.imgX += 1;
        //
        //     if (box.imgX >= 1180) {
        //         box.imgX -= 1180 * imgBox.length;
        //     }
        //     box.img.style.left = box.imgX + 'px';
        // });
    }

    run(){
        this.imgBox.forEach(function (box) {
            box.imgX += 1;

            if (box.imgX >= 1180) {
                box.imgX -= 1180 * 2;
            }
            box.img.style.left = box.imgX + 'px';
        });
    }
}
