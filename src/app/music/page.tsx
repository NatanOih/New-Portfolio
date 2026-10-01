import Link from "next/link";
import { musicProjects } from "./_lib/data";
import SocialLinks from "./_components/SocialLinks";
import ProjectSection from "./_components/ProjectSection";
import RecordingService from "./_components/RecordingService";
import MusicContact from "./_components/MusicContact";

export default function MusicHome() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-16 px-4 py-20 text-center">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white absolute top-6 left-6"
      >
        &larr; Back
      </Link>

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Natan Oihman</h1>
        <p className="text-lg text-gray-400">Bass Guitar Player</p>
        <SocialLinks />
      </div>

      <RecordingService />

      <div className="flex flex-col items-center gap-16 w-full">
        {musicProjects.map((project) => (
          <ProjectSection key={project.name} project={project} />
        ))}
      </div>

      <MusicContact />
    </main>
  );
}
