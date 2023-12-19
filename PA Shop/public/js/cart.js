
        const counterMinus = document.getElementsByClassName('decrement');
        const counterPlus = document.getElementsByClassName('increment');
        const counts = document.getElementsByClassName('item-count');
        const input = document.getElementsByClassName('item-count');
        let a = document.querySelector('.checkout-box');
        let item = document.getElementsByClassName('cart-container');
        let remove = document.getElementsByClassName('sm-delete-btn');
        let cartlist = document.querySelector('.product-list');
        let cart_records = new Array();
        
        cart_records = JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[];
      
        let cartproduct = () => {
            return (cartlist.innerHTML = cart_records.map((x) =>{
                return `
                <div class="cart-container">
                <img src="" alt="">
                <div class="sm-proudct">
                    <img src="${x.img}" class="sm-product-img" alt="">
                    <div class="sm-text">
                        <p class="sm-product-name">${x.name}</p>
                        <p class="sm-des">short des</p>
                    </div>
                    <div class="item-counter">
                        <button class="counter-btn decrement">-</button>
                        <input type="text" name=""  class="item-count" id="" value="1">
                        <button class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price">${x.price}</p>
          <button class="sm-delete-btn"><img src="img/delete.png" alt=""></button>
                </div>
            </div>`
            }));
        }
        cartproduct();
        console.log(counterMinus);
    for(let i = 0; i < cart_records.length;i++)  {
            remove[i].addEventListener('click', function() {
            if(i == 0) {
                let arr = cart_records.splice(i+1,cart_records.length);
                localStorage.setItem("items",JSON.stringify(arr));
            } else if(cart_records.length >= 0) {
                let item = new Array();
                item = cart_records.splice(i,i);
                localStorage.setItem("items",JSON.stringify(cart_records));
            } else {
                localStorage.removeItem("items");
            }
            window.location.reload();
            })
            counterMinus[i].addEventListener('click', function() {
                if(input[i].value > 0) {
                    input[i].value--;
                } 
                if(input[i].value == 0) {
                    if(i == 0) {
                        let arr = cart_records.splice(i+1,cart_records.length);
                        localStorage.setItem("items",JSON.stringify(arr));
                    } else if(cart_records.length >= 0) {
                        let item = new Array();
                        item = cart_records.splice(i,i);
                        localStorage.setItem("items",JSON.stringify(cart_records));
                    } else {
                        localStorage.removeItem("items");
                    }
                    window.location.reload();
                }
            });
            counterPlus[i].addEventListener('click', () => {
                if(input[i].value < 9) {
                    input[i].value++;
                }
            });
        }
    

      