
    const carta = new Array(11);

    const palo = new Array("Oros","Copas","Bastos","Espadas");

    let total_jug = 0;

    let total_ban = 0;

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

            total_jug = total_jug + numeroalea;
            document.getElementById("tot_Jugador").value = total_jug;

        }else if(numeroalea > 7){

            total_jug = total_jug + 0.5;
            document.getElementById("tot_Jugador").value = total_jug;

        }

        if(total_jug > 7.5){

            puntos_jug = total_jug;
            document.getElementById("tot_Jugador").value = total_jug;
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


        document.getElementById("cartaBan").src = "imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg";
        document.getElementById("cartaBan").style = 'visible';

        if(numeroalea <= 7){

            total_ban = total_ban + numeroalea;
            document.getElementById("puntos_Ban").value = total_ban;

        }else if(numeroalea > 7){

            total_ban = total_ban + 0.5;
            document.getElementById("puntos_Ban").value = total_ban;

        }

        if(total_ban >= 7.5){

            puntos_ban = total_ban;
            document.getElementById("puntos_Ban").value = total_ban;
            recuento();
            clearTimeout(time);
        }

        document.getElementById("cartaChica2").innerHTML += "<img id='carban' alt='' src='imagenes/" + numeroalea + carta[numeroalea][palo] + ".jpg' style='height:130px;width:90px;margin-left:70px;'/>";

    }



    function recuento(){

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
    }


    function plantarse(){

        document.getElementById("trasera").src = "imagenes/trasera.jpg";
        document.getElementById("trasera").style.cursor = "default";
        document.getElementById("trasera").onclick = " ";
        puntos_jug = total_jug;
        total_jug = 0;
        total_ban = 0;
        juegaBanca();
        recuento();

    }


    function reiniciar(){
        
        location.reload();

    }