    /**
     * Ejercicio Basico 1
     */
    
    const caja = document.getElementById("box");

    caja.addEventListener("mouseenter",() => {
        caja.classList.replace("box","box2");
        //caja.style.background = "green";
    });



    caja.addEventListener("mouseleave",() => {
        caja.classList.replace("box2","box");
        //caja.style.background = "red";
    });


    caja.addEventListener("mousedown",() => {
        console.log('Has pulsado la caja');
    });


    caja.addEventListener("mouseup",() => {
        console.log('Has soltado el boton izquierdo dentro de la caja.');
    })


    /**
     * Ejercicio Basico 2
     */


    const inpt = document.getElementById("inpt");

    inpt.addEventListener("keydown",() => {
        console.log('Has pulsado una tecla.');
    });


    inpt.addEventListener("keyup",() => {
        console.log('Has soltado una tecla.');
    });


    inpt.addEventListener("keydown",() =>{
        console.log("La tecla: " + String.fromCharCode(event.key));
    });


    /**
     * Ejercicio Basico 3
     */

    const inpt2 = document.getElementById("inpt2");
    const boton = document.getElementById("sub");

    
    boton.addEventListener('click',() =>{

        inpt2.addEventListener("keyup",(event)=>{
            console.log(event.key);
        });

    });


        /**
         * Ejercicio Basico 4
         */

        const galery = document.getElementById("galery");

        galery.addEventListener('click',(event) => {
           event.target.classList.replace("galery__item","galery__item2");
           console.log(event.target.textContent);
        });
        