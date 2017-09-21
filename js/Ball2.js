/**
 * Created by jne on 2017/9/20.
 */
(function(){

    window.Ball2 = Class.extend({
        init:function(){
            this.x = 100;
            this.y = 100;


            this.speed = 10;
            this.angle = -30;
        },
        /*这个函数每帧执行*/
        update:function(){
            if(game.status == 0){
                this.x = game.Racket.x + 90 -14;
                this.y = game.Racket.y - 27;
            }else {
                this.x +=Math.cos(this.angle * Math.PI / 180)* this.speed;

                this.y +=Math.sin(this.angle * Math.PI / 180)* this.speed;

                /*判断小球是不是撞到了右边和左边*/
                if(this.x > game.canvas.width - 14 || this.x < 14){
                    this.angle = 180 - this.angle;
                }
                /*判断小球是不是撞倒了顶边*/
                if(this.y  <  14 ){
                    console.log(this.y)
                    this.angle = 360 - this.angle;
                }

                /*判断小球是不是撞倒了挡板*/

                if(this.x > game.Racket.x -14 && this.x < game.Racket.x + 179 + 14 ){
                    if(this.y > game.Racket.y - 14){
                        this.angle = 360 - this.angle;

                    }

                    /*检测游戏失败*/
                    if(this.y > game.Racket.y + 14){
                      game.status = 0;

                        game.angle = -30;
                    }

                }


            }


        },
        /*这个函数每帧执行*/
        render:function(){
            game.ctx.drawImage(game.images.ball,this.x,this.y)
        }

    });


})()