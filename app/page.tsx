/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FkHhnpAh84C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
          {/* Main wrapper for video embed + description + share button */}
          <div className="grid gap-4 md:flex md:justify-center">
            {/* iframe wrapper: */}
            <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm md:min-w-[400px]  w-full md:w-auto aspect-video dark:border-gray-800 dark:bg-gray-950">
              <iframe // YouTube iframe embed
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
            {/* Description and buttons column */}
            <div className="flex flex-col gap-2 max-w-screen-sm">
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
              <p>&nbsp;</p>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="w-full" size="sm" variant="outline">
                    Bagikan
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Bagikan halaman ini</DrawerTitle>
                    <DrawerDescription>
                      Twitter/X, WhatsApp, atau salin link
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className="flex gap-2 p-4">
                    <Link
                      href="whatsapp://send?text=🎥 Tonton film DIRTY VOTE, full, tanpa iklan - https://dirty-vote.vercel.app/ 🍿"
                      data-action="share/whatsapp/share"
                    >
                      <Button variant="default">WhatsApp</Button>
                    </Link>
                    <Link
                      className="font-medium text-sm tracking-wide"
                      href="https://twitter.com/intent/tweet?text=🎥 Tonton film DIRTY VOTE, full, tanpa iklan - https://dirty-vote.vercel.app/ 🍿"
                      target="_blank"
                    >
                      <Button variant="default">Twitter/X</Button>
                    </Link>
                  </div>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Kembali</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <a
                href="https://www.youtube.com/watch?v=RRgLZ66NCmE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full" size="sm" variant="outline">
                  Tonton di YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <header className="flex items-center h-14 px-4 border-t border-gray-100 sm:h-16 md:px-6">
        <nav className="ml-auto space-x-4 md:space-x-6">
          <Link
            className="font-medium text-sm tracking-wide"
            href="https://twitter.com/intent/tweet?text=Hai @vngnc, saya menemukan masalah pada dirty-vote.vercel.app: ..."
            target="_blank"
          >
            Laporkan masalah
          </Link>
          <Link className="font-medium text-sm tracking-wide" href="#">
            Github
          </Link>
        </nav>
      </header>
    </div>
  );
}
