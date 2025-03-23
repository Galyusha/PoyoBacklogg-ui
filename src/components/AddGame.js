import React, { useState } from 'react';
import { addGame } from '../services/api';

const AddGame = ({ onGameAdded }) => {
    const [game, setGame] = useState({
        title: '',
        platform: '',
        genre: '',
        releaseDate: '',
        status: 'Backlog',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addGame(game);
            onGameAdded(response.data);
            setGame({
                title: '',
                platform: '',
                genre: '',
                releaseDate: '',
                status: 'Backlog',
            });
        } catch (error) {
            console.error('Failed to add game:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={game.title}
                onChange={(e) => setGame({ ...game, title: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Platform"
                value={game.platform}
                onChange={(e) => setGame({ ...game, platform: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Genre"
                value={game.genre}
                onChange={(e) => setGame({ ...game, genre: e.target.value })}
                required
            />
            <input
                type="date"
                value={game.releaseDate}
                onChange={(e) => setGame({ ...game, releaseDate: e.target.value })}
                required
            />
            <select
                value={game.status}
                onChange={(e) => setGame({ ...game, status: e.target.value })}
            >
                <option value="Backlog">Backlog</option>
                <option value="Playing">Playing</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Add Game</button>
        </form>
    );
};

export default AddGame;