/**
 * Created by jne on 2017/9/20.
 */


(function(){

    window.Blockmanager = Class.extend({
        //存放抽象地图
        init:function(){
            this.map = [
                [0,1,2,0,0,0,1,0],
                [1,0,0,0,0,0,0,1],
                [0,4,4,4,4,4,4,0],
                [0,3,3,3,3,3,3,0],
                [0,2,2,2,2,2,2,0],
                [0,1,1,1,1,1,1,0],
                [1,0,0,0,0,0,0,1],
                [0,1,0,0,0,0,1,0],
                [0,0,0,2,0,0,0,0],
                [0,0,0,0,0,0,0,0]
            ];
            /*存放真实的砖块对象*/
            this.blocks = [
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null]
            ];

            this.creatBlocksByMap();
        },
        /*根据地图创建砖块*/

        creatBlocksByMap:function(){
            /*无非就是循环遍历地图根据*/
            for(var r = 0; r < 9; r++){
                for(var c = 0 ; c < 8; c ++ ){
                        this.map[r][c] && (this.blocks[r][c] = new Block(r,c,this.map[r][c]));

                }
            }
        },
        /*更新所有的砖块*/
        updateallblock:function(){


            for(var r = 0; r < 9; r++){
                for(var c = 0 ; c < 8; c ++ ){

                    this.blocks[r][c] && this.blocks[r][c].update();
                }
            }

        },
        /*渲染所有的方块*/
        renderAllBlocks:function(){

            for(var r = 0; r < 9; r++){
                for(var c = 0 ; c < 8; c ++ ){

                    this.blocks[r][c] && this.blocks[r][c].render();
                }
            }

        }


    })

})()