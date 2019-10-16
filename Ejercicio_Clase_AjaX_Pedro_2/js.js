

    const boton = document.getElementById("button");


    boton.addEventListener('click', () =>{
        let lista = document.getElementById("lista");
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {

                for(user of res){
                    
                    let li = document.createElement("li");
                    let texto = document.createTextNode(user.id + " - " + user.name);
                    li.appendChild(texto);
                    lista.appendChild(li);
                }
            });

        boton.disabled = true;

    });

