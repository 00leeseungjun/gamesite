// src/pages/GameDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; // 필요하면 Tailwind나 따로 CSS 만들어도 됨
import games from '../data/games'; // 또는 '../../data/games' 등 실제 위치

// 상세 페이지 컴포넌트
const GameDetail = () => {
    const { id } = useParams(); // URL에서 id 값 추출
    const game = games.find(g => g.id === parseInt(id)); // id로 게임 찾기
    const [showVideo, setShowVideo] = useState(false);

    if (!game) return <div>게임을 찾을 수 없습니다.</div>;

    // 이미지와 비디오에 적용할 애니메이션 스타일
    const transitionStyle = { transition: 'transform 0.5s ease-in-out' };
    const imageStyle = {
        ...transitionStyle,
        transform: showVideo ? 'translateX(100%)' : 'translateX(0)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
    };
    const videoStyle = {
        ...transitionStyle,
        transform: showVideo ? 'translateX(0)' : 'translateX(-100%)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        display: showVideo ? 'block' : 'none'
    };

    return (
        <div className="game-detail-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            {/* 제목 */}
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{game.title}</h1>

            {/* 이미지/비디오 래퍼 */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '400px', overflow: 'hidden', borderRadius: '8px' }}>
                {/* 게임 이미지 */}
                <img
                    src={game.image}
                    alt={game.title}
                    style={imageStyle}
                />

                {/* 게임 영상: game.video 라는 속성에 영상 URL이 있다고 가정 */}
                <video
                    src={game.video}
                    style={videoStyle}
                    controls
                />
            </div>

            {/* 버튼: 클릭 시 영상으로 전환 */}
            <button
                onClick={() => setShowVideo(prev => !prev)}
                style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
            >
                {showVideo ? '이미지로 돌아가기' : '영상 보기'}
            </button>

            {/* 구분선 */}
            <hr style={{ margin: '20px 0' }} />

            {/* 정보 박스 */}
            <div className="info-box" style={{ lineHeight: '1.8' }}>
                <p><strong>출시일:</strong> 2024.01.01</p>
                <p><strong>개발사:</strong> 예시 스튜디오</p>
                <p><strong>플레이방식:</strong> 싱글 / 멀티</p>
                <p><strong>진행방식:</strong> 실시간 전투</p>
                <p><strong>태그:</strong> 액션, RPG, 전략</p>
                <p><strong>⭐ 별점:</strong> 4.5 / 5.0</p>
                <p><strong>👍 좋아요 수:</strong> 123</p>
            </div>

            {/* 소개/설명 */}
            <div className="desc-box" style={{ marginTop: '30px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>게임 소개</h2>
                <p style={{ marginTop: '10px' }}>
                    이 게임은 정교한 전투 시스템과 몰입감 있는 세계관으로 전 세계 유저에게 찬사를 받고 있습니다.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '30px' }}>게임 설명</h2>
                <p style={{ marginTop: '10px' }}>
                    다양한 캐릭터와 전략을 활용해 실시간 전투에서 승리를 거두세요. 싱글플레이 또는 친구들과 함께 멀티플레이로도 즐길 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default GameDetail;
