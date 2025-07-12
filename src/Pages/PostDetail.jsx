// pages/PostDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from './Community'; // ✅ Community에서 posts 가져오기
import Comments from '../components/Comments'; // 경로는 실제 위치에 맞춰 조정

function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <div style={{ padding: '20px', color: '#fff' }}>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', color: '#ddd' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>← 뒤로가기</button>

            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{post.title}</h2>

            <div style={{ marginBottom: '10px', color: '#aaa' }}>
                <span>작성자: {post.author}</span> | <span>날짜: {post.date}</span> | <span>조회수: {post.views}</span> | <span>추천: {post.likes}</span>
            </div>

            <hr style={{ margin: '20px 0', borderColor: '#444' }} />

            <div style={{ fontSize: '18px', lineHeight: '1.6' }}>{post.content}</div>
        </div>
        
    );
}


export default PostDetail;
