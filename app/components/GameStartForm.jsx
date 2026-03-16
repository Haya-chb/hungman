import { useState } from 'react';

export const GameStartForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = '/game';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pseudo">Pseudo</label>
      <input type="text" id="pseudo" value={name} onChange={e => setName(e.target.value)} />

      <input type="submit" value="Jouer" />
    </form>
  );
};