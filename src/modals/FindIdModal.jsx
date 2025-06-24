const FindIdModal = () => {
    return (
        <div className="App">
            <div className="findIdModal">
                <h4>아이디 찾기</h4>
                <div className="findIdSpace">
                    <div>회원가입시 입력한 이름과 닉네임을 입력하시오</div>
                    <input placeholder="이름" className="name"></input>
                    <input placeholder="닉네임" className="nickname"></input>
                    <button className="findIdButton">아이디 찾기</button>
                </div>
                <div className="acountOptions">
                    <p>로그인으로 돌아가기</p>
                </div>
            </div>
        </div>
    );
};

export default FindIdModal;