
let arrayPalos = new Array("Oros","Copas","Espadas","Bastos");
let arrayCartas = new Array(11);
let arrayCartasRepe = new Array();
let total_jug = 0;
let total_ban = 0;
let puntos_jug;
let puntos_ban;

    for(let i = 0; i<=11; i++){

        arrayCartas[i] = arrayPalos;

    };

    let boton = document.getElementById("buttonSubmit");

    function pideCarta(){

        let numAleatorio = parseInt((Math.random()*10)+1);
        let palos = parseInt((Math.random()*4));

        document.getElementById("cartaJug").src = "imagenes/" + numAleatorio + arrayCartas[numAleatorio][palos] + ".jpg";
        document.getElementById("cartaJug").style.visibility = 'visible';

        if(numAleatorio <= 7){

            total_jug = total_jug + numAleatorio;
            document.getElementById("puntosJug").value = total_jug;

        }else if(numAleatorio > 7){

            total_jug = total_jug + 0.5;
            document.getElementById("puntosJug").value = total_jug;

        }

        if(total_jug > 7.5){

            puntos_jug = total_jug;
            recuento();
            document.getElementById("trasera").src = "imagenes/trasera.jpg";
            document.getElementById("trasera").style.cursor = "default";
            document.getElementById("trasera").onclick = " ";
            juegaBanca();

        }

        document.getElementById("cartaChica").innerHTML += "<img id='cartaJug' alt='' src='imagenes/" + numAleatorio + arrayCartas[numAleatorio][palos] + ".jpg' style='height:130px;width:90px'/>"

    };


    let recuento = () =>{

        puntos_ban = total_ban;

        if(puntos_jug === 7.5 && puntos_ban === 7.5 || puntos_jug === puntos_ban){

            document.getElementById("mensaje").textContent = "EMPATE";

        }else if(puntos_jug === 7.5 && puntos_ban > 7.5 || puntos_ban > 7.5 && puntos_jug < puntos_ban){

            document.getElementById("mensaje").textContent = "GANA EL JUGADOR";

        }else if(puntos_jug > 7.5 && puntos_ban < puntos_jug){

            document.getElementById("mensaje").textContent = "GANA LA BANCA";

        }else if(puntos_jug <= 7.5 && puntos_ban > puntos_jug || puntos_ban === 7.5){

            document.getElementById("mensaje").textContent = "GANA LA BANCA";

        }else if(puntos_jug === 7.5){

            document.getElementById("mensaje").textContent = "GANA EL JUGADOR";

        }else if(puntos_ban === 7.5){

            document.getElementById("mensaje").textContent = "GANA LA BANCA";
            
        }

    };



    let juegaBanca = () =>{

        let numAleatorio = parseInt((Math.random()*10)+1);
        let palos = parseInt((Math.random()*4));

        puntos_ban = 0;

        let time = setTimeout(juegaBanca,1000);

        document.getElementById("cartaBan").src = "imagenes/" + numAleatorio + arrayCartas[numAleatorio][palos] + ".jpg";
        document.getElementById("cartaBan").style = 'visible';

        if(numAleatorio <= 7){

            total_ban = total_ban + numAleatorio;
            document.getElementById("puntosBan").value = total_ban;

        }else if(numAleatorio > 7){

            total_ban = total_ban + 0.5;
            document.getElementById("puntosBan").value = total_ban;

        }

        if(total_ban >= 7.5){

            puntos_ban = total_ban;
            document.getElementById("puntosBan").value = total_ban;
            recuento();
            clearTimeout(time);
        }

        document.getElementById("cartaChica2").innerHTML += "<img id='cartaBan' alt='' src='imagenes/" + numAleatorio + arrayCartas[numAleatorio][palos] + ".jpg' style='height:130px;width:90px;margin-left:70px;'/>";

    };




