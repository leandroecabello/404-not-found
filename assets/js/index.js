let prevUrl = document.referrer;
let buttonReturn = document.querySelector('#button')

console.log(prevUrl)
console.log(prevUrl.indexOf(window.location.host) === -1)
buttonReturn.addEventListener('click', (e) => {
    e.preventDefault()
    if(prevUrl.indexOf(window.location.host) === -1) {
        // Ir a la página anterior   
        return location.href = prevUrl
    }
})




