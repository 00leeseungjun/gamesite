import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import games from '../data/games'
import StarRatingModal from '../modals/StarRatingModal'

const GameDetail = () => {
    const { id } = useParams()
    const game = games.find((g) => g.id === parseInt(id))
    const [showVideo, setShowVideo] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [userRating, setUserRating] = useState(null)

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

    return (
        <div
            className="game-detail-container"
            style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{game.title}</h1>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxHeight: '400px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}>
                <img src={game.image} alt={game.title} style={imageStyle} />
                <video src={game.video} style={videoStyle} controls />
            </div>

            <button
                onClick={() => setShowVideo((prev) => !prev)}
                style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
                {showVideo ? '이미지로 돌아가기' : '영상 보기'}
            </button>

            <hr style={{ margin: '20px 0' }} />

            <div className="info-box" style={{ lineHeight: '1.8' }}>
                <p>
                    <strong>출시일:</strong> 2024.01.01
                </p>
                <p>
                    <strong>개발사:</strong> 예시 스튜디오
                </p>
                <p>
                    <strong>플레이방식:</strong> 싱글 / 멀티
                </p>
                <p>
                    <strong>진행방식:</strong> 실시간 전투
                </p>
                <p>
                    <strong>태그:</strong> 액션, RPG, 전략
                </p>

                {/* ⭐ 별점 + 좋아요 나란히 정렬 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                    <p style={{ cursor: 'pointer', margin: 0 }} onClick={() => setShowModal(true)}>
                        <strong>⭐ 별점:</strong>{' '}
                        {userRating ? `${userRating}.0 / 5.0` : '4.5 / 5.0'} (클릭하여 평가)
                    </p>
                    <p style={{ margin: 0 }}>
                        <strong>👍 좋아요 수:</strong> 123
                    </p>
                </div>
            </div>

            <div className="desc-box" style={{ marginTop: '30px' }}>
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

            {/* ⭐ 별점 모달 */}
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
