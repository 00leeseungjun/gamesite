import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import games from '../data/games';
import StarRatingModal from '../modals/StarRatingModal';
import './GameDetail.css';
import ReactPlayer from 'react-player';
import Comments from '../components/Comments';

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

    const uniqueValues = (value) => [...new Set(Array.isArray(value) ? value : [value])].join(', ');

    return (
        <div className="game-detail-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{game.game_title}</h1>

            <div style={{ position: 'relative', width: '100%', maxHeight: '400px', overflow: 'hidden', borderRadius: '8px' }}>
                <img src={game.game_thumbnail} alt={game.game_title} style={imageStyle} />
                <video src={game.video} style={videoStyle} controls />
            </div>

            <div style={{ marginTop: '30px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px' }}>게임 영상</h2>
                <ReactPlayer url="https://www.youtube.com/watch?v=O4eG3lgrS2I" width="100%" height="360px" controls />
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '8px' }}>게임 이미지</h3>
                <img
                    src={game.game_thumbnail}
                    alt={`${game.game_title} 이미지`}
                    style={{
                        width: '100%',
                        maxHeight: '220px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        border: '1px solid #333',
                    }}
                />
            </div>

            <hr style={{ margin: '20px 0', borderColor: '#555' }} />

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>출시일</td>
                        <td style={{ padding: '8px' }}>{game.game_release_date}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>개발사</td>
                        <td style={{ padding: '8px' }}>{game.game_developer}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>플랫폼</td>
                        <td style={{ padding: '8px' }}>{uniqueValues(game.platform || [])}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>플레이 방식</td>
                        <td style={{ padding: '8px' }}>{uniqueValues(game.playType || [])}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>장르</td>
                        <td style={{ padding: '8px' }}>{game.genre || '정보 없음'}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>테마</td>
                        <td style={{ padding: '8px' }}>{game.theme || '정보 없음'}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>진행 방식</td>
                        <td style={{ padding: '8px' }}>{game.progressType || '정보 없음'}</td>
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
                <p style={{ marginTop: '10px' }}>{game.game_description || '게임 소개가 없습니다.'}</p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '30px' }}>게임 설명</h2>
                <p style={{ marginTop: '10px' }}>{game.game_story || '게임 설명이 없습니다.'}</p>
            </div>

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
