

$(function(){
    $('#user_id').focus();

    let id = 'warmtable';
    let pw = '1234';
    let userId;
    let userPw;

    $('#btn_login').click(function(){

      userId = $('#user_id').val();
      userPw = $('#user_pw').val();
      
      if(userId==id){
            if(userPw==pw){
                alert(userId + '님 warmtable 방문을 환영합니다♥');
                $('#btn_x').click(); 
            }else{
                alert('비밀번호가 일치하지 않습니다.');
                $('#user_pw').val('').focus();
            }
        }else{
            alert('등록되지 않은 아이디입니다.');
            $('#user_id').val('').focus(); 
        }//if_block
        $('#user_pw').val('');  
    })//btn_login_click_event
})//회원_login




$(function(){
    $('#order_name').focus();

    let name = '홍길동';
    let number = '2023'
    let or_pw = '1234'

    let userName;
    let userNumber;
    let userOrder_pw;


    $('#btn_confirm').click(function(){

        userName = $('#order_name').val();
        userNumber = $('#order_number').val();
        userOrder_pw = $('#order_pw').val();

        if(userName==name){
            if(userNumber==number){
                if(userOrder_pw==or_pw){
                    alert(userName +'님 주문하신 상품은 배송 준비중 입니다.');
                    $('#btn_x').click();
                }else{
                    alert('비회원주문 비밀번호가 일치하지 않습니다.');
                    $('#order_pw').val('').focus();
                    
                }
            }else{
                alert('주문번호가 일치하지 않습니다.');
                $('#order_number').val('').focus();
            }
        }else{
            alert('주문자명이 조회되지 않습니다.');
            $('#order_name').val('').focus();
           
        }//if_block
        $('#order_pw').val(''); 
      
    })//btn_confirm_click_event
})//비회원 배송조회
