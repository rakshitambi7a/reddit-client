import { create } from 'zustand';

interface Lane {
  id: string;
  subreddit: string;
}

interface LaneStore {
  lanes: Lane[];
  addLane: (subreddit: string) => void;
  removeLane: (id: string) => void;
}

export const useLaneStore = create<LaneStore>((set) => ({
  lanes: [{ id: '1', subreddit: 'programming' }],
  addLane: (subreddit) =>
    set((state) => ({
      lanes: [...state.lanes, { id: crypto.randomUUID(), subreddit }],
    })),
  removeLane: (id) =>
    set((state) => ({
      lanes: state.lanes.filter((lane) => lane.id !== id),
    })),
}));