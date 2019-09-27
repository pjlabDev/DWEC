
const img = document.getElementById("trasera");

const img2 = document.getElementById("traser2");

const array = new Array();

array[0] = "imagenes/1Bastos.jpg";
arary[1] = "imagenes/1Copas.jpg";
array[2] = "imagenes/1Espadas.jpg";
array[3] = "imagenes/1Oro.jpg";
arary[4] = "imagenes/2Bastos.jpg";
array[5] = "imagenes/2Copas.jpg";
array[6] = "imagenes/2Espadas.jpg";
arary[7] = "imagenes/2Oros.jpg";
array[8] = "imagenes/3Bastos.jpg";
array[9] = "imagenes/3Copas.jpg";
arary[10] = "imagenes/3Espadas.jpg";
array[11] = "imagenes/3Oros.jpg";
array[12] = "imagenes/4Bastos.jpg";
array[13] = "imagenes/4Copas.jpg";
arary[14] = "imagenes/4Espadas.jpg";
array[15] = "imagenes/4Oros.jpg";
array[16] = "imagenes/5Bastos.jpg";
arary[17] = "imagenes/5Copas.jpg";
array[18] = "imagenes/5Espadas.jpg";
array[19] = "imagenes/5Oros.jpg";
arary[20] = "imagenes/6Bastos.jpg";
array[21] = "imagenes/6Copas.jpg";
array[22] = "imagenes/6Espadas.jpg";
arary[23] = "imagenes/6Oros.jpg";
array[24] = "imagenes/7Bastos.jpg";
array[25] = "imagenes/7Copas.jpg";
array[26] = "imagenes/7Oros.jpg";
arary[27] = "imagenes/7Espadas.jpg";
array[28] = "imagenes/8Bastos.jpg";
array[29] = "imagenes/8Oro.jpg";
arary[30] = "imagenes/8Espadas.jpg";
array[31] = "imagenes/8Copas.jpg";
array[32] = "imagenes/9Espadas.jpg";
arary[33] = "imagenes/9Oros.jpg";
array[34] = "imagenes/9Bastos.jpg";
array[35] = "imagenes/9Copas.jpg";
arary[36] = "imagenes/10Espadas.jpg";
array[37] = "imagenes/10Oros.jpg";
array[38] = "imagenes/10Bastos.jpg";
array[39] = "imagenes/10Copas.jpg";


function rand(n){

    return(Math.floor(Math.random() * n + 1 ));

};

img.addEventListener('click',(event)=>{

    event.document.getElementById("img").src = array[rand(10)-1];

});
