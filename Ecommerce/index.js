const hamburgerButton = document.getElementById('hamburger')
const navbar = document.getElementById('navbar')

function toggleButton() {
    navbar.classList.toggle('show')
    console.log('clicked')
}

hamburgerButton.addEventListener('click', toggleButton)




