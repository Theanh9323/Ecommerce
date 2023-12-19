// const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})

const collageIage = [...document.querySelectorAll('.collage-img')]
collageIage.map((item,i) => {
    item.addEventListener('mouseover',() => {
        collageIage.map((image,index) => {
            if(index != i) {
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })
    item.addEventListener('mouseleave', () => {
        collageIage.map((image, index) => {
            image.style = null;
        })
    })
})


