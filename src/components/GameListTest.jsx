import "./GameList.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameListTest = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.3:5000/games') // ← 서버 IP 맞춰서 수정
            .then(res => {
                setGames(res.data);
            })
            .catch(err => {
                console.error('❌ 서버 요청 실패:', err);
            });
    }, []);

    return (
        <div>
            <h2>🎮 게임 목록</h2>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <h3>{game.title}</h3>
                        <img src={game.thumbnail} alt={game.title} style={{ width: '150px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameListTest;
