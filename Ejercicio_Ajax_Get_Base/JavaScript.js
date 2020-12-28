

    const boton = document.getElementById("boton");


    boton.addEventListener('click', () =>{
        let select = document.getElementById("select");
            fetch('marvel.php')
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(console.log(res), res => {

                if(select == null){

                    for(user of res){
                    
                        let option = document.createElement("option");
                        let texto = document.createTextNode(user.name);
                        option.appendChild(texto);
                        select.appendChild(option);
                    }

                }else{

                    for(user of res){

                        let tabla = document.getElementById("superTabla");
                        let tr = document.createElement("tr");
                        let td = document.createElement("td");
                        let name = document.createTextNode(user.name);
                        td.appendChild(name);
                        tr.appendChild(td);
                        tabla.appendChild(tr);
                        let td2 = document.createElement("td");
                        let gender = document.createElement(user.gender);
                        td2.appendChild(gender);
                        tr.appendChild(td2);
                        let td3 = document.createElement("td");
                        let fightSkills = document.createTextNode(user.fightingSkills);ç
                        td3.appendChild(fightSkills);
                        tr.appendChild(td3);
    
                    }

                }

                
            });

        boton.disabled = true;

    });

