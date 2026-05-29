'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { type Book } from '@/data/books'

interface Props {
  book: Book
  onClose: () => void
}

export function BookOverlay({ book, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        layoutId={`book-spine-${book.id}`}
        initial={{ scale: 0.95, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 16, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="bg-[#1c1712] border border-white/8 rounded-lg flex gap-8 p-8 max-w-[680px] w-[90%] relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-xl transition-colors"
        >
          ✕
        </button>

        <div className="relative w-40 min-w-[160px] h-[220px] rounded flex-shrink-0 overflow-hidden shadow-xl">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4a853]">
            {book.tag}
          </span>
          <h2 className="text-2xl leading-tight text-white">{book.title}</h2>
          <p className="text-sm italic text-white/50">— {book.author}</p>
          <p className="text-sm leading-relaxed text-white/75 mt-2">{book.review}</p>
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[0.75rem] tracking-[0.15em] uppercase text-[#d4a853] border-b border-[#d4a853] pb-0.5 hover:opacity-70 transition-opacity self-start"
          >
            Read my thoughts →
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
