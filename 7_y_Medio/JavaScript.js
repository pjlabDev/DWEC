
const carta = new Array(11);

const palo = new Array("Oros","Bastos","Copas","Espadas");

const repetida = new Array();

let total = 0;

let puntos_Jug;

let puntos_Ban;

    for (i = 1; i <= 11; i++) {
        carta[i] = palo;
    }


function pideCarta(){

    let numeroalea = parseInt((Math.random() * 10) + 1);
    let palo = parseInt(Math.random() * 4);

    for (j = 0; j <= repetida.length; j++) {

        document.getElementById("carjug").src = "imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg";
        document.getElementById("carjug").style.visibility = 'visible';

        if (numeroalea <= 7) {

            total = total + numeroalea;
        }
        else { total = total + 0.5; }

        if (total > 7.5) {

            puntos_Jug = total;
            document.getElementById("tot_Jug").value = total;
            recuento();

        }
        else document.getElementById("tot_Jug").value = total;

        document.getElementById("cartaChica").innerHTML += "<img id='carjug' alt='' src='imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg' style='height: 97px; width: 66px; margin-top: 10px; margin-left: 4px;' />"

    }

}
    function recuento(){

        let puntos_Ban = total;

        if(puntos_Jug > 7.5){

            document.getElementById("mensaje").textContent = "GANA LA BANCA";

        }



    }


    function plantarse() {
        document.getElementById("trasera").src = "imagenes/trasera.jpg";
        document.getElementById("trasera").style.cursor = "default";
        document.getElementById("trasera").onclick = " ";
        puntos_jugador = puntos;
        puntos = 0;
        //banca();
    }