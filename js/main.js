window.addEventListener('DOMContentLoaded', () => {

    let openBtn = document.querySelector('.gamburger'),
        closeBtn = document.querySelector('.exit'),
        siteNavContainer = document.querySelector('.site-nav__container'),
        sitNavNavigation = document.querySelector('.site-nav__navgations');

    openBtn.addEventListener('click', () => {
        siteNavContainer.classList.add('site-nav__container--active');
        sitNavNavigation.classList.add('site-nav__navgations--active');
    })

    closeBtn.addEventListener('click', () => {
        sitNavNavigation.classList.remove('site-nav__navgations--active');
        siteNavContainer.classList.remove('site-nav__container--active');
    })
})