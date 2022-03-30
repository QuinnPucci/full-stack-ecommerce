import { React } from 'react';

const addToCart = () => { document.querySelectorAll(".add-to-cart");  
 document.querySelectorAll('.add-to-cart-btn').forEach(function(addToCart) {  
   addToCartBtn.addEventListener('click', function() {  
     addToCartBtn.classList.add('added');  
     setTimeout(function(){  
       addToCartBtn.classList.remove('added');  
     }, 2001);  
   });  
 })
}
 
 export default addToCart;