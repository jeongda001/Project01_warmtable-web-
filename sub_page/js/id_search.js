
$(function(){

    let name = '홍길동';
    let email = 'warmtable@naver.com';
    let userName;
    let userEmail;

    
    $('#btn_submit').click(function(){
        userName = $('#user_name').val(); 
        userEmail = $('#user_email').val();

        if(userName==name){
            if(userEmail==email){
                alert(userName +'님의 아이디는 warmtable 입니다.')
            }else{
                alert(userName +'님 이메일항목이 일치하지 않습니다.')
                $('#user_email').val('').focus(); 
            }
        }else{
            alert('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.')
            $('#user_name').val('').focus(); 
        }
       
    })//btn_submit click_event
})//아이디 찾기 - 이메일







$(function(){

    let name = '홍길동';
    let phoneNum01 = '010';
    let phoneNum02 = '1111';
    let phoneNum03 = '2222';

    let userName;
    let num01;
    let num02;
    let num03;


    $('#btn_submit01').click(function(){
        
        userName = $('#user_name01').val();
        num01 = $('#num_01').val();
        num02 = $('#num_02').val();
        num03 = $('#num_03').val();

        if(userName==name){
            if(num01==phoneNum01&&num02==phoneNum02&&num03==phoneNum03){
                alert(userName +'님의 아이디는 warmtable 입니다.')
            }else{
                alert(userName +'님 입력하신 휴대폰번호가 일치하지 않습니다.')
                $('#num_01').val('').focus();
                $('#num_02').val('');
                $('#num_03').val('');
            }
        }else{
            alert('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.')
            $('#user_name01').val('').focus();
        }
    })//btn_submit01 click_event
})//아이디찾기 -휴대폰번호