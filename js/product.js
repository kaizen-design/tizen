const APP = {
  init: () => {
    const $basket = document.querySelector('.basket');
    const $productPreview = document.querySelector('.product-preview-slider');
    const $modalEl = document.querySelector('#productModal');
    const $productModal = new bootstrap.Modal($modalEl);
    const $closeModalBtn = document.querySelector('#productModal .back-btn');
    const $backBtn = document.querySelector('footer .back-btn');
    const $addToCartBtn = document.querySelector('.add-to-cart-btn');
    const $minusBtn = document.getElementById('minusBtn');
    const $plusBtn = document.getElementById('plusBtn');
    const $quantity = document.getElementById('quantity');
    
    new Swiper($productPreview, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      effect: "fade",
      pagination: {
        el: `.product-preview-slider .swiper-pagination`,
        type: "bullets",
        //clickable: true
      },
      autoplay: {
        delay: 5000,
      },
    });

    new Swiper(document.querySelector('.product-modal-slider'), {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      effect: "fade",
      pagination: {
        el: `.product-modal-slider .swiper-pagination`,
        type: "bullets",
        //clickable: true
      },
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 5000,
      },
    });
    
    $productPreview.setAttribute('tabindex', '0');
    $productPreview.focus();
    $productPreview.classList.add('active');

    $productPreview.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 37: //LEFT arrow
          e.preventDefault();
          
          break;
        case 38: //UP arrow
          $productPreview.classList.remove('active');
          $basket.focus();
          break;
        case 39: //RIGHT arrow
          e.preventDefault();
          
          break;
        case 40: //DOWN arrow
          e.preventDefault();
          $productPreview.classList.remove('active');
          $addToCartBtn.focus();
          break;
        case 13: //OK button
          e.preventDefault();
          $productModal.show();
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $addToCartBtn.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 37: //LEFT arrow
          e.preventDefault();
          if ($plusBtn) {
            $plusBtn.focus();
          }
          break;
        case 38: //UP arrow
          $productPreview.classList.add('active');
          $productPreview.focus();
          break;
        case 39: //RIGHT arrow
          e.preventDefault();
          $backBtn.focus();
          break;
        case 40: //DOWN arrow
          e.preventDefault();
          
          break;
        case 13: //OK button
          e.preventDefault();
          console.log('Added to cart')
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $plusBtn.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 37: //LEFT arrow
          e.preventDefault();
          if ($minusBtn) {
            $minusBtn.focus();
          }
          break;
        case 38: //UP arrow
          $productPreview.classList.add('active');
          $productPreview.focus();
          break;
        case 39: //RIGHT arrow
          e.preventDefault();
          $addToCartBtn.focus();
          break;
        case 13: //OK button
          e.preventDefault();
          const value = parseInt($quantity.textContent);
          $quantity.innerText = value + 1;
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $minusBtn.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 38: //UP arrow
          $productPreview.classList.add('active');
          $productPreview.focus();
          break;
        case 39: //RIGHT arrow
          e.preventDefault();
          $plusBtn.focus();
          break;
        case 13: //OK button
          e.preventDefault();
          const value = parseInt($quantity.textContent);
          if (value > 1) {
            $quantity.innerText = value - 1;
          }
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $basket.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 13: //OK button
          console.log('Go to basket')
          break;
        case 40: //DOWN arrow
          $productPreview.focus();
          $productPreview.classList.add('active');
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $modalEl.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 13: //OK button
          break;
        case 38: //UP arrow
          e.preventDefault();
          $modalEl.focus();
          break;  
        case 40: //DOWN arrow
          $closeModalBtn.focus();
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $closeModalBtn.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 13: //OK button
          e.preventDefault();
          $productModal.hide();
          $productPreview.focus();
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

    $backBtn.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
        case 37: //LEFT arrow
          e.preventDefault();
          if ($addToCartBtn) {
            $addToCartBtn.focus();
          }
          break;
        case 38: //UP arrow
          e.preventDefault();
          //$products[activeProductIndex].classList.add('active');
          //$products[activeProductSlide].focus();
          break;
        case 13: //OK button
          e.preventDefault();
          window.location.href = $backBtn.getAttribute('href');
          break;
        default:
          console.log('Key code : ' + e.keyCode);
    		  break;
    	}
    });

  },
  
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  APP.init();
} else {
  document.addEventListener("DOMContentLoaded", APP.init);
}