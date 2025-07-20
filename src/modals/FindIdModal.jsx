// src/modals/FindIdModal.jsx
import './FindIdModal.css';

const FindIdModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="login-header">
                    <h4 className="modal-title">아이디 찾기</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="modalSpace">
                    <div>회원가입 시 입력한 이름과 닉네임을 입력하시오</div>
                    <input placeholder="이름" className="input" />
                    <input placeholder="닉네임" className="input" />
                    <button className="login-btn">아이디 찾기</button>
                </div>

                <div className="account-options">
                    <span onClick={onClose}>로그인으로 돌아가기</span>
                </div>
            </div>
        </div>
    );
};

export default FindIdModal;
