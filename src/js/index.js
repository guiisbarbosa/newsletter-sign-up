const inputEmail = document.querySelector('input[name="email"]')
const btnSignup = document.getElementById('signup')
const textRequired = document.querySelector('.text-required')
const form = document.getElementById('form')

btnSignup.addEventListener('click', function(event){
    event.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(inputEmail.value === ''){
        textRequired.classList.add('required')
        inputEmail.classList.add('required')
    } else if (emailRegex.test(inputEmail.value)){
        form.submit()
        const email = inputEmail.value
        
        window.location.href = "success-signup.html?email=" + encodeURIComponent(email)
    }
})