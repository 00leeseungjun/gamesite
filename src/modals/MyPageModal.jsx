// src/modals/MyPageModal.jsx
import React, { useState } from 'react';
import './MyPageModal.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordModal from './ChangePasswordModal'; // ✅ 모달 불러오기

function MyPageModal({ onClose }) {
    const navigate = useNavigate();
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false); // ✅ 상태 추가

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

    return (
        <>
            <div className="mypage-modal">
                <div className="mypage-content">
                    <div className="mypage-header">
                        <span>닉네임1님</span>
                        <button className="close-btn" onClick={onClose}>×</button>
                    </div>
                    <ul className="mypage-menu">
                        <li>정보 수정</li>
                        <li onClick={openChangePasswordModal}>비밀번호 변경</li> {/* ✅ 클릭 시 모달 오픈 */}
                        <li>찜한 게임</li>
                        <hr />
                        <li onClick={goToMyPosts}>내가 쓴 게시글</li>
                        <li>내가 쓴 댓글</li>
                        <li onClick={goToScraps}>스크랩한 게시글</li>
                        <hr />
                        <li>로그아웃</li>
                    </ul>
                </div>
            </div>

            {/* ✅ ChangePasswordModal을 조건부 렌더링 */}
            {showChangePasswordModal && (
                <ChangePasswordModal onClose={closeChangePasswordModal} />
            )}
        </>
    );
}

export default MyPageModal;
