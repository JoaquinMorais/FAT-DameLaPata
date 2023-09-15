import * as React from 'react';
import Swiper from 'swiper';
import 'swiper/css';


function CartaInd({name , img, swiperInstance}) {

    const swiper = new Swiper('.swiper', {
        loop: true,
     
       pagination: {
         el: '.swiper-pagination',
       },
     
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     
       scrollbar: {
         el: '.swiper-scrollbar',
       },
     });
   
  return (
    <div class="swiper-slide" style={{             
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '30px',
        paddingBottom: '20px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        color:'white',
        fontWeight:'bold',
        padding: '20px',
        width: '100%', 

  

    }}>{name}</div>
)
}

export default CartaInd;