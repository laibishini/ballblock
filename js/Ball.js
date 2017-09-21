/**
 * Created by jne on 2017/9/20.
 */
(function(){
    window.Ball = Class.extend({

        init:function(x,y,r,c){

            this.x = x;
            this.y = y;
            this.r = r;
            this.c = c;

            this.dx = 1;


            this.speed = 20;
            this.angle =60 ;



        },
        /*这个函数在game类的里面要每个帧数都得以执行*/
        update:function(){

            //dx dy是要根据this.ange重新计算

            this.dx = this.speed * Math.cos(this.angle*Math.PI/180);
            this.dy = this.speed * Math.sin(this.angle*Math.PI/180);

            this.x += this.dx;
            this.y += this.dy;


            /*撞到底边，顶编，反射角都是360入射角*/
            if(this.y > game.canvas.height - this.r || this.y < this.r){
                this.angle = 360 - this.angle;
            }
            if(this.x > game.canvas.width - this.r || this.x < this.r){
                this.angle = 180 - this.angle;
            }

        },
        render:function(){

            game.ctx.beginPath();
            game.ctx.arc(this.x,this.y ,this.r,0,Math.PI*2,true);

            game.ctx.fillStyle = this.c;
            game.ctx.fill();
            game.ctx.closePath();
            console.log(11)
            game.ctx.font = "40px 黑体"
            game.ctx.fillText(this.angle,299,299)
        }
    })



})()