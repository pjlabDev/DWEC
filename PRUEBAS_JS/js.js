
    const myW = window.open("www.google.com","google","width=300 , height=300");
    const boton = document.getElementById("sub");

    myW;

    boton.addEventListener('click',()=>{
        
        myW.moveBy(300,300);
    })
    