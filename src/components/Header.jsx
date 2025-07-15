import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LoginModal from '../modals/LoginModal';
import MyPageModal from '../modals/MyPageModal';

function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showMyPageModal, setShowMyPageModal] = useState(false);

    return (
        <>
            <header className="header">
                <Link to="/" className="site-title">게임소개 사이트</Link>

                <nav className="menu">
                    <a href="#category">카테고리</a>
                    <Link to="/community">커뮤니티</Link>
                    <Link to="/news">뉴스</Link>
                    <a href="#chat">채팅</a>
                </nav>

                {/* ✅ 로그인 버튼 그룹 */}
                <div className="login-group">
                    <button
                        className="login-btn orange-btn"
                        onClick={() => setShowMyPageModal(true)}
                    >
                        로그인 했다 치고!
                    </button>

                    <button
                        className="login-btn"
                        onClick={() => setShowLoginModal(true)}
                    >
                        로그인
                    </button>
                </div>
            </header>

            {/* 모달들 */}
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showMyPageModal && <MyPageModal onClose={() => setShowMyPageModal(false)} />}
        </>
    );
}

export default Header;
