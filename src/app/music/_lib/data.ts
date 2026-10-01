import { MusicProject, SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/natan_oih/",
    icon: "instagram",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@MrSirr",
    icon: "youtube",
  },
];

export const musicProjects: MusicProject[] = [
  {
    name: "Solo Covers",
    description: "Bass and guitar covers.",
    channelUrl: "https://www.youtube.com/@MrSirr",
    videos: [
      {
        id: "SQD46ak4aCw",
        title: "Sarky Puppy - Gemini /// Guitar + Bass Cover",
        url: "https://www.youtube.com/watch?v=SQD46ak4aCw",
      },
      {
        id: "DAks8Acjpkk",
        title:
          "The Fearless Flyers - The Warped State of... /// Bass and Guitars cover",
        url: "https://www.youtube.com/watch?v=DAks8Acjpkk",
      },
      {
        id: "voZwCoSREqA",
        title:
          "Too Hot In L.A. (Vulfmix) - Woody and Jeremy and Vulfmon /// Bass Cover",
        url: "https://www.youtube.com/watch?v=voZwCoSREqA",
      },
    ],
  },
  {
    name: "Plastic Karma",
    description: "Radiohead tribute band.",
    channelUrl: "https://www.youtube.com/@PlasticKarmaBand",
    videos: [
      {
        id: "rVvMxJialD8",
        title: "Radiohead | Paranoid Android | Cover by Plastic Karma",
        url: "https://www.youtube.com/watch?v=rVvMxJialD8",
      },
      {
        id: "VZiF__dLyC0",
        title: "Radiohead | 15 Step | Cover by Plastic Karma",
        url: "https://www.youtube.com/watch?v=VZiF__dLyC0",
      },
    ],
  },
];
