/**
 * Created by jne on 2017/9/20.
 */
(function(){
    window.Block = Class.extend({
        /*构造函数 的row 行号，color颜色的合法值是1,2，4,5
        * col 合法值012314567*/
        /*row 0-8*/

        init:function(row,col,color){

            this.row = row ;

            this.col = col;

            this.color = color;

            this.x = 100 + this.col* 99;
            this.y = 50 + this.row * 40;

        },
        update:function(){
                /*检测是不是碰到了这个小方格这个小方格底边和顶边*/
            /*碰撞检测每个砖块都要检测小球有没有被撞倒如果撞倒了，就吧blockmanager里面的矩阵对应的位置改为null*/
            if((game.ball.x > this.x - 14) && (game.ball.x < this.x + 94 + 14)){
                if(game.ball.y > this.y + 36 && game.ball.y < this.y + 36 + 14 || game.ball.y > this.y - 14 && game.ball.y < this.y ){
                    /*碰到了底边 或者碰到了顶边*/
                    game.bm.blocks[this.row][this.col] = null;
                    /*反弹*/
                    game.ball.angle = 360 - game.ball.angle;

                }
                /*把矩阵改为null*/
            }
                /*判断是不是撞倒了小方格的左边和右边*/

            if(game.ball.y > this.y && game.ball.y < this.y + 36){
                if(game.ball.x > this.x - 14 && game.ball.x < this.x || game.ball.x > this.x + 94 && game.ball.x < this.x + 94 + 14){
                    //��������ߡ��ұ�
                    game.bm.blocks[this.row][this.col] = null;
                    //����
                    game.ball.angle = 180 - game.ball.angle;
                }
            }

        },
        render:function(){
            game.ctx.drawImage(game.images.block,(this.color - 1) * 97,0,94,36,this.x,this.y,94,36)


        }
    })
})()