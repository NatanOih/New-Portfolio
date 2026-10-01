import Link from "next/link";
import Image from "next/image";
import OrbitCursor from "./_components/OrbitCursor";
import bandPhoto from "../../public/band-photo.jpg";
import devIllustration from "../../public/dev-illustration.jpg";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-10 px-4 py-16">
      <OrbitCursor />

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Natan Oihman</h1>
        <p className="text-gray-400 mt-2">What are you here for?</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <Link
          href="/code"
          className="group relative flex-1 aspect-[4/5] rounded-xl border border-white/10 overflow-hidden transition-all hover:border-white/20"
        >
          <Image
            src={devIllustration}
            alt="Illustration of a fullstack developer at work"
            fill
            placeholder="blur"
            className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="relative h-full flex flex-col items-center justify-end gap-2 text-center p-8">
            <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
              💻
            </span>
            <span className="text-xl font-semibold">
              Software Development
            </span>
            <span className="text-sm text-gray-300">
              Projects, experience, and skills
            </span>
          </div>
        </Link>

        <Link
          href="/music"
          className="group relative flex-1 aspect-[4/5] rounded-xl border border-white/10 overflow-hidden transition-all hover:border-white/20"
        >
          <Image
            src={bandPhoto}
            alt="Playing bass with the band"
            fill
            placeholder="blur"
            className="object-cover object-[22%_30%] grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="relative h-full flex flex-col items-center justify-end gap-2 text-center p-8">
            <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
              🎸
            </span>
            <span className="text-xl font-semibold">Music</span>
            <span className="text-sm text-gray-300">
              Bass playing and bookings
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}
