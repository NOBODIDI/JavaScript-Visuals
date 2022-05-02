const canvasSketch = require('canvas-sketch');

// create canvas elt of this size of px
const settings = {
/* dimensions: 'A4', 
  pixelsPerInch: 300,
  orientation: 'landscape',  
*/
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  // anonymous fct, called by library, gives properties
  return ({ context, width, height }) => {
    // white rectangle to draw on
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01; 

    let w = width * 0.1; 
    let h = height * 0.1; 
    let g = width * 0.03;
    const ix = width * 0.17; 
    const iy = height * 0.17; 
    const off = width * 0.02; 
    let x, y;  
    
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = ix +  (w + g) * i; 
        y = iy + (h + g) * j; 
        context.beginPath(); 
        context.rect(x, y, w, h); 
        context.stroke(); 
          
        // conditional statement
        if(/* i > 0 && i < 4 && j > 0 && j < 4*/
          Math.random() > 0.5){
          context.beginPath(); 
          context.rect(x + off/2, y + off/2, w - off, h - off); 
          context.stroke();
        }
      }
    }
  };
};

// calling library w/ sketch and settings
canvasSketch(sketch, settings);
