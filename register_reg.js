// 아이디 유효성 검증
// 영어 대소문자, 숫자만 허용, 길이 6~12자리
function idCheck(userid) {
    let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;

    // userid 사용자 입력값 가져오기
    // let userid = document.querySelector("#userid").value;
    // 유효성 검증 - 메세지 띄우기
    if (!regId.test(userid)) {
        alert("아이디를 확인하세요.");
        document.querySelector("#userid").select();
        return;
    }
}

// 비밀번호 유효성 검증
// 영어 대소문자, 숫자만 허용, 특수문자 허용, 길이 8~15자리
function passwordCheck(password) {
    let regPwd = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

    return regPwd.test(password);
}

function pwdCheck1(password){
    if(!passwordCheck(password.value)){
        alert("비밀번호는 숫자, 문자, 특수문자를 포함하여 8~15자로 작성해야 합니다.");
        password.select();
        return;
    }
}
function pwdCheck2(password){
    if(!passwordCheck(password.value)){
        alert("비밀번호는 숫자, 문자, 특수문자를 포함하여 8~15자로 작성해야 합니다.");
        password.select();
        return;
    }
    if(document.querySelector("#userpw").value !== password.value){
        alert("이전 비밀번호와 다릅니다.");
        password.select();
        return;
    }
}

// 성별 : 둘 중 무조건 하나 선택
    function genderCheck() {
    //    let gender = document.querySelector("[name='gender']");
    //    if(!gender.checked){
    //        alert("성별을 확인해주세요.");
    //    }

    let genders = document.querySelectorAll("[name='gender']");
    genders.forEach((element)=>{
       // console.log(element);
        if(!element.checked){
            alert(element.value);
        }
    });
      }

// 이메일 
function emailCheck(email){
    const reg = /\w+@[A-Za-z0-9]+\.(com|org|edu|ent)/;
    
     if(!reg.test(email.value)){
         alert("이메일을 확인하세요.");
         email.select();
         return;
     }   
        }

// 핸드폰 번호 : 000-0000-0000
function mobileCheck(mobile){
    const reg = /^\d{3}-\d{4}-\d{4}$/;

    if(!reg.test(mobile.value)){
        alert("휴대폰번호를 확인하세요.");
        mobile.select();
        return;
    }
}

// 취미
















