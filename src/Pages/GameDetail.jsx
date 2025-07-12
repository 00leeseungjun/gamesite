import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import games from '../data/games';
import StarRatingModal from '../modals/StarRatingModal';
import './GameDetail.css';
import ReactPlayer from 'react-player';
import Comments from '../components/Comments'; // 경로는 실제 위치에 맞춰 조정

const GameDetail = () => {
    const { id } = useParams();
    const game = games.find((g) => g.id === parseInt(id));
    const [showVideo, setShowVideo] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [userRating, setUserRating] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    if (!game) return <div>게임을 찾을 수 없습니다.</div>;

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
        borderRadius: '8px',
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
        display: showVideo ? 'block' : 'none',
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment.trim()]);
            setNewComment('');
        }
    };

    return (
        <div
            className="game-detail-container"
            style={{
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{game.title}</h1>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxHeight: '400px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}
            >
                <img src={game.image} alt={game.title} style={imageStyle} />
                <video src={game.video} style={videoStyle} controls />
            </div>

            <div>
                <div style={{ marginTop: '30px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px' }}>게임 영상</h2>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=O4eG3lgrS2I"
                        width="100%"
                        height="360px"
                        controls
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '8px' }}>
                        게임 이미지
                    </h3>
                    <img
                        src={game.image}
                        alt={`${game.title} 이미지`}
                        style={{
                            width: '100%',
                            maxHeight: '220px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            border: '1px solid #333',
                        }}
                    />
                </div>
            </div>

            <hr style={{ margin: '20px 0', borderColor: '#555' }} />

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>출시일</td>
                        <td style={{ padding: '8px' }}>{game.releaseDate}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>개발사</td>
                        <td style={{ padding: '8px' }}>{game.developer}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>플레이방식</td>
                        <td style={{ padding: '8px' }}>{game.playType}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>진행방식</td>
                        <td style={{ padding: '8px' }}>{game.progressType}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>태그</td>
                        <td style={{ padding: '8px' }}>{game.tags.join(', ')}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                            <strong>⭐ 별점:</strong> {userRating ? `${userRating}.0 / 5.0` : '4.5 / 5.0'}
                        </td>
                        <td style={{ padding: '8px' }}>
                            <strong>🔥 좋아요 수:</strong> 1234
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="desc-box">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>게임 소개</h2>
                <p style={{ marginTop: '10px' }}>
                    이 게임은 정교한 전투 시스템과 몰입감 있는 세계관으로 전 세계 유저에게 찬사를 받고
                    있습니다.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '30px' }}>게임 설명</h2>
                <p style={{ marginTop: '10px' }}>
                    다양한 캐릭터와 전략을 활용해 실시간 전투에서 승리를 거두세요. 싱글플레이 또는 친구들과
                    함께 멀티플레이로도 즐길 수 있습니다.
                </p>
            </div>

            {/* 댓글 영역 */}
            <Comments />

            {showModal && (
                <StarRatingModal
                    onClose={() => setShowModal(false)}
                    onSubmit={(rating) => {
                        setUserRating(rating);
                        setShowModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default GameDetail;
