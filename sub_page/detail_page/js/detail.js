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
