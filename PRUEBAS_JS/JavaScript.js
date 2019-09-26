

   
    
    //const win2 = window.moveTo(300,200);

    const button = document.getElementById("button");
    const boton = document.getElementById("boton");
    

    button.addEventListener('click',() => {
        win = window.open("","google","width=200,height=200");
        win.document.write("<p>This is my page tolo</p>");
    });


    boton.addEventListener('click', () =>{
        window.moveTo(700,200);
    });