// src/modals/MyPageModal.jsx
import React, { useState } from 'react';
import './MyPageModal.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordModal from './ChangePasswordModal';
import ModifyInfoModal from './ModifyInfoModal';

function MyPageModal({ onClose }) {
    const navigate = useNavigate();

    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [showModifyInfoModal, setShowModifyInfoModal] = useState(false);

    const goToMyPosts = () => {
        onClose();
        navigate('/myposts');
    };

    const goToScraps = () => {
        onClose();
        navigate('/scraps');
    };

    const openChangePasswordModal = () => {
        setShowChangePasswordModal(true);
    };

    const closeChangePasswordModal = () => {
        setShowChangePasswordModal(false);
    };

    const openModifyInfoModal = () => {
        setShowModifyInfoModal(true);
    };

    const closeModifyInfoModal = () => {
        setShowModifyInfoModal(false);
    };

    const goToLikedGames = () => {
        onClose();
        navigate('/liked'); // ✅ 찜한 게임들 페이지로 이동
    };

    return (
        <>
            <div className="mypage-modal">
                <div className="mypage-content">
                    <div className="mypage-header">
                        <span>닉네임1님</span>
                        <button className="close-btn" onClick={onClose}>×</button>
                    </div>
                    <ul className="mypage-menu">
                        <li onClick={openModifyInfoModal}>정보 수정</li>
                        <li onClick={openChangePasswordModal}>비밀번호 변경</li>
                        <li onClick={goToLikedGames}>찜한 게임</li> {/* ✅ 추가됨 */}
                        <hr />
                        <li onClick={goToMyPosts}>내가 쓴 게시글</li>
                        <li>내가 쓴 댓글</li>
                        <li onClick={goToScraps}>스크랩한 게시글</li>
                        <hr />
                        <li>로그아웃</li>
                    </ul>
                </div>
            </div>

            {showChangePasswordModal && (
                <ChangePasswordModal onClose={closeChangePasswordModal} />
            )}

            {showModifyInfoModal && (
                <ModifyInfoModal onClose={closeModifyInfoModal} />
            )}
        </>
    );
}

export default MyPageModal;
