/**
 * Created by jne on 2017/9/20.
 */
(function(){

    window.Game = Class.extend({
        init: function (params) {



            /*获得上下文*/

            this.fps = params.fps;

            this.status = 0; /*小球的状态0 是黏在挡板上 1 是飞出去*/


            this.canvas = document.getElementById("canvas");

            this.ctx = this.canvas.getContext("2d");

            this.sr = new StaticResoucesUtil();

            this.images = null;

            var that = this;

            this.sr.loadImages("r.json",function(alreadyNum,allNum,images){

                that.ctx.clearRect(0,0,that.canvas.width,that.canvas.height)
                /*这里会执行三次*/

                that.ctx.fillText("正在加载图片 当前" +alreadyNum +"共"+ allNum ,20,20 );
                /*图片请求过来如果相等就启动run*/
                if(alreadyNum == allNum){
                    that.run();

                    that.images = images
                    console.log(images)
                }



            });










        },
        run:function(){
                /*砖块管理实例化*/
            this.bm = new Blockmanager();
            /*方块管理器更新*/

            /* 挡板实例化*/
            this.Racket = new Racket();
            /*小球实例化*/
            this.ball = new Ball2();

            var that = this;

           this.timer=  setInterval(function(){

                that.mainloop();
            },29)

        },mainloop:function(){

            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

            this.bm.renderAllBlocks();
            this.bm.updateallblock();


            this.Racket.render();

            /*跟新渲染小球*/
            this.ball.render();
            this.ball.update();



        },
        stop:function(){
            clearInterval(this.timer)
        }
    })


})()