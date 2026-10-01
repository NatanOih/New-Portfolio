export type VideoItem = {
  id: string;
  title: string;
  url: string;
};

export type MusicProject = {
  name: string;
  description: string;
  channelUrl: string;
  videos: VideoItem[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "instagram" | "youtube";
};
