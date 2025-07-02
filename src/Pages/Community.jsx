import React, { useState, useMemo } from 'react';
import './Community.css';

/* ---------------- 더미 게시글 20개 ---------------- */
const posts = [
    { id: 1, category: '자유', title: '오늘 뭐 하지?', author: '닉네임1', date: '2025.6.1', views: 12, likes: 3 },
    { id: 2, category: '질문', title: '디아블로4 괜찮아?', author: '닉네임2', date: '2025.6.2', views: 45, likes: 8 },
    { id: 3, category: '자유', title: '스팀 추천 게임 모음', author: '닉네임3', date: '2025.6.3', views: 102, likes: 26 },
    { id: 4, category: '자유', title: '엘든링 후기', author: '닉네임4', date: '2025.6.4', views: 9, likes: 1 },
    { id: 5, category: '자유', title: '오늘 점심 뭐 먹지?', author: '닉네임5', date: '2025.6.5', views: 22, likes: 0 },
    { id: 6, category: '질문', title: '게이밍 노트북 추천 좀요', author: '닉네임6', date: '2025.6.6', views: 64, likes: 3 },
    { id: 7, category: '자유', title: '갓 오브 워 재밌냐?', author: '닉네임7', date: '2025.6.7', views: 31, likes: 5 },
    { id: 8, category: '자유', title: '내가 뽑은 올해의 게임 TOP5', author: '닉네임8', date: '2025.6.8', views: 199, likes: 40 },
    { id: 9, category: '질문', title: '롤 처음 시작하려는데 팁?', author: '닉네임9', date: '2025.6.9', views: 54, likes: 7 },
    { id: 10, category: '자유', title: '오늘 날씨 너무 좋다 ☀️', author: '닉네임10', date: '2025.6.10', views: 16, likes: 2 },
    { id: 11, category: '질문', title: '닌텐도 스위치 아직도 할만함?', author: '닉네임11', date: '2025.6.11', views: 33, likes: 4 },
    { id: 12, category: '자유', title: '에어컨 켜도 될까요?', author: '닉네임12', date: '2025.6.12', views: 28, likes: 1 },
    { id: 13, category: '자유', title: '한달에 3개 클리어한 후기', author: '닉네임13', date: '2025.6.13', views: 84, likes: 12 },
    { id: 14, category: '질문', title: '라오어 파트2 어떤가요?', author: '닉네임14', date: '2025.6.14', views: 39, likes: 6 },
    { id: 15, category: '자유', title: '게임하면서 마시는 음료는?', author: '닉네임15', date: '2025.6.15', views: 21, likes: 3 },
    { id: 16, category: '질문', title: '모니터 두 개 쓰면 좋아요?', author: '닉네임16', date: '2025.6.16', views: 41, likes: 2 },
    { id: 17, category: '자유', title: '플스 게임 추천 좀 해줘', author: '닉네임17', date: '2025.6.17', views: 38, likes: 4 },
    { id: 18, category: '자유', title: '스팀 여름 할인 정리함', author: '닉네임18', date: '2025.6.18', views: 120, likes: 31 },
    { id: 19, category: '질문', title: '무선 키보드 뭐가 좋아요?', author: '닉네임19', date: '2025.6.19', views: 26, likes: 3 },
    { id: 20, category: '자유', title: '요즘 할 게임 뭐 있어?', author: '닉네임20', date: '2025.6.20', views: 30, likes: 5 },
];

/* ---------------- 탭 목록 ---------------- */
const categories = ['전체글', '인기글', '자유', '질문'];

/* 🔥 인기글 기준 (조회수 ≥ 50 또는 좋아요 ≥ 10) */
const isPopular = (p) => p.views >= 50 || p.likes >= 10;

function Community() {
    const [selectedCategory, setSelectedCategory] = useState('전체글');
    const [searchKeyword, setSearchKeyword] = useState('');

    /* ---------- 필터링 ---------- */
    const filteredPosts = useMemo(() => {
        return posts.filter((p) => {
            const okKey = p.title.toLowerCase().includes(searchKeyword.toLowerCase());

            if (selectedCategory === '전체글') return okKey;
            if (selectedCategory === '인기글') return isPopular(p) && okKey;
            /* 자유·질문 */
            return p.category === selectedCategory && okKey;
        });
    }, [selectedCategory, searchKeyword]);

    return (
        <div className="community-container">
            <h1 className="page-title">커뮤니티</h1>

            {/* 탭 + 검색창 */}
            <div className="community-top">
                <div className="category-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="search-group">
                    <input
                        className="community-search-input"
                        placeholder="검색어 입력"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button className="search-btn">검색</button>
                    <button className="write-btn">글쓰기</button>
                </div>
            </div>

            <hr className="divider" />

            {/* 게시판 표 */}
            <div className="post-list">
                <div className="post-header">
                    <div>제목</div><div>작성자</div><div>작성일</div><div>조회</div><div>추천</div>
                </div>

                {filteredPosts.length ? (
                    filteredPosts.map((p) => (
                        <div key={p.id} className="post-row">
                            <div className="post-title">
                                {isPopular(p) && <span className="popular-badge">🔥</span>}
                                <span className="post-category">[{p.category}] </span>
                                {p.title}
                            </div>
                            <div>{p.author}</div>
                            <div>{p.date}</div>
                            <div>{p.views}</div>
                            <div>{p.likes}</div>
                        </div>
                    ))
                ) : (
                    <div className="no-posts">게시글이 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default Community;
