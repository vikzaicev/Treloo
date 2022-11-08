/*==========burger========================= */
const hamb = document.querySelector(".nav__hamb");
const popup = document.querySelector(".popup");
const body = document.body;

console.log(hamb, body);

const menu = document.querySelector(".nav__list");
popup.append(menu.cloneNode(1));

hamb.addEventListener('click', openHamb);

function openHamb() {
    hamb.classList.toggle("active");
    popup.classList.toggle("open");
    body.classList.toggle("noscrol");
};

/*=================anim=====================*/

const animItems = document.querySelectorAll('.anim-items');
console.log(animItems);
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            }
            else {
                if (!animItem.classList.contains('anim-no'))
                    animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll()
    }, 400);
}


/*=============tab=2=============================*/
const serths = document.querySelectorAll('.serth__tab');


if (serths.length > 0) {

    for (index = 0; index < serths.length; index++) {
        const serth = serths[index];
        serth.addEventListener('click', tabb);
        function tabb() {
            for (index = 0; index < serths.length; index++) {
                const serth = serths[index];
                if (!serth.classList.contains('active')) {
                    serth.classList.add('active');
                }
                else {
                    if (serth.classList.contains('active'))
                        serth.classList.remove('active');
                }
            }
        }
    }

}

/*=============tab==>2=============================*/
const items = document.querySelectorAll('.special__item');

items.forEach(c => {
    c.addEventListener('click', () => {
        items.forEach(s => s.classList.remove('active'));
        c.classList.add('active');
    })
})

/*=============tab=================================*/
const items1 = document.querySelectorAll('.recommend__item');

items1.forEach(c => {
    c.addEventListener('click', () => {
        items1.forEach(s => s.classList.remove('active'));
        c.classList.add('active');
    })
})