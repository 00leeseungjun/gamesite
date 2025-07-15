import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPosts.css'; // MyPosts 전용 CSS
import { posts } from './Community'; // 실제 경로에 맞게 조정

const MyPosts = () => {
    const navigate = useNavigate();
    const currentUser = '닉네임1'; // 로그인된 사용자

    const myPosts = posts.filter((post) => post.author === currentUser);

    return (
        <div className="myposts-container">
            <h2 className="myposts-title">내가 쓴 게시글</h2>

            {myPosts.length === 0 ? (
                <p className="myposts-empty">게시글이 없습니다.</p>
            ) : (
                <div className="myposts-table-wrapper">
                    <div className="myposts-table-header">
                        <div className="myposts-col-title">제목</div>
                        <div className="myposts-col-date">작성일</div>
                        <div className="myposts-col-views">조회</div>
                        <div className="myposts-col-likes">추천</div>
                    </div>
                    {myPosts.map((post) => (
                        <div
                            key={post.id}
                            className="myposts-row"
                            onClick={() => navigate(`/post/${post.id}`)}
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

export default MyPosts;
