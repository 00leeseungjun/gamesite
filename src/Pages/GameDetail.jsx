import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import games from '../data/games'
import StarRatingModal from '../modals/StarRatingModal'
import './GameDetail.css'

const GameDetail = () => {
    const { id } = useParams()
    const game = games.find((g) => g.id === parseInt(id))
    const [showVideo, setShowVideo] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [userRating, setUserRating] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    if (!game) return <div>게임을 찾을 수 없습니다.</div>

    const transitionStyle = { transition: 'transform 0.5s ease-in-out' }
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
    }
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
    }

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment.trim()])
            setNewComment('')
        }
    }

    return (
        <div
            className="game-detail-container"
            style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '20px', boxSizing: 'border-box', }}
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

            <button
                onClick={() => setShowVideo((prev) => !prev)}
                style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                }}
            >
                {showVideo ? '이미지로 돌아가기' : '영상 보기'}
            </button>

            <hr style={{ margin: '20px 0', borderColor: '#555' }} />

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>출시일</td>
                        <td style={{ padding: '8px' }}>2024.01.01</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>개발사</td>
                        <td style={{ padding: '8px' }}>예시 스튜디오</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>플레이방식</td>
                        <td style={{ padding: '8px' }}>싱글 / 멀티</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>진행방식</td>
                        <td style={{ padding: '8px' }}>실시간 전투</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>태그</td>
                        <td style={{ padding: '8px' }}>액션, RPG, 전략</td>
                    </tr>
                    <tr>
                        <td
                            style={{ padding: '8px', cursor: 'pointer' }}
                            onClick={() => setShowModal(true)}
                        >
                            <strong>⭐ 별점:</strong>{' '}
                            {userRating ? `${userRating}.0 / 5.0` : '4.5 / 5.0'}
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
            <div style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>댓글</h2>

                <div style={{ marginTop: '10px' }}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 입력하세요"
                        rows={3}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            resize: 'none',
                            backgroundColor: '#1a1a1a',
                            color: '#fff',
                            border: '1px solid #444',
                        }}
                    />
                    <button
                        onClick={handleAddComment}
                        style={{
                            marginTop: '10px',
                            padding: '8px 16px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        댓글 작성
                    </button>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                    {comments.length === 0 ? (
                        <li style={{ color: '#888' }}>아직 댓글이 없습니다.</li>
                    ) : (
                        comments.map((comment, index) => (
                            <li
                                key={index}
                                style={{
                                    background: '#1a1a1a',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    marginBottom: '10px',
                                    border: '1px solid #333',
                                }}
                            >
                                {comment}
                            </li>
                        ))
                    )}
                </ul>
            </div>

            {showModal && (
                <StarRatingModal
                    onClose={() => setShowModal(false)}
                    onSubmit={(rating) => {
                        setUserRating(rating)
                        setShowModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default GameDetail
