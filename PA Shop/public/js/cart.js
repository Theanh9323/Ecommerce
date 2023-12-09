
    const counterMinus = document.querySelectorAll('.decrement');
    const counterPlus = document.querySelectorAll('.increment');
    const counts = document.querySelectorAll('.item-count');
    const input = document.querySelectorAll('.item-count');



   
      
        counterMinus[0].addEventListener('click', function() {
            if(input[0].value > 1) {
                input[0].value--;
            }
        });
        counterPlus[0].addEventListener('click', () => {
            if(input[0].value < 9) {
                input[0].value++;
            }
        });
        counterMinus[1].addEventListener('click', function() {
            if(input[1].value > 1) {
                input[1].value--;
            }
        });
        counterPlus[1].addEventListener('click', () => {
            if(input[1].value < 9) {
                input[1].value++;
            }
        });


