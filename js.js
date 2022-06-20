const form = document.querySelector('div.edit-form')
const button = document.querySelector('button.btn')
const buttonContacts = document.querySelector('button.contacts__button')
const closeForm = document.querySelector('button.edit-form__close');
const formWrapper = document.querySelector('form.edit-form__wrapper')

button.addEventListener('click', function () {
    event.preventDefault();
    form.classList.add('edit-form_active');
});

buttonContacts.addEventListener('click', function () {
    event.preventDefault();
    form.classList.add('edit-form_active');
});



closeForm.addEventListener('click', function close() {
    form.classList.remove('edit-form_active');
    formWrapper.reset();
})


const lastScroll = 100;
const defaultOffset = 200;
const header = document.querySelector('header.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('_active');

window.addEventListener('scroll', () => {

    if (scrollPosition() > lastScroll && !containHide()) {

        header.classList.add('_active')
    }

    else if (scrollPosition() < 1 && containHide()) {

        header.classList.remove('_active')
    }
})

const recall = document.querySelector('p.recall');
const recallButton = document.querySelector('button.edit-form__btn');

recallButton.addEventListener('click', function () {
    form.classList.remove('edit-form_active');
})


recallButton.addEventListener('click', function () {
    recall.classList.add('recall_active')
    formWrapper.reset();
    window.addEventListener('scroll', () => {
        recall.classList.remove('recall_active')
    })
})
const navbarToggler = document.querySelector('button.navbar-toggler')



navbarToggler.addEventListener('click', function () {
    header.classList.add('_active')
})


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },

    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch')
    let menuArrows = document.querySelectorAll('.menu__arrow')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index]
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }

} else {
    document.body.classList.add('_pc')
}

// burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {

    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

//scroll click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks)

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            e.preventDefault()
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight + 100;


            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })

        }
    }


}