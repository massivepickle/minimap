class Rbt{
    constructor(n){
        this.serial = n;
        this.m = true;
    }

    intial(){
        robot[this.serial].rotation = Math.atan2(player.y-robot[this.serial].y, player.x-robot[this.serial].x) * 180/PI;
    }

    move(){
        var run = player.x - robot[this.serial].x;
        var rise = player.y - robot[this.serial].y;

        var length  = sqrt((rise * rise) + (run * run));
        var unitX   = run   / length;
        var unitY   = rise  / length;

        player.x += unitX * robot[this.serial].speed;
        player.y += unitY * robot[this.serial].speed;

        robot.collide(edge);
    }

    teleport(){

    }
}