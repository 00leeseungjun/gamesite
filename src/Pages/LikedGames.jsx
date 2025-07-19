// src/pages/LikedGames.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { baseGames } from '../components/GameList'
import GameCard from '../components/GameCard'
import '../components/GameList.css';
const games = baseGames.map((game, index) => ({ id: index + 1, ...game }))

const LikedGames = () => {
    const likedGames = games.filter(game => game.isLiked)

    return (
        <div className="cards-section">
            <div className="header-row">
                <h2 className="title">찜한 게임들</h2>
                <Link to="/" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>← 메인으로</Link>
            </div>

            {likedGames.length > 0 ? (
                <div className="card-grid">
                    {likedGames.map((game) => (
                        <Link
                            to={`/game/${game.id}`}
                            key={game.id}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <GameCard title={game.title} image={game.image} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', marginTop: '40px' }}>찜한 게임이 없습니다.</p>
            )}
        </div>
    )
}

export default LikedGames
