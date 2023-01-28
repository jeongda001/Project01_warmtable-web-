function openWindow(){
  let newWin = window.open('./sub_page/join.html','_blank')

  if(newWin == null){
      alert('팝업이 차단되었습니다. 새로고침해주세요')
  }
}//회원가입 openWindow()

function openWindow01(){
  let newWin = window.open('./sub_page/login.html','_blank')

  if(newWin == null){
      alert('팝업이 차단되었습니다. 새로고침해주세요')
  }
}//login openWindow()



const swiper = new Swiper('.visual_swiper .swiper',{
  slidesPerView:1,
  loop: true,
  autoplay: {
    delay:2500,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    clickable:true, 
  },

  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  }
 
})//visual_main (swiper) 











const banImgEls = document.querySelectorAll('.banner>div')
window.addEventListener('scroll', ()=> {
  if(window.scrollY >800){
    gsap.to(banImgEls[0], 0.5, {
      opacity: 1
    })
    gsap.to(banImgEls[1], 0.5, {
      delay: 0.7,
      opacity: 1
    })
  }
})//banner scroll event (gsap)

const bestProduct = document.querySelector('.best_product')
window.addEventListener('scroll', () =>{
  if(window.scrollY >900){
    gsap.to(bestProduct, 0.5, {
      delay: 1.5,
      opacity: 1
    })
  }
})//best_product scroll event (gsap)

const shopSuggest =document.querySelector('.shopping_suggest')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >1900){
    gsap.to(shopSuggest, 0.5, {
      delay: 1,
      opacity: 1
    })
  }
})//shoppind_suggest scroll event (gsap)

const instaBox = document.querySelector('.insta_box')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >2000){
    gsap.to(instaBox, 0.5, {
      delay: 2,
      opacity: 1
    })
  }
})







const bestswiper = new Swiper('.best_product .swiper',{
  slidesPerView:4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type:false,
  },
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  }

})




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