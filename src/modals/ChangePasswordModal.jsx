function ChangePasswordModal() {
    return (
        <div className="App">
            <div className="modal">
                <h4>비밀번호 변경</h4>
                <div className="modalSpace">
                    <input placeholder="이전 비밀번호" className="id"></input>
                    <input placeholder="새로운 비밀번호" className="email"></input>
                    <input placeholder="비밀번호 확인" className="email"></input>
                </div>
                <div className="acountOptions">
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordModal