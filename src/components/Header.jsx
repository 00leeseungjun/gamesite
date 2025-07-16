import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import LoginModal from '../modals/LoginModal';
import MyPageModal from '../modals/MyPageModal';

function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showMyPageModal, setShowMyPageModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // 🔍 검색 시 페이지 이동을 위해

    // 🔍 검색 폼 제출 처리
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

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

            {/* 🔍 검색창은 form + 상태 관리 + submit 이벤트로 처리 */}
            <form onSubmit={handleSearchSubmit} className="search-container">
                <input
                    className="search-input"
                    placeholder="게임을 검색해보세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showMyPageModal && <MyPageModal onClose={() => setShowMyPageModal(false)} />}
        </>
    );
}

export default Header;
