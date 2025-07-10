import React, { useState } from 'react';

interface Props {
  onAdd: (subreddit: string) => void;
}

export const AddLane: React.FC<Props> = ({ onAdd }) => {
  const [subreddit, setSubreddit] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subreddit.trim()) {
      onAdd(subreddit.trim());
      setSubreddit('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-lane">
      <input
        type="text"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        placeholder="Enter subreddit name..."
      />
      <button type="submit">Add Lane</button>
      <style>{`
        .add-lane {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
        }
        input {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #444;
          background: #2a2a2a;
          color: white;
        }
        button {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          border: none;
          background: #4a4a4a;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background: #5a5a5a;
        }
      `}</style>
    </form>
  );
};