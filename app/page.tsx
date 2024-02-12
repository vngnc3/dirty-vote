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
              infrastruktur kekuasaan yang kuat, tanpa malu-malu dipertontonkan
              secara telanjang di demi mempertahankan status quo. Bentuk-bentuk
              kecurangannya diurai dengan analisa hukum tata negara.
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
      <div className="flex flex-col items-center gap-4 p-4 py-10 md:gap-8 md:p-10">
        <div className="flex flex-col gap-2 max-w-5xl text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Gue concern dengan eksistensi film Dirty Vote. Ada beberapa laporan
            bahwa videonya sulit dicari di YouTube. Platform seperti YouTube dan
            Twitter rentan dimanipulasi oleh oknum tertentu. Halaman dedicated
            ini ditujukan untuk mempermudah sharing dan menonton.
          </p>
          <p>
            Silakan gunakan satu link ini untuk semua platform. Bagikan ke
            WhatsApp, Telegram, Discord atau <b>platform apapun</b>. Tanpa
            iklan, tanpa gangguan. Aplikasi ini meng-embed video asli dari
            YouTube. Jumlah views dari aplikasi ini akan terhitung di laman
            YouTube.
          </p>
          <p>...selama film Dirty Vote masih ada di YouTube.</p>
          <p>
            Amit-amit film ini hilang dari YouTube, gue bisa dengan gampang
            ganti sumber url video film Dirty Vote di halaman aplikasi ini.
            <br />
            <b>Link yg kalian bagikan nggak akan mati. ✊</b>
          </p>
          <p>
            Ini juga salah satu alasan gue bikin halaman dedicated ini. Biar
            nggak bergantung sama YouTube.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 inset-x-0 flex items-center h-14 px-4 border-t border-gray-100 sm:h-16 md:px-6 bg-white shadow-2xl">
        <nav className="ml-auto space-x-4 md:space-x-6">
          <Link
            className="font-medium text-sm tracking-wide"
            href="https://twitter.com/intent/tweet?text=Hai @vngnc, saya menemukan masalah pada https://dirty-vote.vercel.app: ..."
            target="_blank"
          >
            Laporkan masalah
          </Link>
          <Link
            className="font-medium text-sm tracking-wide"
            href="https://github.com/vngnc3/dirty-vote"
            target="_blank"
          >
            Github
          </Link>
        </nav>
      </div>
    </main>
  );
}
