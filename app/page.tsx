/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FkHhnpAh84C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10 bg-red-400">
          <div className="grid gap-4 md:grid-cols-[1fr_800px]">
            {/* Main wrapper for video embed + description + share button */}
            <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm min-w-[380px] max-w-[640px] w-full md:w-auto aspect-video dark:border-gray-800 dark:bg-gray-950">
              <iframe
                className="w-full h-full object-cover rounded-md bg-muted"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/RRgLZ66NCmE?si=-eW9Ofw5EUJxc8i3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid gap-2 max-w-screen-md">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                DIRTY VOTE - Full Movie (OFFICIAL)
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dirty Vote dokumenter yang disampaikan oleh tiga ahli hukum tata
                negara yang membintangi film ini. Mereka adalah Zainal Arifin
                Mochtar, Bivitri Susanti, dan Feri Amsari. Ketiganya mengungkap
                berbagai instrumen kekuasaan telah digunakan untuk tujuan
                memenangkan pemilu dan merusak tatanan demokrasi. Penggunaan
                infrastruktur kekuasaan yang kuat, tanpa malu-malu
                dipertontonkan secara telanjang di demi mempertahankan status
                quo. Bentuk-bentuk kecurangannya diurai dengan analisa hukum
                tata negara.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Diunggah 11 Februari 2024
              </p>
              <Button size="sm" variant="outline">
                Bagikan
              </Button>
              <Button size="sm" variant="outline">
                Tonton di YouTube
              </Button>
            </div>
          </div>
        </div>
      </main>
      <header className="flex items-center h-14 px-4 border-t border-gray-100 sm:h-16 md:px-6">
        <nav className="ml-auto space-x-4 md:space-x-6">
          <Link className="font-medium text-sm tracking-wide" href="#">
            Dashboard
          </Link>
          <Link className="font-medium text-sm tracking-wide" href="#">
            Team
          </Link>
          <Link className="font-medium text-sm tracking-wide" href="#">
            Projects
          </Link>
          <Link className="font-medium text-sm tracking-wide" href="#">
            Calendar
          </Link>
        </nav>
      </header>
    </div>
  );
}
