// src/modals/MyPageModal.jsx
import React from 'react';
import './MyPageModal.css';
import { useNavigate } from 'react-router-dom'; // ✅ 추가

function MyPageModal({ onClose }) {
    const navigate = useNavigate(); // ✅ 추가

    const goToMyPosts = () => {
        onClose();             // 모달 닫기
        navigate('/myposts');  // 원하는 페이지로 이동
    };

    return (
        <div className="mypage-modal">
            <div className="mypage-content">
                <div className="mypage-header">
                    <span>닉네임1님</span>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <ul className="mypage-menu">
                    <li>정보 수정</li>
                    <li>비밀번호 변경</li>
                    <li>찜한 게임</li>
                    <hr />
                    <li onClick={goToMyPosts}>내가 쓴 게시글</li> {/* ✅ 클릭 시 이동 */}
                    <li>내가 쓴 댓글</li>
                    <li>스크랩한 게시글</li>
                    <hr />
                    <li>로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

export default MyPageModal;


//./MyPageModal.css
