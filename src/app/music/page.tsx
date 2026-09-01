import Link from "next/link";

export default function MusicHome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <Link href="/" className="text-sm text-gray-400 hover:text-white absolute top-6 left-6">
        &larr; Back
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold">Natan Oihman</h1>
      <p className="text-lg text-gray-400">Bass Guitar Player</p>

      <p className="text-gray-500 max-w-md">
        This page is under construction. Bio, gigs, and booking info are
        coming soon.
      </p>
    </main>
  );
}
