class Level{
    constructor(){}
    
    play(){
        camera.position.x = player.x;
        camera.position.y = player.y;
        camera.zoom = 3;
        /*
        The mouse position in local/screen space
        This is a position between (0, 0) and (window width, window height)
        The mouse position in world space
        This is a position between
        (0, 0) and (mouseX + camera.position.x, mouseY + camera.position.y)
        */
        //PLAYER
        var mouseXWorld = mouseX + camera.position.x - displayWidth/2;
        var mouseYWorld = mouseY + camera.position.y - displayHeight/2;

        //var run = mouseX - player.x;
        //var rise = mouseY - player.y;

        var run     = mouseXWorld - player.x;
        var rise    = mouseYWorld - player.y;
        var length  = sqrt((rise * rise) + (run * run));
        var unitX   = run   / length;
        var unitY   = rise  / length;

        player.x += unitX * player.speed;
        player.y += unitY * player.speed;

        player.rotation = Math.atan2(mouseYWorld-player.y, mouseXWorld-player.x)*180/PI;

        player.collide(edge);

        if(lvl === 1){
            if(create){
                gem1 = createSprite(displayWidth/2,displayHeight/2 - 45,40,40);
                gem2 = createSprite(displayWidth/2,displayHeight/2,40,40);
                gem3 = createSprite(displayWidth/2,displayHeight/2 + 45,40,40);
                l1c1_top = createSprite(displayWidth/2,displayHeight/2 - 80,50,20);
                l1c1_bottom = createSprite(displayWidth/2,displayHeight/2 + 80,50,20);
                l1c1_right = createSprite(displayWidth/2 + 35,displayHeight/2,20,140);
                l1c1_left = createSprite(displayWidth/2 - 35,displayHeight/2,20,140);
                l1c1_top.shapeColor = "red";
                l1c1_bottom.shapeColor = "red";
                l1c1_right.shapeColor = "red";
                l1c1_left.shapeColor = "red";
                create = false;
            }
        }
    }
}