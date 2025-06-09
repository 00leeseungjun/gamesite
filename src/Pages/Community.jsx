import React, { useState } from 'react';


const posts = [
    { id: 1, category: '자유', title: '오늘 뭐 하지?' },
    { id: 2, category: '질문', title: '디아블로4 괜찮아?' },
    { id: 3, category: '인기글', title: '스팀 추천 게임 모음' },
    { id: 4, category: '자유', title: '엘든링 후기' },
];

const categories = ['전체글', '인기글', '자유', '질문'];

const Community = () => {
    const [selectedCategory, setSelectedCategory] = useState('전체글');
    const [searchKeyword, setSearchKeyword] = useState('');

    const filteredPosts = posts.filter((post) => {
        const matchCategory = selectedCategory === '전체글' || post.category === selectedCategory;
        const matchKeyword = post.title.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchCategory && matchKeyword;
    });

    return (
        <div className="community-container">
            <h1 className="page-title">커뮤니티</h1>

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
                        type="text"
                        placeholder="검색어 입력"
                        className="search-input"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button className="search-btn">검색</button>
                    <button className="write-btn">글쓰기</button>
                </div>
            </div>

            <hr className="divider" />

            <div className="post-list">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div key={post.id} className="post-item">
                            <span className="post-category">[{post.category}]</span>
                            <span className="post-title">{post.title}</span>
                        </div>
                    ))
                ) : (
                    <div className="no-posts">게시글이 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default Community;
