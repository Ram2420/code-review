import React, { useState, useEffect } from 'react';

const UserList = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
        // API Link Is Not Working
        // Try Catch added for error handling
        try {
            const response = await fetch('https://api.example.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            alert(error)
            
        }
      
    }
    fetchUsers();
  }, [searchTerm]);

  const renderUserProfile = (profile) => {
    return <div dangerouslySetInnerHTML={{ __html: profile }} />;
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          {renderUserProfile(user.profile)}
          <button onClick={() => {
            // We don't get data from API so we don't get userId also this also not work
            fetch(`/api/users/${user.id}/activate`, { method: 'POST' })
              .then(response => response.json())
              .then(data => console.log(data));
          }}>
            Activate User
          </button>
        </div>
      ))}
    </div>
  );
};

// There is no Export and I added
export default UserList