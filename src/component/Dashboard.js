import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const Dashboard = () => {
    const [search, setSearch] = useState('Sample');
    const [notifications, setNotifications] = useState([]);

    const handleSearch = (e) => {
        console.log(e)
        setSearch(e.target.value);
    };

    useEffect(() => {
        // Web Socket is Failing that link is not correct
        const ws = new WebSocket('wss://api.example.com/notifications');
        console.log(ws, "web")
        ws.onmessage = (event) => {
            setNotifications(prev => [...prev, event.data]);
        };
    }, []);

    

    return (
        <div>

            <div>
                <input
                    type="text"
                    onChange={handleSearch}
                    value={search}
                />
            </div>
            {/* <UserList searchTerm={search} /> */}
            <div>
                {notifications.map((note, index) => (
                    <div>{note}</div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
