

    const users = [
        {id:1,nombre:'Pedraso'},
        {id:2,nombre:'Joselin'},
        {id:3,nombre:'ErMasca'}
    ];

    const getUser = (id,cb) =>{

        const user = users.find(user => user.id == id);
        if(!user) cb(`El usuario con el id ${id} no existe.`);
        else cb(null,user);
    };

    id = prompt('Introduzca un id');

    getUser(id,(err,user) =>{
        if(err) return console.log(err)
        console.log(`El nombre del usuario es ${user.nombre}`);
    });