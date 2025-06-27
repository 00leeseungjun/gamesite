import './LoginModal.css'

const LoginModal = ({ onClose }) => {
  return (
    <div className="App">
      <div className="loginModal">
        <h4>로그인</h4>
        <div className="loginSpace">
          <input placeholder="아이디를 입력하세요" className="id" />
          <input placeholder="비밀번호를 입력하세요" className="password" />
          <button className="loginButton">로그인</button>
        </div>
        <div className="acountOptions">
          <p>회원가입</p>
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
        </div>
        <button onClick={onClose} className="closeBtn">
          닫기
        </button>
      </div>
    </div>
  )
}

export default LoginModal
