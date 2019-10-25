
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE:{nombre:string,edad:number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface vBatman {
  nombre:string;
  artesMarciales:Array<string>;
}

const batman : vBatman = {
  nombre: "Bruce Wayne",
  artesMarciales: ["Karate","Hakido","Wing Chun","Jiu-Jitsu"]
}

function validar(batman:vBatman){

  return batman.nombre + " " + batman.artesMarciales;

}

console.log(validar(batman));

// Convertir esta funcion a una funcion de flecha
const resultadoDoble = ( a:number, b:number ) =>{
  return (a + b) * 2;
}

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string='arco' ):string{
  let mensaje:string;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${arma}`;
  }

  return mensaje;

};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo {

  base:number;
  altura:number;


  constructor(base:number,altura:number){

    this.base = 0;
    this.altura = 0;

  }


 area = (base:number, altura:number):number => {
    
    let area:number;

    area = base * altura;

    return area;

  }

}
