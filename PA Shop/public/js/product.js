let ratingStarInput = [...document.querySelectorAll('.rating-star')];
let addcart = document.querySelector('.cart-btn');
let product_info = document.querySelector('.product-section');
let basket = JSON.parse(localStorage.getItem("product")) ||[];

let search = basket.find((p) => p.id === x.id) || [];

console.log(search[0]);
product_info.innerHTML = `<img src="img/sofa-1.png" class="product-image" alt="">
<div class="product-detail">
    <h1 class="product-title">brown sofa</h1>
    <p class="product-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae dolorum sit natus?</p>
    <div class="ratings">
        <img src="img/fill star.png" class="star" alt="">
        <img src="img/fill star.png" class="star" alt="">
        <img src="img/fill star.png" class="star" alt="">
        <img src="img/fill star.png" class="star" alt="">
        <img src="img/no fill star.png" class="star" alt="">
        <span class="rating-count">4,032 reviews</span>
    </div>
    <p class="price">$ 499</p>
    <div class="btn-container">
        <button class="product-btn buy-btn">buy now</button>
        <a href="cart.html"><button class="product-btn cart-btn">add to cart</button></a>
    </div>
</div>`;

addcart.addEventListener('click', function() {
    alert('Your product added to cart');
})

ratingStarInput.map((star,index)  => {
    star.addEventListener('click', () => {
        for(let i = 0;i < 5;i++) {
            if(i <= index) {
                ratingStarInput[i].src = `img/fill star.png`;
            } else {
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})