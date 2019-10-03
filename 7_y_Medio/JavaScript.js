
    const carta = new Array(11);

    const palo = new Array("Oros","Copas","Bastos","Espadas");

    let total = 0;

    let puntos_jug;

    let puntos_ban;

    for (i = 0; i<= 11; i++) {
        
        carta[i] = palo;

    }


    function pideCarta(){

        const numeroalea = parseInt((Math.random()*10)+1);
        const palo = parseInt(Math.random()*4);

        document.getElementById("carjug").src = "imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg";
        document.getElementById("carjug").style.visibility = 'visible';

        if(numeroalea <= 7){

            total = total + numeroalea;
            document.getElementById("tot_Jugador").value = total;

        }else if(numeroalea > 7){

            total = total + 0.5;
            document.getElementById("tot_Jugador").value = total;

        }

        if(total > 7.5){

            puntos_jug = total;
            document.getElementById("tot_Jugador").value = total;
            recuento();
            document.getElementById("trasera").src = "imagenes/trasera.jpg";
            document.getElementById("trasera").style.cursor = "default";
            document.getElementById("trasera").onclick = " ";
            juegaBanca();

        }


        document.getElementById("cartaChica").innerHTML += "<img id='carjug' alt='' src='imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg' style='height:130px;width:90px'/>"

    }

    function juegaBanca(){

        puntos_ban = 0;

        let time = setTimeout(juegaBanca,1000);
        let numeroalea = parseInt((Math.random()*10)+1);
        let palo = parseInt(Math.random()*4);


        document.getElementById("carban").src = "imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg";
        document.getElementById("carban").style = 'visible';

        if(numeroalea <= 7){

            total = total + numeroalea;
            document.getElementById("tot_Banca").value = total;

        }else if(numeroalea > 7){

            total = total + 0.5;
            document.getElementById("tot_Banca").value = total;

        }

        if(total >= 7.5){

            puntos_ban = total;
            document.getElementById("tot_Banca").value = total;
            recuento();
            clearTimeout(time);
        }

        document.getElementById("cartaChica2").innerHTML += "<img id='carban' alt='' src='imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg' style='height:130px;width:90px;margin-left:70px;'/>";

    }



    function recuento(){

        puntos_ban = total;

        if(puntos_jug === 7.5 && puntos_ban === 7.5){

            document.getElementById("mensaje").textContent = "EMPATE";

        }else if(puntos_jug === 7.5 && puntos_ban > 7.5 || puntos_ban > 7.5 && puntos_jug < puntos_ban){

            document.getElementById("mensaje").textContent = "GANA EL JUGADOR";

        }else if(puntos_jug > 7.5 && puntos_ban < puntos_jug){
            document.getElementById("mensaje").textContent = "GANA LA BANCA";
        }else if(puntos_jug <= 7.5 && puntos_ban > puntos_jug || puntos_ban === 7.5){
            document.getElementById("mensaje").textContent = "GANA LA BANCA";
        }
    }


    function plantarse(){

        document.getElementById("trasera").src = "imagenes/trasera.jpg";
        document.getElementById("trasera").style.cursor = "default";
        document.getElementById("trasera").onclick = " ";
        puntos_jug = total;
        total = 0;
        juegaBanca();
        recuento();

    }


    function reiniciar(){
        
        location.reload();

    }