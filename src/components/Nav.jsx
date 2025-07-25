import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // CSS 파일 import

const menuData = {
    "장르 별 게임": { type: "genre", items: ["액션", "어드벤쳐", "롤플레잉", "시뮬레이션", "스포츠/레이싱", "퍼즐/보드", "리듬"] },
    "테마 별 게임": { type: "theme", items: ["판타지", "공상과학", "공포", "역사/고대", "현대/일상", "디스토피아/아포칼립스", "추리/스릴러", "캐주얼얼"] },
    "플랫폼 별 게임": { type: "platform", items: ["PC 게임", "콘솔 게임", "모바일 게임", "웹 게임", "클라우드 게임", " VR/AR 게임", "아케이드 게임임"] },
    "플레이방식 별 게임": { type: "play", items: ["LAN", "MMO", "로컬 및 파티", "멀티 플레이어", "싱글 플레이어", "온라인 경쟁", "협동동"] },
    "진행 방식 별 게임": { type: "flow", items: ["오픈월드", "샌드박스", "로그라이크", "턴제/전략", "웨이브/생존", "리듬"] }
};

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setOpenSubMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        setOpenSubMenu(null);
    };

    const handleSubMenuToggle = (category) => {
        setOpenSubMenu((prev) => (prev === category ? null : category));
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to={"/"}>
                    <h1 className="nav-title">GameNest</h1>
                </Link>

                <button onClick={toggleMenu} className="nav-btn">카테고리</button>
                <div className="nav-btn">커뮤니티</div>
                <div className="nav-btn">뉴스</div>
                <div className="nav-btn">채팅</div>

                <button className="nav-login-btn">로그인</button>
            </div>

            <div className="nav-search-container">
                <input
                    type="search"
                    placeholder="원하는 게임을 입력하세요"
                    className="nav-search-input"
                />
            </div>

            {isMenuOpen && (
                <div className="nav-menu-wrapper">
                    <div ref={menuRef} className="nav-menu">
                        <ul>
                            {Object.entries(menuData).map(([category, { type, items }]) => (
                                <li key={category} className="nav-category">
                                    <div onClick={() => handleSubMenuToggle(category)} className="nav-category-toggle">
                                        {category}
                                        <span>{openSubMenu === category ? "-" : "+"}</span>
                                    </div>
                                    {openSubMenu === category && (
                                        <ul className="nav-submenu">
                                            {items.map((value) => (
                                                <li key={value} className="nav-submenu-item">
                                                    <Link
                                                        to={`/category/${type}/${value}`}
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setOpenSubMenu(null);
                                                        }}
                                                    >
                                                        {value}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
