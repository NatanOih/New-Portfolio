"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoItem } from "../_lib/types";

export default function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/15">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play ${video.title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-white/15 text-left"
    >
      <Image
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-300 group-hover:scale-110">
          <Play fill="currentColor" size={22} className="ml-1" />
        </div>
      </div>
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-sm font-medium">
        {video.title}
      </p>
    </button>
  );
}
