// Nivel 1
// Ejercicio 6

// Función de validación de formulario
// La función validate() se encarga de validar los campos del formulario de registro.
// Entonces primero se obtienen los valores de los campos del formulario como nombre, apellido, e-mail, etc..
// Luego, verifica cada campo con ciertas reglas. Por ejemplo, el nombre y el apellido deben tener al menos 3 caracteres y solo
// pueden contener letras. El email debe ser un email válido.La contraseña debe tener entre 4 y 8 caracteres y contener al
// menos una letra y un número. La dirección debe tener al menos 3 caracteres y puede contener letras, números y ciertos
// caracteres especiales. El teléfono debe tener exactamente 9 dígitos.
// Si todos los campos son válidos, el formulario puede enviarse. Si no, se detendrá el envío del formulario.

function validate() {
    let error = 0; // Variable para contar errores.
   
    // obtener el valor del campo de datos y asignamos a variables.      
    let fName = document.getElementById("fName");     
    let fLastN = document.getElementById("fLastN");
    let fEmail = document.getElementById("fEmail");
    let fPassword = document.getElementById("fPassword");
    let fAddress = document.getElementById("fAddress");
    let fPhone = document.getElementById("fPhone");
    

    // obtener el valor de error y asignamos a variables.
    let errorName = document.getElementById("errorName"); 
    let errorLastN = document.getElementById("errorLastN");
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");
    let errorAddress = document.getElementById("errorAddress");
    let errorPhone = document.getElementById("errorPhone");
    
    // Quitamos lo signos de espacio en blanco de los valores de los campos.
    // el valor resultante se asigna a una nueva variable.
    let fNameValue = fName.value.trim();   
    let fLastNValue = fLastN.value.trim();
    let fEmailValue = fEmail.value.trim();
    let fPasswordValue = fPassword.value.trim();
    let fAddressValue = fAddress.value.trim();
    let fPhoneValue = fPhone.value.trim();
	
    // Expresiones regulares para validar los campos y asignarlos a variables.

    let letterRegex = /^[A-Za-z]+$/;   // Expresión regular para validar solo letras.
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un email.
    let passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])/; // Expresión regular para validar una contraseña.
    let addressRegex = /^[a-zA-Z0-9\s/,-]+$/; // Expresión regular para validar una dirección.
    let numberRegex = /^\d+$/; // Expresión regular para validar un número.

    // El resto del código vañida los campos del formulario con las expresiones regulares y 
    //muestra los mensajes de error si es necesario, verifica que se cumplan las condiciones de
    //validación y, si cualquiera de ellas no se cumple, evita el envío.

    let isValid = true;	
    
    if (fNameValue.length < 3 || !letterRegex.test(fNameValue)) {
        errorName.style.display = 'block';
        fName.classList.add("is-invalid");
        isValid = false;
    } else {
        errorName.style.display = 'none'
        fName.classList.remove("is-invalid");
    }

    if (fLastNValue.length < 3 || !letterRegex.test(fLastNValue)) {
        errorLastN.style.display = 'block'
        fLastN.classList.add("is-invalid");
        isValid = false;
    } else {
        errorLastN.style.display = 'none'
        fLastN.classList.remove("is-invalid");
    }

    if (fEmailValue.length < 3 || !emailRegex.test(fEmailValue)) {
        errorEmail.style.display = 'block';
        fEmail.classList.add("is-invalid");
        isValid = false
    } else {
        errorEmail.style.display = 'none';
        fEmail.classList.remove("is-invalid");
    }

    if (fPasswordValue.length < 4 || fPasswordValue.length > 8 || !passwordRegex.test(fPasswordValue)) {
        errorPassword.style.display = 'block';
        fPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        errorPassword.style.display = 'none';
        fPassword.classList.remove('is-invalid')
    }

    if (fAddressValue.length < 3 || !addressRegex.test(fAddressValue)) {
        errorAddress.style.display = 'block';
        fAddress.classList.add("is-invalid");
        isValid = false
    } else {
        errorAddress.style.display = 'none';
        fAddress.classList.remove("is-invalid");
    }

    if (fPhoneValue.length != 9 || !numberRegex.test(fPhoneValue)) {
        errorPhone.style.display = 'block';
        fPhone.classList.add("is-invalid");
        isValid = false;
    } else {
        errorPhone.style.display = 'none';
        fPhone.classList.remove("is-invalid");
    }

    if (!isValid) {
        onclick.preventDefault()
    }
}