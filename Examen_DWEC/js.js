const boton = document.getElementById("boton");
let select = document.getElementById("select");


//Creamos un evento para el boton Consulta.

boton.addEventListener('click', () =>{

    //Recorremos el archivo de usuarios

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {

        //Si el select está vacío, le introducimos los options con el valor del nombre de los usuarios que están en el archivo que estamos recorriendo arriba

        if(select.length <= 0){

            //Hacemos un foreach de valores que nos irá introduciendo en user, todos los valores que contenga res

            for(user of res){

                //Creamos el elemento option, le añadimos el nombre del usuario y lo añadimos al select.

                let opt = document.createElement("option");
                let content = document.createTextNode(user.name);
                opt.appendChild(content);
                select.appendChild(opt);
            }

            //Si no está vacío, entonces recuperamos los valores del select, en este caso los nombres.
            //En idSelect guardamos el objeto completo a partir del nombre que tenemos en nuestro select, haciendo uso de find, buscamos en nuestro archivo
            //que los nombres sean iguales.

        }else{

            let selectValue = document.getElementById("select").value;

            let idSelect = res.find(idSelect => idSelect.name == selectValue);
            
            //Por ultimo, volvemos a recorrer, pero esta vez buscando específicamente el id del usuario que queremos sacar.

            fetch(`https://jsonplaceholder.typicode.com/users?id=${idSelect.id}`)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {            

                //volvemos a meter los valores de res en una variable

                for(user of res){

                    //Concatenamos los diferentes valores que contiene address (direccion).

                    let address = user.address.street + "-" + user.address.suite + "-" + user.address.city + "-" + user.address.zipcode;

                    //Introducimos en nuestra tabla a nuestro usuario.

                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let id = document.createTextNode(user.id);
                    td.appendChild(id);
                    tr.appendChild(td);

                    let td2 = document.createElement("td");
                    let nombre = document.createTextNode(user.name);
                    td2.appendChild(nombre);
                    tr.appendChild(td2);

                    let td3 = document.createElement("td");
                    let username = document.createTextNode(user.username);
                    td3.appendChild(username);
                    tr.appendChild(td3);

                    let td4 = document.createElement("td");
                    let email = document.createTextNode(user.email);
                    td4.appendChild(email);
                    tr.appendChild(td4);

                    let td5 = document.createElement("td");
                    let direccion = document.createTextNode(address);
                    td5.appendChild(direccion);
                    tr.appendChild(td5);

                    let td6 = document.createElement("td");
                    let telefono = document.createTextNode(user.phone);
                    td6.appendChild(telefono);
                    tr.appendChild(td6);
                    tabla.appendChild(tr);



                }

                



            });
        }

    });

});



