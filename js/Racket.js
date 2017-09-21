/**
 * Created by jne on 2017/9/20.
 */
(function () {

    window.Racket = Class.extend({
        init:function(){
            this.x = game.canvas.width / 2 - 90;

            this.y = 500;

            this.bindListener();

        },

        render:function(){


            game.ctx.drawImage(game.images.racket,this.x,this.y);

        },
        bindListener: function () {
                var self = this;
            game.canvas.addEventListener("mousemove",function(event){
                self.x = event.offsetX;
                //���ܳ����ұ߽�
                if(self.x > game.canvas.width - 179){
                    self.x = game.canvas.width - 179;
                }
                //���ܳ�����߽�
                if(self.x < 0){
                    self.x = 0;
                }


            });



            game.canvas.addEventListener("mousedown",function(event){
                game.status = 1;
            })
        }
    })


})()