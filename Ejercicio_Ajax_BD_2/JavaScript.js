const boton = document.getElementById("boton");

boton.addEventListener('click', () => {

    let selectAlign = document.getElementById("selectAlign").value;

    let gender = "";

    let masculino = document.getElementById("male");
    let femenino = document.getElementById("female");

    if(masculino.checked){
        gender='male';
    }else if(femenino.checked){
        gender='female';
    }else{
        gender="";
    }

    fetch(`marvel.php?Alignment=${selectAlign}&Gender=${gender}`)
        .then(
            res => res.ok
                ? Promise.resolve(res)
                : Promise.reject(res)
        )
        .then(res => res.json())
        .then(res => {

                for (user of res) {

                    let tabla = document.getElementById("superTabla");
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let name = document.createTextNode(user.Name);
                    td.appendChild(name);
                    tr.appendChild(td);
                    tabla.appendChild(tr);

                    let td2 = document.createElement("td");
                    let alignment = document.createTextNode(user.Alignment);
                    td2.appendChild(alignment);
                    tr.appendChild(td2);

                    let td3 = document.createElement("td");
                    let gender = document.createTextNode(user.Gender);
                    td3.appendChild(gender);
                    tr.appendChild(td3);

                }

        });

});

