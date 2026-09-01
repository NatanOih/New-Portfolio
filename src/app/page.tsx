import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-10 px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Natan Oihman</h1>
        <p className="text-gray-400 mt-2">What are you here for?</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <Link
          href="/code"
          className="group flex-1 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all p-8 flex flex-col items-center gap-3 text-center"
        >
          <span className="text-4xl">💻</span>
          <span className="text-xl font-semibold">Software Development</span>
          <span className="text-sm text-gray-400">
            Projects, experience, and skills
          </span>
        </Link>

        <Link
          href="/music"
          className="group flex-1 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all p-8 flex flex-col items-center gap-3 text-center"
        >
          <span className="text-4xl">🎸</span>
          <span className="text-xl font-semibold">Music</span>
          <span className="text-sm text-gray-400">
            Bass playing and bookings
          </span>
        </Link>
      </div>
    </main>
  );
}
