

document.addEventListener('DOMContentLoaded', () =>{

  let userId = document.getElementById('user_id')
  let idbtn = document.getElementById('btn_id_chk')
  let userPw1 = document.getElementById('user_pw01')
  let userPw2 = document.getElementById('user_pw02')
  let pwBtn = document.getElementById('btn_pw')
  let userName = document.getElementById('user_name')
  let telSecond = document.getElementById('tel_second')
  let telThird = document.getElementById('tel_third')
  let cellPsecond = document.getElementById('cellp_second')
  let cellPthird =document.getElementById('cellp_third')
  let cellCode = document.getElementById('cell_code')


  idbtn.addEventListener('click', checkId)
  userPw1.addEventListener('change',checkPw)
  pwBtn.addEventListener('click',comparePw)
  telSecond.addEventListener('keyup',moveTelNo)
  cellPsecond.addEventListener('keyup',CellpNo)
  cellCode.addEventListener('click',Cellco)


  function checkId() {
    if(userId.value.length < 4 || userId.value.length > 16){
      document.querySelector('.id_message').textContent = '아이디는 4 ~ 16자로 입력 해주세요'
      userId.value = ''
      userId.focus()
    }else{
      document.querySelector('.id_message').textContent = '사용가능한 아이디입니다.'
    }
  }//checkId()

  function checkPw() {
    if(userPw1.value.length < 8 || userPw1.value.length >16) {
      document.querySelector('.pw_message').textContent = '패스워드는 8 ~ 16자로 입력 해주세요'
      userPw1.value = ''
      userPw1.focus()
    }else{
      document.querySelector('.pw_message').textContent = '사용 가능한 비밀번호입니다.'
      userPw2.focus()
    }
  }//checkPw()

  
  function comparePw(){
    if(userPw1.value != userPw2.value){
      document.querySelector('.pw02_message').textContent = '암호가 다릅니다. 다시입력하세요'
      // userPw2.value = ''
      userPw2.value = ''
      userPw2.focus()
    }else{
      document.querySelector('.pw02_message').textContent = '암호가 일치합니다.'
      userName.focus()
    }
  }//comparePw()


  function moveTelNo() {
    if(telSecond.value.length >=4) {
      telThird.focus()
    }
  }//moveTelNo() 일반전화



  function CellpNo() {
    if(cellPsecond.value.length >=4) {
      cellPthird.focus()
    }
  }//CellpNo() 휴대전화 



  function Cellco(){
    alert('인증번호가 전송되었습니다')
    
  }








  const totalAgree = document.getElementById('agrees_total')
  const agreeEls = document.querySelectorAll('.agree_el')

  const agree01 = document.getElementById('agrees_01')
  const agree02 = document.getElementById('agrees_02')
  const agree03 = document.getElementById('agrees_03')
  const agree04 = document.getElementById('agrees_04')


  totalAgree.addEventListener('click', totalCheck)
  agree01.addEventListener('click', agreeCheck)
  agree02.addEventListener('click', agreeCheck)
  agree03.addEventListener('click', agreeCheck)
  agree04.addEventListener('click', agreeCheck)

  function totalCheck() {
    if(totalAgree.checked) {
      
      agreeEls.forEach((agreeEl) => {
        agreeEl.checked = true
      })
    }else{
      agreeEls.forEach((agreeEl) => {
        agreeEl.checked = false
      })
    }
  }

  function agreeCheck() {
    if(agree01.checked && agree02.checked && agree03.checked && agree04.checked) {
      totalAgree.checked = true
    }else{
      totalAgree.checked = false 
    }
  }




})


