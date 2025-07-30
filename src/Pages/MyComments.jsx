// src/pages/MyComments.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MyComments.css'; // ✅ CSS 파일 추가

const comments = [
    {
        id: 1,
        postId: 101,
        postTitle: "엘든링 보스 공략 어떻게 하세요?",
        content: "저는 출혈 무기로 잡았어요! 말레니아는 회피 타이밍이 진짜 중요하더라고요.",
        author: "닉네임1",
        createdAt: "2025-07-22",
    },
    {
        id: 2,
        postId: 102,
        postTitle: "스타듀밸리 멀티 재밌나요?",
        content: "멀티 진짜 꿀잼이에요! 친구랑 농사 나눠서 하면 덜 지루하고 금방 진도 나가요 ㅎㅎ",
        author: "닉네임1",
        createdAt: "2025-07-21",
    },
    {
        id: 3,
        postId: 103,
        postTitle: "디아4 야만용사 스킬 트리 질문",
        content: "소용돌이 요즘 상향 먹어서 괜찮던데요. 광분은 보스용에 더 좋은 것 같아요.",
        author: "닉네임1",
        createdAt: "2025-07-20",
    },
];


const MyComments = () => {
    return (
        <div className="my-comments-container">
            <h2 className="my-comments-title">내가 쓴 댓글</h2>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment-item">
                        <div className="comment-post-title">{comment.postTitle}</div>
                        <div className="comment-content">{comment.content}</div>
                        <div className="comment-meta">{comment.createdAt}</div>
                        <Link to={`/community/post/${comment.postId}`} className="comment-link">
                            해당 게시글로 이동
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyComments;
