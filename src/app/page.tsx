import { Bookshelf } from '@/components/Bookshelf'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <p className="text-xs tracking-[0.25em] uppercase text-[#d4a853] opacity-70 mb-10 self-start">
        Books that shaped me
      </p>
      <Bookshelf />
    </main>
  )
}
