const fs = require("fs");

function promesas(archivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, "utf-8", (data) => {
      const palabras = data.toLowerCase().match(/\w+/g);
      const palabrasRep = {};
      palabras.forEach((palabra) => {
        if (palabrasRep[palabra]) {
          palabrasRep[palabra]++;
        } else {
          palabrasRep[palabra] = 1;
        }
      });
      let comun = "";
      let frecuencia = 0;
      Object.keys(palabrasRep).forEach((palabra) => {
        if (palabrasRep[palabra] > frecuencia) {
          comun = palabra;
          frecuencia = palabrasRep[palabra];
        }
      });
      resolve(comun);
    });
  });
}

promesas("/prueba.txt")
  .then((comun) => {
    console.log(`La palabra más común es: ${comun}`);
  })
  .catch((err) => {
    console.error(`Ocurrió un error: ${err}`);
  });
