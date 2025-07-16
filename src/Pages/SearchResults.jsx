// src/Pages/SearchResults.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import GameCard from '../components/GameCard';
import '../components/GameList.css'; // GameCard 스타일 재사용

// baseGames import
import { baseGames } from '../components/GameList';

// id 추가
const games = baseGames.map((game, index) => ({ id: index + 1, ...game }));

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    // fuse.js 옵션 설정
    const options = {
        keys: ['title', 'tags', 'progressType'],
        threshold: 0.3, // 오타 감지 정도 조절
    };

    const fuse = new Fuse(games, options);
    const result = fuse.search(query); // 검색어로 퍼지 검색 실행
    const filteredGames = result.map(r => r.item);

    return (
        <div className="cards-section">
            <div className="header-row">
                <h2 className="title">‘{query}’ 검색 결과</h2>
                <Link to="/" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>← 메인으로</Link>
            </div>

            {filteredGames.length > 0 ? (
                <div className="card-grid">
                    {filteredGames.map((game) => (
                        <Link
                            to={`/game/${game.id}`}
                            key={game.id}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <GameCard title={game.title} image={game.image} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', marginTop: '40px' }}>
                    검색 결과가 없습니다.
                </p>
            )}
        </div>
    );
};

export default SearchResults;
