const canvasSketch = require('canvas-sketch');
// import utility library 
const math = require ('canvas-sketch-util/math');
const random = require ('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

/*
const degToRad = (degrees)=> {
  return degrees / 180 * Math.PI; 
}

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min; 
};

*/

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black'; 

    const cx = width * 0.5; 
    const cy = height * 0.5;
    
    const w = width * 0.01; 
    const h = height * 0.1; 

    let x, y; 

    const num = 42; 
    const radius = width * 0.3; 


    for (let i = 0; i < num; i++){

    const slice = math.degToRad(360 / num); 
    const angle = slice * i; 

    x = cx + radius * Math.sin(angle); 
    y = cy + radius * Math.cos (angle);

    // save state of current context
    context.save(); 
    // remaps the (0,0) loc on the canvas
    context.translate(x, y); 
    // useful because it sets the center point for the object we are moving
    // if we did not remap, the center of rotation would be the top left corner 
    // of the canvas and not the center of the square
    context.rotate(-angle); 
    // make drawing bigger or smaller
    // x, y params 
    // default val is 1
    context.scale(random.range(0.1, 2), random.range (0.2, 0.5)); 

    context.beginPath(); 
    context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h); 
    context.fill(); 
    
    // restore context to how it was at the save point
    // here so we dont rotate the position of the circle
    context.restore();
    /*
    context.translate(100, 400); 
    context.beginPath(); 
    context.arc(0,0, 50, 0, Math.PI * 2); 
    context.fill(); q
    */ 
      context.save(); 
      context.translate(cx, cy); 
      context.rotate(-angle);
      
      context.lineWidth = random.range(5, 20); 

      context.beginPath(); 
      context. arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5)); 
      context.stroke(); 

      context.restore(); 


    }
  };
};

canvasSketch(sketch, settings);
