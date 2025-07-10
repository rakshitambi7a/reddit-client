import React from 'react';
import type { RedditPost as RedditPostType } from '../types/reddit';
import { formatTimestamp } from '../utils/reddit';

interface Props {
  post: RedditPostType['data'];
}

export const RedditPost: React.FC<Props> = ({ post }) => {
  return (
    <div className="post">
      <h3>
        <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
          {post.title}
        </a>
      </h3>
      <div className="post-meta">
        <span>Posted by u/{post.author}</span>
        <span>{formatTimestamp(post.created_utc)}</span>
        <span>↑ {post.ups}</span>
        <span>💬 {post.num_comments}</span>
      </div>
      {post.thumbnail && post.thumbnail !== 'self' && (
        <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
      )}
      <style>{`
        .post {
          background: #1a1a1a;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .post h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }
        .post a {
          color: #fff;
          text-decoration: none;
        }
        .post a:hover {
          text-decoration: underline;
        }
        .post-meta {
          font-size: 0.8rem;
          color: #888;
          display: flex;
          gap: 1rem;
        }
        .post-thumbnail {
          margin-top: 1rem;
          max-width: 100%;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};