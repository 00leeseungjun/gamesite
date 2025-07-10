import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';        // 추가!
import Fuse from 'fuse.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Community.css';

/* ---------------- 더미 게시글 50개 ---------------- */
const posts = [
    /* 1 ~ 10 */
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

    /* 11 ~ 20 */
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

    /* 21 ~ 30 */
    { id: 21, category: '질문', title: '스팀 덱 살만한가요?', author: '닉네임21', date: '2025.6.21', views: 58, likes: 7 },
    { id: 22, category: '자유', title: '엔딩 보고 공허하다', author: '닉네임22', date: '2025.6.22', views: 19, likes: 1 },
    { id: 23, category: '자유', title: '이번 주말 할인 정리', author: '닉네임23', date: '2025.6.23', views: 121, likes: 18 },
    { id: 24, category: '질문', title: '메타버스 게임 뭐 있음?', author: '닉네임24', date: '2025.6.24', views: 66, likes: 9 },
    { id: 25, category: '자유', title: '라면 추천 레시피', author: '닉네임25', date: '2025.6.25', views: 41, likes: 6 },
    { id: 26, category: '자유', title: '인생겜 리스트 공유', author: '닉네임26', date: '2025.6.26', views: 143, likes: 23 },
    { id: 27, category: '질문', title: '그래픽 카드 업글 시기?', author: '닉네임27', date: '2025.6.27', views: 54, likes: 8 },
    { id: 28, category: '자유', title: 'OST 좋은 게임 추천', author: '닉네임28', date: '2025.6.28', views: 25, likes: 2 },
    { id: 29, category: '자유', title: '스포일러 없는 후기', author: '닉네임29', date: '2025.6.29', views: 90, likes: 11 },
    { id: 30, category: '질문', title: '콘솔 초보 추천 게임?', author: '닉네임30', date: '2025.6.30', views: 47, likes: 6 },

    /* 31 ~ 40 */
    { id: 31, category: '자유', title: '새벽에 할 게임?', author: '닉네임31', date: '2025.7.1', views: 39, likes: 4 },
    { id: 32, category: '자유', title: '멀티 플레이 구해요', author: '닉네임32', date: '2025.7.2', views: 74, likes: 10 },
    { id: 33, category: '질문', title: '헤드셋 추천 부탁', author: '닉네임33', date: '2025.7.3', views: 63, likes: 9 },
    { id: 34, category: '자유', title: '공포게임 혼자 클리어', author: '닉네임34', date: '2025.7.4', views: 118, likes: 21 },
    { id: 35, category: '질문', title: '프레임 드랍 해결법?', author: '닉네임35', date: '2025.7.5', views: 29, likes: 3 },
    { id: 36, category: '자유', title: '리메이크 기대작 정리', author: '닉네임36', date: '2025.7.6', views: 71, likes: 8 },
    { id: 37, category: '자유', title: '패치 후 변화 공유', author: '닉네임37', date: '2025.7.7', views: 88, likes: 13 },
    { id: 38, category: '질문', title: 'VPN 쓰면 핑 좋아지나요?', author: '닉네임38', date: '2025.7.8', views: 52, likes: 7 },
    { id: 39, category: '자유', title: '디자인이 미친 게임', author: '닉네임39', date: '2025.7.9', views: 110, likes: 19 },
    { id: 40, category: '자유', title: '쿠폰 코드 나눔', author: '닉네임40', date: '2025.7.10', views: 62, likes: 8 },

    /* 41 ~ 50 */
    { id: 41, category: '질문', title: '패드 vs 키보드?', author: '닉네임41', date: '2025.7.11', views: 45, likes: 6 },
    { id: 42, category: '자유', title: '맵 디자인 TOP3', author: '닉네임42', date: '2025.7.12', views: 81, likes: 12 },
    { id: 43, category: '자유', title: '클리어 스크린샷 자랑', author: '닉네임43', date: '2025.7.13', views: 124, likes: 22 },
    { id: 44, category: '질문', title: '세이브 데이터 공유 방법?', author: '닉네임44', date: '2025.7.14', views: 33, likes: 4 },
    { id: 45, category: '자유', title: '이벤트 던전 후기', author: '닉네임45', date: '2025.7.15', views: 95, likes: 14 },
    { id: 46, category: '자유', title: '레트로 게임 추천', author: '닉네임46', date: '2025.7.16', views: 27, likes: 3 },
    { id: 47, category: '질문', title: '사양 낮은 노트북 게임?', author: '닉네임47', date: '2025.7.17', views: 58, likes: 8 },
    { id: 48, category: '자유', title: '엔딩 크레딧에서 눈물', author: '닉네임48', date: '2025.7.18', views: 142, likes: 25 },
    { id: 49, category: '자유', title: '패치노트 요약', author: '닉네임49', date: '2025.7.19', views: 36, likes: 5 },
    { id: 50, category: '질문', title: '게임 패스 가치 있을까?', author: '닉네임50', date: '2025.7.20', views: 69, likes: 10 },
];

/* ---------------- 상수 ---------------- */
const categories = ['전체글', '인기글', '자유', '질문'];
const isPopular = (p) => p.views >= 50 || p.likes >= 10;
const PAGE_SIZE = 20;

/* ---------------- Fuse.js ---------------- */
const fuse = new Fuse(posts, { keys: ['title'], threshold: 0.3, ignoreLocation: true });

function Community() {
    const navigate = useNavigate();                       // ⬅️ 라우터 훅
    const [selectedCategory, setSelectedCategory] = useState('전체글');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    /* 검색 + 탭 필터 */
    const filteredPosts = useMemo(() => {
        const base = searchKeyword.trim()
            ? fuse.search(searchKeyword).map((r) => r.item)
            : posts;

        return base.filter((p) => {
            if (selectedCategory === '전체글') return true;
            if (selectedCategory === '인기글') return isPopular(p);
            return p.category === selectedCategory;
        });
    }, [selectedCategory, searchKeyword]);

    /* 무한 스크롤 */
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visiblePosts.length < filteredPosts.length;
    const fetchMore = () => setTimeout(() => setVisibleCount((v) => v + PAGE_SIZE), 400);

    return (
        <div className="community-container">
            <h1 className="page-title">커뮤니티</h1>

            {/* 탭 + 검색 */}
            <div className="community-top">
                <div className="category-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => { setSelectedCategory(cat); setVisibleCount(PAGE_SIZE); }}
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
                        onChange={(e) => { setSearchKeyword(e.target.value); setVisibleCount(PAGE_SIZE); }}
                    />
                    <button className="search-btn">검색</button>

                    {/* 글쓰기 버튼 → /write 이동 */}
                    <button className="write-btn" onClick={() => navigate('/write')}>
                        글쓰기
                    </button>
                </div>
            </div>


            {/* 게시판 */}
            <div className="post-list">
                <div className="post-header">
                    <div>제목</div><div>작성자</div><div>작성일</div><div>조회</div><div>추천</div>
                </div>

                {filteredPosts.length === 0 && <div className="no-posts">게시글이 없습니다.</div>}

                <InfiniteScroll
                    dataLength={visiblePosts.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={<p style={{ textAlign: 'center', padding: 10 }}>불러오는 중…</p>}
                    endMessage={<p style={{ textAlign: 'center', padding: 10 }}>모든 글을 불러왔습니다.</p>}
                >
                    {visiblePosts.map((p) => (
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
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default Community;
