

  //en esta parte de codigo generamos el numero y los simbolos a mostrar aleatorios
  let simbolos = ["♠", "♥", "♦", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let SimboloElegido = simbolos[Math.floor(Math.random() * 4)];
  console.log(SimboloElegido);
  let numeroElegido = numeros[Math.floor(Math.random() * numeros.length)];
  console.log(SimboloElegido);

  //en esta parte de aqui recogemos los id  de cada elemento 
  let simboloIzquierdo = document.querySelector("#simboloIzquierdo");
  let NumeroCentral = document.querySelector("#NumeroCentral");
  let simboloDerecho = document.querySelector("#simboloDerecho");

  //en esta  parte de aqui sobreescribimos los  elementos recogidos de id.
  //pero dependiendo del simbolo aplicamos un color negro o rojo a los numeros y 
  //simbolos de la carta

  if (SimboloElegido == "♠" || SimboloElegido == "♣") {
    simboloIzquierdo.innerHTML = SimboloElegido;
    simboloIzquierdo.style.color = "black";
    NumeroCentral.innerHTML = numeroElegido;
    NumeroCentral.style.color = "black";
    simboloDerecho.innerHTML = SimboloElegido;
    simboloDerecho.style.color = "black";
  }
  if (SimboloElegido == "♥" || SimboloElegido == "♦") {
    simboloIzquierdo.innerHTML = SimboloElegido;
    simboloIzquierdo.style.color = "red";
    NumeroCentral.innerHTML = numeroElegido;
    NumeroCentral.style.color = "red";
    simboloDerecho.innerHTML = SimboloElegido;
    simboloDerecho.style.color = "red";
  }

