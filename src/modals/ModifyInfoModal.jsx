import React from 'react';
import './ModifyInfoModal.css';

const ModifyInfoModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h4 className="modal-title">정보 수정</h4>
                <div className="modalSpace">
                    <input placeholder="이전 닉네임" className="input" />
                    <input placeholder="바꿀 닉네임" className="input" />
                    <input placeholder="현재 이메일 주소" className="input" />
                    <input placeholder="바꿀 이메일 주소" className="input" />
                </div>
                <div className="button-row">
                    <button className="save-btn">저장하기</button>
                    <button className="cancel-btn" onClick={onClose}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default ModifyInfoModal;
