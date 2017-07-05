/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
 var count;


function update() {
    //dude.x ++;
    //let hit = game.physics.arcade.collide(dude,star);
//dudeと星が衝突（簡単に）    let hit = game.physics.arcade.collide(dude,stars);

//重なったら、dudoに星
game.physics.arcade.overlap(dude,stars,pickStar,null,this);


/*for(let i = 0;i<50;i++){
    if(star[i].input.pointerOver()){
        //重なってるので、satrを破棄する
        star[i].kill();
        //count ++;
        //star = game.add.sprite(100, 100, 'star');

    }
}*/
    /*dude.x = game.input.x;
    dude.y = game.input.y;*/

    //マウスが押された時の処理
    if(game.input.mousePointer.isDown || game.input.pointer1.isDown){
        //目指す座標ー現在地　で基礎ベクトルを作る。→加算する。
dude.x += (game.input.x - dude.x)/20;
dude.y += (game.input.y - dude.y)/20;
}


//dudeに最初に設定したスプライト、starに、次に設定したグループ内のスプライトが渡される
function pickStar(dude,star){
    star.kill();

}
}
