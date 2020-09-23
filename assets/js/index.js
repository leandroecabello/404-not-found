let prevUrl = document.referrer;
let buttonReturn = document.querySelector('#button')

buttonReturn.addEventListener('click', (e) => {
    e.preventDefault()
    if(prevUrl.indexOf(window.location.host) !== -1) {
        // Ir a la página anterior   
        return location.href = prevUrl
    }
    console.log('click')
})




