
//Recuperamos los formularios y los botones.

let form = document.getElementById("formulario");
let form2 = document.getElementById("formulario2");
let form3 = document.getElementById("formulario3");
let form4 = document.getElementById("formulario4");
let botonSubmit2 = document.getElementById("botSubmit2");
let botonSubmit3 = document.getElementById("botSubmit3");
let botonSubmit4 = document.getElementById("botSubmit4");

//Evento para el primer formulario que almacena en nuestra pagina web (incluso si la cerramos/recargamos y la volvemos a abrir) 
//los datos de los usuarios que se logueen, tambien con la fecha de alta.

    form.addEventListener('submit', (e) =>{

        e.preventDefault();

        let nick = document.getElementById("nickname").value;
        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("pass").value;
        let dni = document.getElementById("dni").value;
        let edad = document.getElementById("edad").value;
        let fec = new Date();

        let fechaAlta = fec.getDay() + "/" + fec.getMonth() + "/" + fec.getFullYear() + " " + fec.getHours() + ":" + fec.getMinutes() + ":" + fec.getSeconds();

        const users = {

            name:nombre,
            pass:password,
            nif:dni,
            anos:edad,
            fecha:fechaAlta

        };


        localStorage.setItem(nick,JSON.stringify(users));

    });

    //Evento del segundo formulario que borra todos los datos almacenados en la pagina web.

    form2.addEventListener('submit', (e) =>{

        e.preventDefault();

        localStorage.clear();

    });

    //Te muestra toda la información del usuario en una tabla html a partir de su nick

    form3.addEventListener('submit',(e)=>{

        e.preventDefault();

        let tabla = document.getElementById("tabla");

        let nick = document.getElementById("nickname").value;

        let persona = JSON.parse(localStorage.getItem(nick));

            let tr = document.createElement("tr");

            let td = document.createElement("td");
            let texto = document.createTextNode(persona.name);
            td.appendChild(texto);
            tr.appendChild(td);

            let td2 = document.createElement("td");
            let texto2 = document.createTextNode(persona.pass);
            td2.appendChild(texto2);
            tr.appendChild(td2);


            let td3 = document.createElement("td");
            let texto3 = document.createTextNode(persona.nif);
            td3.appendChild(texto3);
            tr.appendChild(td3);


            let td4 = document.createElement("td");
            let texto4 = document.createTextNode(persona.anos);
            td4.appendChild(texto4);
            tr.appendChild(td4);


            let td5 = document.createElement("td");
            let texto5 = document.createTextNode(persona.fecha);
            td5.appendChild(texto5);
            tr.appendChild(td5);

            tabla.appendChild(tr);

    });

    form4.addEventListener('submit', (e) =>{

        e.preventDefault();
     

    });





