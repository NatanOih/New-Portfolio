"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MusicProject } from "../_lib/types";
import VideoCard from "./VideoCard";

export default function ProjectSection({ project }: { project: MusicProject }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl flex flex-col gap-4"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <a
          href={project.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          View channel <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <VideoCard video={video} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
