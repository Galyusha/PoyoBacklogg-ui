import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);

    const handleRegister = (user) => {
        setUser(user);
    };

    const handleLogin = (user) => {
        setUser(user);
    };

    const handleGameAdded = (newGame) => {
        setGames([...games, newGame]);
    };

    return (
        <div className="App">
            {!user ? (
                <>
                    <Register onRegister={handleRegister} />
                    <Login onLogin={handleLogin} />
                </>
            ) : (
                <>
                    <h1>Welcome, {user.username}!</h1>
                    <AddGame onGameAdded={handleGameAdded} userId={user.id} />
                    <GameList games={games} />
                </>
            )}
        </div>
    );
};

export default App;