import { Bookshelf } from '@/components/Bookshelf'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
      <p
        className="text-xs tracking-[0.28em] uppercase mb-12 self-start"
        style={{ color: 'rgba(212,168,83,0.6)', letterSpacing: '0.28em' }}
      >
        Books that shaped me
      </p>
      <Bookshelf />
    </main>
  )
}
