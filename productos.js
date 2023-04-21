const fs = require("fs");

fs.readFile("ventas.txt", "utf8", (error, datos) => {
  if (error) {
    console.error("Se ha generado un error al leer el archivo");
  } else {
    const compradores = datos.split("\n");
    let total = 0;
    let ventas = [];

    compradores.forEach((comprador) => {
      const compra = comprador.split(",");
      const nombre = compra[0].trim();
      const cantidad = parseInt(compra[1]);
      const precio = parseFloat(compra[2]);
      const subtotal = cantidad * precio;
      total += subtotal;
      ventas.push({
        nombre: nombre,
        cantidad: cantidad,
        precio: precio,
        subtotal: subtotal,
      });
    });

    ventas.forEach((venta) => {
      console.log(`${venta.nombre}, ${venta.cantidad}, $${venta.precio.toFixed(2)}`);
    });

    console.log("===========================");
    console.log(`VENTA TOTAL  $${total.toFixed(2)}`);
  }
});

