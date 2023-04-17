let numeroMagico;
let intentos = 0;

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 20) + 1;
  intentos = 0;
  console.log(numeroMagico)
  alert("¡Comienza el juego! Adivina el número entre 1 y 20.");
}

function adivinarNumero() {
  const numeroUsuario = parseInt(document.getElementById("numeroInput").value);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 20) {
    alert("Por favor ingresa un número válido entre 1 y 20.");
    return;
  }

  intentos++;

  if (numeroUsuario === numeroMagico) {
    alert(
      `¡Felicitaciones! Adivinaste el número mágico ${numeroMagico} en ${intentos} intentos.`
    );
    comenzarJuego();
  } else if (numeroUsuario < numeroMagico) {
    alert("El número ingresado es menor al número mágico. ¡Sigue intentando!");
  } else {
    alert("El número ingresado es mayor al número mágico. ¡Sigue intentando!");
  }
}
