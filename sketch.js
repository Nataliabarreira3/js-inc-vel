function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    fill("orange");
    background("black");
    textSize(34)
    textAlign(CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
     let palavra = "Eu sou incrível demais";
      let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial, 200, 200);
      
      
   //   if (mouseX < 50){
  // let palavra = "E";
   //       text (palavra, 200, 200);
   // } else {
   //   let palavra = "Eu sou demais"
      // text (palavra, 200, 200);    
  //}
  }