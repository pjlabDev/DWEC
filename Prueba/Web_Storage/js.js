const form = document.getElementById("formulario");

    form.addEventListener('submit', (e) =>{

        e.preventDefault();

        sessionStorage.setItem('User','Pedraso');

    });

    /*form.addEventListener('submit', (e)=>{

        e.preventDefault();

        const person = {
            name: 'Pedraso',
            email: 'pedraso@gmail.com'
        }

        sessionStorage.setItem('person', JSON.stringify(person));

    });*/

    form.addEventListener('submit', (e) =>{

        let user = document.getElementById("keys").value;

        e.preventDefault();
    
        sessionStorage.clear();

        /*console.log(sessionStorage.getItem(user));*/

    });
















