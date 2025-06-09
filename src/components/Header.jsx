// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            {/* “게임소개 사이트” 텍스트를 Link로 감싸서 클릭 시 "/"(App)으로 이동 */}
            <Link to="/" className="site-title">
                게임소개 사이트
            </Link>
            <nav className="menu">
                <a href="#category">카테고리</a>
                <Link to="/community">커뮤니티</Link>
                <Link to="/news">뉴스</Link>
                <a href="#chat">채팅</a>
            </nav>
            <button className="login-btn">로그인</button>
        </header>
    );
}

export default Header;
