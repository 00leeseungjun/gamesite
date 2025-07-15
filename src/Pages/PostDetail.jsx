// pages/PostDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from './Community'; // ✅ Community에서 posts 가져오기
import Comments from '../components/Comments'; // ✅ 댓글 컴포넌트

function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find((p) => p.id === Number(id));

    const [likes, setLikes] = useState(post?.likes || 0);
    const [liked, setLiked] = useState(false); // ✅ 한 번 눌렀는지 여부

    const handleLike = () => {
        if (liked) {
            alert('좋아요는 한 번만 누를 수 있습니다.');
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

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

            {/* 좋아요 버튼 – 본문 맨 아래, 중앙 정렬 */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={handleLike}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: liked ? '#6c757d' : '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    👍 좋아요 {likes}
                </button>
            </div>

            {/* 댓글 영역 */}
            <Comments />
        </div>
    );
}

export default PostDetail;
