import React, { useEffect, useState } from 'react';
import { getGames, deleteGame } from '../services/api';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await getGames();
                setGames(response.data);
            } catch (error) {
                console.error('Failed to fetch games:', error);
            }
        };

        fetchGames();
    }, []);

    const handleDelete = (id) => {
        deleteGame(id).then(() => {
            setGames(games.filter(game => game.id !== id));
        });
    };

    return (
        <div>
            <h1>My Games</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        {game.title} - {game.status}
                        <button onClick={() => handleDelete(game.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;