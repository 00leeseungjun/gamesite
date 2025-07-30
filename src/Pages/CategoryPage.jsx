import React from 'react';
import { useParams } from 'react-router-dom';
import games from '../data/games';
import GameCard from '../components/GameCard';

const CategoryPage = () => {
    const { categoryType, categoryValue } = useParams();

    // 각 URL 카테고리 키에 대응되는 실제 데이터 속성
    const keyMap = {
        genre: 'genre',
        theme: 'theme',
        platform: 'platform',
        play: 'playType',
        flow: 'progressType',
    };

    const key = keyMap[categoryType];

    if (!key) {
        return <p>잘못된 카테고리입니다.</p>;
    }

    const filteredGames = games.filter((game) => {
        const value = game[key];
        if (!value) return false;
        if (Array.isArray(value)) return value.includes(categoryValue);
        return value === categoryValue;
    });

    return (
        <div>
            <h2>{`카테고리: ${categoryValue}`}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <GameCard
                            key={game.id}
                            title={game.game_title}
                            image={game.game_thumbnail}
                        />
                    ))
                ) : (
                    <p>해당 카테고리에 게임이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
