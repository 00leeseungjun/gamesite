// src/modals/MyPageModal.jsx

import React from 'react';
import './MyPageModal.css';
import { useNavigate } from 'react-router-dom';

function MyPageModal({ onClose, onOpenModifyInfo, onOpenChangePassword }) {
    const navigate = useNavigate();

    const goTo = (path) => {
        onClose();
        navigate(path);
    };

    return (
        <div className="mypage-modal">
            <div className="mypage-content">
                <div className="mypage-header">
                    <span>닉네임1님</span>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <ul className="mypage-menu">
                    <li onClick={() => {
                        onClose();
                        onOpenModifyInfo(); // ✅ 정보 수정 모달 열기
                    }}>정보 수정</li>
                    <li onClick={() => {
                        onClose();
                        onOpenChangePassword(); // ✅ 비밀번호 변경 모달 열기
                    }}>비밀번호 변경</li>
                    <li onClick={() => goTo('/liked')}>찜한 게임</li>
                    <hr />
                    <li onClick={() => goTo('/myposts')}>내가 쓴 게시글</li>
                    <li onClick={() => goTo('/my-comments')}>내가 쓴 댓글</li>
                    <li onClick={() => goTo('/scraps')}>스크랩한 게시글</li>
                    <hr />
                    <li>로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

export default MyPageModal;
