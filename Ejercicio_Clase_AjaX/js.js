

    const boton = document.getElementById("button");


    boton.addEventListener('click', () =>{

        let xhr;
        if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");

       xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


        xhr.addEventListener('load', (data) =>{
            let array = JSON.parse(data.target.response);

            for(user of array){

                let lista = document.getElementById("lista");
                let li = document.createElement("li");
                let texto = document.createTextNode(user.id + " - " + user.name);
                li.appendChild(texto);
                lista.appendChild(li);
            }
        });

        xhr.send();
        boton.disabled = true;

    });

