const navSlide = () => {
        const navMobile = document.querySelector('.nav-mobile')
        const navBar = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')

        navMobile.addEventListener('click', () =>{
                navBar.classList.toggle('nav-active')
                navMobile.classList.toggle('navClose')
        })
}

navSlide()