import React from 'react';
import './ChangePasswordModal.css';

function ChangePasswordModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h4 className="modal-title">비밀번호 변경</h4>
                <div className="modalSpace">
                    <input type="password" placeholder="이전 비밀번호" className="input" />
                    <input type="password" placeholder="새로운 비밀번호" className="input" />
                    <input type="password" placeholder="비밀번호 확인" className="input" />
                </div>
                <div className="button-row">
                    <button className="save-btn">저장하기</button>
                    <button className="cancel-btn" onClick={onClose}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordModal;
