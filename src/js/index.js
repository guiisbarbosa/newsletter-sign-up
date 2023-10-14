const inputEmail = document.querySelector('input[name="email"]')
const btnSignup = document.getElementById('signup')
const textRequired = document.querySelector('.text-required')
const form = document.getElementById('form')

inputEmail.addEventListener('input', () => {
    if(validEmail = true && inputEmail.value !== '') {
        textRequired.classList.remove('required')
        inputEmail.classList.remove('required')
    }
})

btnSignup.addEventListener('click', function(event){
    event.preventDefault()

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    var validEmail = validateEmail(inputEmail.value)

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(validEmail == false){
        textRequired.classList.add('required')
        inputEmail.classList.add('required')
    } else if (emailRegex.test(inputEmail.value)){
        form.submit()
        const email = inputEmail.value
        
        window.location.href = "success-signup.html?email=" + encodeURIComponent(email)
    }
})