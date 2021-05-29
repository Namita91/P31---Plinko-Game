var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 10; k <=800; k = k + 130) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  // particles.push(new Particles(random(width/2-200,width/2+200),10,10));
  // console.log(particles[0].body.speed);
  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create particle objects
  for(var n = 0; n<6; n++) {
    if(frameCount%140 === 0)  {
      particles.push(new Particles(random(width/2-300,width/2+300),10,10));    
    }
  }
    
  //display the paricles 
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
    if(particles[p].body.speed < 1) {
      particles[p].body.speed = 0;
    }
  }


//   setInterval(() => {
  //   //create particle objects
  // for(var n = 0; n<6; n++) {
  //   if(frameCount%90 === 0)  {
  //     particles.push(new Particles(random(width/2-300,width/2+300),10,10));      
  //   }
  // }
  
  // }, 5000);

  

   //create particle objects
  //  if(frameCount%110 === 0)  {
  //   for(var n = 0; n<6; n++) {
  //     for(var x = 0; x<n; x++) {
  //     particles.push(new Particles(random(width/2-300,width/2+300),10,10)); 
  //     }     
  //   }
  // }
     
  //     for(var n = 0; n<6; n++) {
  //       if(frameCount%90 === 0)  {
  //       setInterval(() => {
  //         particles.push(new Particles(random(width/2-300,width/2+300),10,10)); 
  //       }, 5000);
  //   }
  // }
   
  //   if(frameCount%90 === 0)  {
  //     for(var n = 0; n<6; n++) {
  //       setInterval(() => {
  //         particles.push(new Particles(random(width/2-300,width/2+300),10,10)); 
  //       }, 5000);
  //   }
  // }

//   setInterval(() => {
//     for (var p = 0; p < particles.length; p++) {
//     particles[p].display();
//     if(particles[p].body.speed < 1) { particles[p].body.speed = 0; }
//   }
// }, 5000);

  // setTimeout(() => {
  //   for (var p = 0; p < particles.length; p++) {
  //   particles[p].display();
  //   if(particles[p].body.speed < 1) { particles[p].body.speed = 0; }
  // }
  // }, 5000);

  

}