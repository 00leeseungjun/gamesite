// src/modals/FindPasswordModal.jsx
import './FindPasswordModal.css';

const FindPasswordModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="login-header">
                    <h4 className="modal-title">비밀번호 찾기</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="modalSpace">
                    <div>회원가입 시 입력한 아이디와 이메일을 입력하세요</div>
                    <input placeholder="아이디" className="input" />
                    <input placeholder="이메일 주소" className="input" />
                    <button className="login-btn">이메일로 비밀번호 보내기</button>
                </div>

                <div className="account-options">
                    <span onClick={onClose}>로그인으로 돌아가기</span>
                </div>
            </div>
        </div>
    );
};

export default FindPasswordModal;

