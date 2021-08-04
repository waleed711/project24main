class ComputerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
    }
  
   
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      Matter.Body.setAngle(this.body,-PI/2);
     // if (move === "UP" && ComputerArcher.body.angle < 1.77){
       //   angleValue = 0.1;
      }//else{
        //  angleValue = -0.1;
      //}
      //if (move === "DOWN" && ComputerArcher.body.angle < 1.47){
         // angleValue = -0.1;
      //}else{
     //     angleValue = 0.1
     // }
    //}
  }
  