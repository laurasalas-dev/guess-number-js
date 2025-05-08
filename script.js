let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");
let ciudad = prompt("¿De dónde eres?");


edad < 18 && alert("Bienvenido! , Eres menor de edad 👶");

edad >= 18 && alert("Bienvenido! , Eres mayor de edad 👩‍🦰");

alert(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);