import React, { useEffect, useState } from 'react';
import type { RedditResponse } from '../types/reddit';
import { fetchSubredditPosts } from '../utils/reddit';
import { RedditPost } from './RedditPost';

interface Props {
  subreddit: string;
  onRemove: () => void;
}

export const Lane: React.FC<Props> = ({ subreddit, onRemove }) => {
  const [posts, setPosts] = useState<RedditResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchSubredditPosts(subreddit);
      if (data) {
        setPosts(data);
        setError('');
      } else {
        setError(`Failed to load r/${subreddit}`);
      }
    };
    loadPosts();
  }, [subreddit]);

  return (
    <div className="lane">
      <div className="lane-header">
        <h2>r/{subreddit}</h2>
        <button onClick={onRemove}>×</button>
      </div>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="posts">
          {posts?.data.children.map((post) => (
            <RedditPost key={post.data.permalink} post={post.data} />
          ))}
        </div>
      )}
      <style>{`
        .lane {
          flex: 0 0 350px;
          background: #2a2a2a;
          border-radius: 8px;
          padding: 1rem;
          height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .lane-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .lane-header h2 {
          margin: 0;
          font-size: 1.2rem;
        }
        .lane-header button {
          background: none;
          border: none;
          color: #888;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .error {
          color: #ff4444;
          padding: 1rem;
          text-align: center;
        }
        .posts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};