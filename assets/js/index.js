$(document).ready(function() {

    // required elements
    const imgPopup = $('.img-popup');
    const imgCont  = $('.container__img-holder');
    const popupImage = $('.img-popup img');
    const closeBtn = $('.close-btn');
  
    // handle events
    imgCont.on('click', function() {
      let img_src = $(this).children('.gallery_img').attr('src');
      imgPopup.children('img').attr('src', img_src);
      imgPopup.addClass('opened');
    });
  
    $(imgPopup, closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
    });
  
    popupImage.on('click', function(e) {
      e.stopPropagation();
    });
    
  });