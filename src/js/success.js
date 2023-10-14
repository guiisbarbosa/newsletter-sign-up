let queryEmail = window.location.search
let urlParams = new URLSearchParams(queryEmail);
let emailReceived = urlParams.get('email')

const resultText = document.getElementById('confirmation')

console.log(resultText);

resultText.innerHTML = 'A confirmation email has been sent to <span>' + decodeURIComponent(emailReceived) + '</span>. Please open it and click the button inside to confirm your subscrition.'

const btnBack = document.getElementById('btnBack')

btnBack.addEventListener('click', () =>{
    window.history.back()
})