    const time = setInterval(ponerFecha, 1000);
    
    function ponerFecha(){
        let d = new Date();
        let dia = d.getDate();
        let mes = d.getMonth()+1;
        let ano = d.getFullYear();
        let tiempo = d.toLocaleTimeString();
    
        document.getElementById("fecha").innerHTML = "Dia " + dia + " Mes " + mes + " Año " + ano + " Hora " + tiempo;
        document.getElementById("reloj").innerHTML = tiempo;
    }


    

    const boton = document.getElementById("boton");

    boton.addEventListener("click",()=>{

        const time2 = setInterval(ponerTiempo, 1000);

        function ponerTiempo(){
            let d = new Date();
            let tiempo = d.toLocaleTimeString();
    
            let hora = document.getElementById("hora").value;
            let minuto = document.getElementById("minuto").value;
            let segundo = d.getSeconds();
    
            if(hora == d.getHours() && minuto == d.getMinutes() && segundo == 00){
    
                let confirma = confirm("Es la hora de despertarse!! Son las " + hora + ":" + minuto);
    
                    if(confirma == true){
                        setTimeout(() => {
                            alert("Illo que te levantes sosio!!!");
                        }, 120000);
                    }else{
                        alert("A TRABAJAAR!!!");
                    }
            }
    
        }

    });


    