const boton = document.getElementById("bsubmit");

    boton.addEventListener('click', () =>{

            fetch('Images/mar.jpg')
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.blob())
            .then(res => {

                let div = document.getElementById("imagen");
                let img = document.createElement("img");

                img.src = URL.createObjectURL(res);

                div.appendChild(img);

            });

        });

const boton2 = document.getElementById("bsubmit2");

        boton2.addEventListener('click',()=>{
            
            fetch('Images/Pedro_José_Pérez_Labrada_DNS.pdf')
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.blob())
            .then(res => {

                let div = document.getElementById("imagen");
                let img = document.createElement("iframe");

                img.src = URL.createObjectURL(res);

                div.appendChild(img);

            });

        });