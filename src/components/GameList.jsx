import React, { useState } from 'react'
import GameCard from './GameCard'
import games from '../data/games'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar' // 필요 시 분리된 SearchBar 사용
import './GameList.css' // 또는 실제 CSS 파일 이름

function GameList() {
    const [showFilter, setShowFilter] = useState(false)

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div>
            <div className="cards-section">
                <div className="header-row">
                    <h2 className="title">모든 게임들</h2>
                    <div className="filter-wrapper">
                        <button className="filter-button" onClick={toggleFilter}>
                            필터
                        </button>
                        {showFilter && (
                            <div className="filter-modal">
                                <div>날짜순</div>
                                <div>찜순</div>
                                <div>별점순</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="card-grid">
                    {games.map((game) => (
                        <Link
                            to={`/game/${game.id}`}
                            key={game.id}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <GameCard title={game.title} image={game.image} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameList
