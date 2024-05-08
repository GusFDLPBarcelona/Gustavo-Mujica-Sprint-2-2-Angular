

function validate() {
    let error = 0; 
   
        
    let fName = document.getElementById("fName");     
    let fLastN = document.getElementById("fLastN");
    let fEmail = document.getElementById("fEmail");
    let fPassword = document.getElementById("fPassword");
    let fAddress = document.getElementById("fAddress");
    let fPhone = document.getElementById("fPhone");
    

   
    let errorName = document.getElementById("errorName"); 
    let errorLastN = document.getElementById("errorLastN");
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");
    let errorAddress = document.getElementById("errorAddress");
    let errorPhone = document.getElementById("errorPhone");
    
   
    let fNameValue = fName.value.trim();   
    let fLastNValue = fLastN.value.trim();
    let fEmailValue = fEmail.value.trim();
    let fPasswordValue = fPassword.value.trim();
    let fAddressValue = fAddress.value.trim();
    let fPhoneValue = fPhone.value.trim();
	
  

    let letterRegex = /^[A-Za-z]+$/;   
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])/; 
    let addressRegex = /^[a-zA-Z0-9\s/,-]+$/; 
    let numberRegex = /^\d+$/; 

    

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