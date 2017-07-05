/**
 * 作成処理
 * ゲームにアセットを追加するなどの生成処理を行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
 var dude;
 var star = [];
 //var star2;
 //var star3;
var stars;

function create() {

    stars = game.add.group();
//グループ内のオブジェクトに物理挙動を有効
stars.enableBody = true;

for(let i = 0;i<10;i++){
    let star = stars.create(game.rnd.integerInRange(80,560), game.rnd.integerInRange(80,280), 'star');

        star.inputEnabled =true;//入力を受ける
        star.body.velocity.x = game.rnd.realInRange(-200,200);
        star.body.velocity.y = game.rnd.realInRange(-200,200);
        star.body.collideWorldBounds = true;
        star.body.bounce.x = 1;
        star.body.bounce.y = 1;
}
/*for(let i = 0;i<50;i++){
    let star = star.push(game.add.sprite(game.rnd.integerInRange(80,560), game.rnd.integerInRange(80,280), 'star'));
    //star2 = game.add.sprite(game.rnd.integerInRange(80,560), game.rnd.integerInRange(80,280), 'star');

//star3 = game.add.sprite(game.rnd.integerInRange(80,560), game.rnd.integerInRange(80,280), 'star');

game.physics.arcade.enable(star[i]);

    star[i].inputEnabled =true;//入力を受ける
    star[i].body.velocity.x = game.rnd.realInRange(-200,200);
    star[i].body.velocity.y = game.rnd.realInRange(-200,200);
    star[i].body.collideWorldBounds = true;
    star[i].body.bounce.x = 1;
    star[i].body.bounce.y = 1;

}*/

    dude = game.add.sprite(10, 10, 'dude');
    dude.frame = 4;
    dude.animations.add('Left',[0,1,2,3],10,true);
    dude.animations.add('Right',[5,6,7,8],10,true);

//キャラのポインタの位置
    dude.anchor = new Phaser.Point(0.5,1);
    //dude.animations.play('Left');

//arcade（種類がたくさんある）シンプルで早い
    game.physics.arcade.enable(dude);

//物理エンジンを有効にするとbodyというプロパテが使えるようになる
//velocity=速度（秒速ピクセルで指定）
    //dude.body.velocity.x = 300;
    //dude.body.velocity.y = 300;
    dude.body.collideWorldBounds = true;
    dude.body.bounce.x = 1;
    dude.body.bounce.y = 1;
//starも






}
