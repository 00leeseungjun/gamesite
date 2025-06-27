const FindPasswordModal = () => {
  return (
    <div className="App">
      <div className="modal">
        <h4>비밀번호 찾기</h4>
        <div className="modalSpace">
          <div>회원가입시 입력한 아이디와 비밀번호를 입력하시오</div>
          <input placeholder="아이디" className="id"></input>
          <input placeholder="이메일 주소" className="email"></input>
          <button className="button">이메일로 비밀번호 보내기</button>
        </div>
        <div className="acountOptions">
          <p>로그인으로 돌아가기</p>
        </div>
      </div>
    </div>
  )
}

export default FindPasswordModal
