// template_jkouxze
// service_mh608do
// wieleep3hO06Trmzp

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_mh608do',
            'template_jkouxze',
            event.target,
            'wieleep3hO06Trmzp'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }) .catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailable. Please contact me directly at nicolashorneneedsajob@gmail.com"
            )
        })
    }