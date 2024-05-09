
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function UserProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
