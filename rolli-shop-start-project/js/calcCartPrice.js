function calcCartPrice(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements=cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');

    let price =0;

    priceElements.forEach(function(item){
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        const priceElements=cartWrapper.querySelectorAll('.price__currency');
       
        // console.log(amountEl);
        // console.log(cartWrapper);
        // console.log(priceElements);


         price += parseInt(amountEl.innerText)*parseInt(item.innerText);
         console.log(price);
         
         console.log(totalPriceEl);
         
    })
    totalPriceEl.innerText=price;

}