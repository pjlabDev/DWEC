

const persona = [

    {id:1,nombre:'Pedraso',apellido:'Pérez'},
    {id:2,nombre:'Manuelake',apellido:'Garcia'},
    {id:3,nombre:'Killove',apellido:'Titan'}

];

const getPersona = (id,cb) =>{

    const person = persona.find(person => person.id == id);
    if(!person) cb(`Error, el usuario con el ${id} no existe aquí.`)
    else cb(null,person)

};

    let id = prompt('Introduzca un id');

    getPersona(id,(noExiste,person) => {

        if(noExiste) return console.log(noExiste)
        else return console.log(`El nombre del usuario es: ${person.nombre} ${person.apellido}`);

    });






