export async function fetchSubredditPosts(subreddit: string): Promise<any> {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) throw new Error('Failed to fetch subreddit data');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching r/${subreddit}:`, error);
    return null;
  }
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    'day'
  );
}