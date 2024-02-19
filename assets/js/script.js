window.addEventListener("scroll", (_) => {
    let scroll = this.scrollY;
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', scroll > 300);
});