// src/modals/SignupModal.jsx
import './SignupModal.css';

const SignupModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="login-header">
                    <h4 className="modal-title">회원가입</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="modalSpace">
                    <input placeholder="아이디" className="input" />
                    <input placeholder="비밀번호" type="password" className="input" />
                    <input placeholder="비밀번호 확인" type="password" className="input" />
                    <input placeholder="닉네임" className="input" />
                    <input placeholder="이메일 주소" className="input" />
                    <button className="login-btn">회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
