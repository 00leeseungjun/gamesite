import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import LoginModal from '../modals/LoginModal' // ← 경로에 맞게 import

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <>
      <header className="header">
        <Link to="/" className="site-title">
          게임소개 사이트
        </Link>
        <nav className="menu">
          <a href="#category">카테고리</a>
          <Link to="/community">커뮤니티</Link>
          <Link to="/news">뉴스</Link>
          <a href="#chat">채팅</a>
        </nav>
        <button
          className="login-btn"
          onClick={() => setShowLoginModal(true)} // 🔑 버튼 클릭 시 모달 열림
        >
          로그인
        </button>
      </header>

      {/* 로그인 모달 조건부 렌더링 */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  )
}

export default Header
