import React from 'react';
import { AddLane } from './AddLane';
import { Lane } from './Lane';
import { useLaneStore } from '../store/laneStore';

export function RedditApp() {
  const { lanes, addLane, removeLane } = useLaneStore();

  return (
    <div className="app">
      <AddLane onAdd={addLane} />
      <div className="lanes">
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            subreddit={lane.subreddit}
            onRemove={() => removeLane(lane.id)}
          />
        ))}
      </div>
      <style>{`
        .app {
          max-width: 100%;
          margin: 0 auto;
        }
        .lanes {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}