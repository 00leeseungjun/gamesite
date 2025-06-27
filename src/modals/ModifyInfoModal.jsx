const ModifyInfoModal = () => {
  return (
    <div className="App">
      <div className="modal">
        <h4>정보수정</h4>
        <div className="modalSpace">
          <input placeholder="이전 닉네임" className="id"></input>
          <input placeholder="이메일 주소" className="email"></input>
          <div className="twoButtons">
            <button className="button">이메일로 비밀번호 보내기</button>
            <button className="button">이메일로 비밀번호 보내기</button>
          </div>
        </div>
        <div className="acountOptions">
          <p>로그인으로 돌아가기</p>
        </div>
      </div>
    </div>
  )
}

export default ModifyInfoModal
