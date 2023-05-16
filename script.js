let tires = parseInt(prompt("Ingrese numero de llantas"));
let meanOftransportation = prompt("Ingrese modo de transporte").toLowerCase();

console.log(tires);

if (tires == NaN) {
  alert("Ingresa numero de llantas");
} else {
  if (meanOftransportation == "") {
    alert("Ingrese modo de transporte, ejemplo terrestre");
  } else if (meanOftransportation != "aereo" || "acuatico" || "terrestre") {
    alert("Ingrese un medio de transporte");
  } else if (tires == NaN) {
    alert("Ingrese numero de llantas");
  } else if (tires == 4 && meanOftransportation == "terrestre") {
    alert("Carro");
  } else if (tires > 4 && meanOftransportation == "terrestre") {
    alert("Camion");
  } else if (tires == 2 && meanOftransportation == "terrestre") {
    alert("Moto o Vicicleta");
  } else if (tires == 1 && meanOftransportation == "terrestre") {
    alert("Monociclo");
  } else if (tires == 0 && meanOftransportation == "acuatico") {
    alert("Barco");
  } else if (tires == 20 && meanOftransportation == "aereo") {
    alert("Avion");
  }
}
