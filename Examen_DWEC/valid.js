
const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password)) console.log('password válido')
    else console.log('password incorrecto')
}



const formulario = document.getElementById("formulario");
const pass = document.getElementById("pass");

const formIsValid = {
    
    pass: false

}

pass.addEventListener('change', (e) => {
    let pssValue = document.getElementById("pass").value;
    if(validatePasswordComplex(pssValue) == "password válido"){
        formIsValid.password = true;
    }
});

