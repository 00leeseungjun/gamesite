// pages/MyScraps.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPosts.css'; // 동일한 스타일 사용
import { posts } from './Community';

const MyScraps = () => {
    const navigate = useNavigate();

    const scrappedPosts = posts.filter((post) => post.scrapped === true);

    return (
        <div className="myposts-container">
            <h2 className="myposts-title">스크랩한 게시글</h2>

            {scrappedPosts.length === 0 ? (
                <p className="myposts-empty">스크랩한 게시글이 없습니다.</p>
            ) : (
                <div className="myposts-table-wrapper">
                    <div className="myposts-table-header">
                        <div className="myposts-col-title">제목</div>
                        <div className="myposts-col-date">작성일</div>
                        <div className="myposts-col-views">조회</div>
                        <div className="myposts-col-likes">추천</div>
                    </div>
                    {scrappedPosts.map((post) => (
                        <div
                            key={post.id}
                            className="myposts-row"
                            onClick={() => navigate(`/community/post/${post.id}`)}
                        >
                            <div className="myposts-col-title">
                                <span className="myposts-category">[{post.category}]</span> {post.title}
                            </div>
                            <div className="myposts-col-date">{post.date}</div>
                            <div className="myposts-col-views">{post.views}</div>
                            <div className="myposts-col-likes">{post.likes}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyScraps;
