$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: true,
    slideTransition: 'linear',
    autoplay: false,
    navSpeed: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

function openEmail() {
    const email = "accou.ratten@gmail.com"; // Адрес электронной почты получателя
    const subject = "Piękna praca"; // Тема письма
    const body = "Wasz projekt otrzymuje 5 szanowni Państwo"; // Текст письма

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}