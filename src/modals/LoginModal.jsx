// src/modals/LoginModal.jsx
import './LoginModal.css';

const LoginModal = ({ onClose, onOpenFindId, onOpenFindPassword, onOpenSignup }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="login-header">
                    <h4 className="modal-title">로그인</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="modalSpace">
                    <input placeholder="아이디" className="input" />
                    <input placeholder="비밀번호" type="password" className="input" />
                    <button className="login-btn">로그인</button>
                </div>

                <div className="account-options">
                    <span onClick={onOpenSignup}>회원가입</span>
                    <span onClick={onOpenFindId}>아이디 찾기</span>
                    <span onClick={onOpenFindPassword}>비밀번호 찾기</span>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
