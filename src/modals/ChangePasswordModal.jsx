// src/modals/ChangePasswordModal.jsx
import React from 'react';
import './ChangePasswordModal.css'; // ✅ 스타일 따로 있다면

function ChangePasswordModal({ onClose }) {
    return (
        <div className="App">
            <div className="modal">
                <div className="modal-header">
                    <h4>비밀번호 변경</h4>
                    <button onClick={onClose} className="close-btn">×</button> {/* ✅ 닫기 버튼 */}
                </div>
                <div className="modalSpace">
                    <input placeholder="이전 비밀번호" className="id" />
                    <input placeholder="새로운 비밀번호" className="email" />
                    <input placeholder="비밀번호 확인" className="email" />
                </div>
                <div className="acountOptions">
                    <button className="submit-btn">변경하기</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordModal;
