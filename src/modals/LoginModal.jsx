// src/modals/LoginModal.jsx
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
    return (
        <div className="login-overlay">
            <div className="login-modal">
                <div className="login-header">
                    <h4 className="login-title">로그인</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="login-space">
                    <input placeholder="아이디" className="input" />
                    <input placeholder="비밀번호" type="password" className="input" />
                    <button className="login-btn">로그인</button>
                </div>

                <div className="account-options">
                    <span>회원가입</span>
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
