export interface RedditPost {
  data: {
    title: string;
    author: string;
    ups: number;
    permalink: string;
    thumbnail: string;
    url: string;
    created_utc: number;
    num_comments: number;
    subreddit: string;
  };
}

export interface RedditResponse {
  data: {
    children: RedditPost[];
  };
}