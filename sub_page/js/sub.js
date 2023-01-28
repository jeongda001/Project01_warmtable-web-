
import {metaSheet01, metaSheet02, metaSheet03,
   metaSheet04,metaSheet05, metaSheet06} from "./data.js"

// import{metaSheet01, metaSheet02} from "./data.js"



const swiper = new Swiper('.best_box .best_main .swiper',{
    slidesPerView:10,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay:2000,
      disableOnInteraction: false
    },
 
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
      }
  })//best_box click event(swiper)
  
  

const topBtn = document.querySelector('.top_btn')

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0 
  }) 
})  


window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  }else{
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
})//top_btn click event, scroll event (gsap)





// let cartImg = document.querySelector('.cart_icon')

// for(let i in cartImg){
//   cartImg[i].addEventListener('click',function(){
//     let newDiv = document.createElement('div')
//     let newImg = document
//   })
// }//장바구니 아이콘 클릭시 
// const innerSheet01 = document.querySelector('.inner_sheet01')


$('.sort01').click(function(){

  metaSheet01.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet01').html('')

    metaSheet01.forEach((a, i) =>{
      
      const sheet01 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet01[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet01[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet01[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet01[i].name}</p>
        <p class="sub_price">${metaSheet01[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet01').append(sheet01)
  
    })
})//inner_sheet01_기본 정렬 





$('.sort02').click(function(){
  metaSheet01.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet01').html('')

    metaSheet01.forEach((a, i) =>{
      
      const sheet01 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet01[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet01[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet01[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet01[i].name}</p>
          <p class="sub_price">${metaSheet01[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet01').append(sheet01)
    })
})//inner_sheet01_가격순 정렬 



$('.sort03').click(function(){

  metaSheet01.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet01').html('')

    metaSheet01.forEach((a, i) =>{
      
      const sheet01 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet01[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet01[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet01[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet01[i].name}</p>
        <p class="sub_price">${metaSheet01[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet01').append(sheet01)
  
    })
})//inner_sheet01_문자순 정렬 




$('.sort01').click(function(){

  metaSheet02.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet02').html('')

    metaSheet02.forEach((a, i) =>{
      
      const sheet02 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet02[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet02[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet02[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet02[i].name}</p>
        <p class="sub_price">${metaSheet02[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet02').append(sheet02)
  
    })
})//inner_sheet02_기본 정렬





$('.sort02').click(function(){

  metaSheet02.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet02').html('')

    metaSheet02.forEach((a, i) =>{
      
      const sheet02 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet02[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet02[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet02[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet02[i].name}</p>
          <p class="sub_price">${metaSheet02[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet02').append(sheet02)
    })
})//inner_sheet02_가격순 정렬 



$('.sort03').click(function(){

  metaSheet02.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet02').html('')

    metaSheet02.forEach((a, i) =>{
      
      const sheet02 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet02[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet02[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet02[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet02[i].name}</p>
        <p class="sub_price">${metaSheet02[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet02').append(sheet02)
  
    })
})//inner_sheet02_문자순 정렬 





$('.sort01').click(function(){

  metaSheet03.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet03').html('')

    metaSheet03.forEach((a, i) =>{
      
      const sheet03 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet03[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet03[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet03[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet03[i].name}</p>
        <p class="sub_price">${metaSheet03[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet03').append(sheet03)
  
    })
})//inner_sheet03_기본 정렬  





$('.sort02').click(function(){
  // alert('클릭')

  metaSheet03.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet03').html('')

    metaSheet03.forEach((a, i) =>{
      
      const sheet03 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet03[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet03[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet03[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet03[i].name}</p>
          <p class="sub_price">${metaSheet03[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet03').append(sheet03)
    })
})//inner_sheet03_가격순 정렬 



$('.sort03').click(function(){

  metaSheet03.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet03').html('')

    metaSheet03.forEach((a, i) =>{
      
      const sheet03 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet03[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet03[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet03[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet03[i].name}</p>
        <p class="sub_price">${metaSheet03[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet03').append(sheet03)
  
    })
})//inner_sheet03_문자순 정렬




$('.sort01').click(function(){

  metaSheet04.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet04').html('')

    metaSheet04.forEach((a, i) =>{
      
      const sheet04 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet04[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet04[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet04[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet04[i].name}</p>
        <p class="sub_price">${metaSheet04[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet04').append(sheet04)
  
    })
})//inner_sheet04_기본 정렬  





$('.sort02').click(function(){


  metaSheet04.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet04').html('')

    metaSheet04.forEach((a, i) =>{
      
      const sheet04 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet04[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet04[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet04[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet04[i].name}</p>
          <p class="sub_price">${metaSheet04[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet04').append(sheet04)
    })
})//inner_sheet04_가격순 정렬 



$('.sort03').click(function(){

  metaSheet04.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet04').html('')

    metaSheet04.forEach((a, i) =>{
      
      const sheet04 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet04[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet04[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet04[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet04[i].name}</p>
        <p class="sub_price">${metaSheet04[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet04').append(sheet04)
  
    })
})//inner_sheet04_문자순 정렬 






$('.sort01').click(function(){

  metaSheet05.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet05').html('')

    metaSheet05.forEach((a, i) =>{
      
      const sheet05 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet05[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet05[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet05[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet05[i].name}</p>
        <p class="sub_price">${metaSheet05[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet05').append(sheet05)
  
    })
})//inner_sheet05_기본 정렬  





$('.sort02').click(function(){

  metaSheet05.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet05').html('')

    metaSheet05.forEach((a, i) =>{
      
      const sheet05 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet05[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet05[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet05[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet05[i].name}</p>
          <p class="sub_price">${metaSheet05[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet05').append(sheet05)
    })
})//inner_sheet05_가격순 정렬 



$('.sort03').click(function(){

  metaSheet05.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet05').html('')

    metaSheet05.forEach((a, i) =>{
      
      const sheet05 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet05[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet05[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet05[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet05[i].name}</p>
        <p class="sub_price">${metaSheet05[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet05').append(sheet05)
  
    })
})//inner_sheet05_문자순 정렬 



$('.sort01').click(function(){

  metaSheet06.sort(function(a,b){
   if(a.id > b.id){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet06').html('')

    metaSheet06.forEach((a, i) =>{
      
      const sheet06 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet06[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet06[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet06[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet06[i].name}</p>
        <p class="sub_price">${metaSheet06[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet06').append(sheet06)
  
    })
})//inner_sheet06_기본 정렬 





$('.sort02').click(function(){
  // alert('클릭')

  metaSheet06.sort(function(a,b){
    return a.price - b.price
  });

  $('.inner_sheet06').html('')

    metaSheet06.forEach((a, i) =>{
      
      const sheet06 = `
      <div class="sheet_d">
        <a href="#!">
          <div class="sub_img">
          <img src="${metaSheet06[i].src}">

            <div class="sub_on">
              <div class="cart_icon"><img src="${metaSheet06[i].cartsrc}"></div>
              <div class="heart_icon"><img src ="${metaSheet06[i].heartsrc}"></div>
            </div>

          </div>
          <p class="sub_txt">${metaSheet06[i].name}</p>
          <p class="sub_price">${metaSheet06[i].price}<span>원</span></p>
        </a>
      </div>
      `

      $('.inner_sheet06').append(sheet06)
    })
})//inner_sheet06_가격순 정렬 



$('.sort03').click(function(){

  metaSheet06.sort(function(a,b){
   if(a.name > b.name){
    return 1
   }else{
    return -1
   }
  });


  $('.inner_sheet06').html('')

    metaSheet06.forEach((a, i) =>{
      
      const sheet06 = `
      <div class="sheet_d">
      <a href="#!">
        <div class="sub_img">
         <img src=" ${metaSheet06[i].src}">

          <div class="sub_on">
            <div class="cart_icon"><img src="${metaSheet06[i].cartsrc}"></div>
            <div class="heart_icon"><img src="${metaSheet06[i].heartsrc}"></div>
          </div>

        </div>
        <p class="sub_txt">${metaSheet06[i].name}</p>
        <p class="sub_price">${metaSheet06[i].price}<span>원</span></p>
      </a>
    </div>
      `
$('.inner_sheet06').append(sheet06)
  
    })
})//inner_sheet06_문자순 정렬 