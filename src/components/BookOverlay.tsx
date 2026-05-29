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
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(5,4,3,0.82)', backdropFilter: 'blur(12px) saturate(0.8)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.9 }}
        className="relative flex gap-8 p-8 max-w-[660px] w-[90%] rounded-xl"
        style={{
          background: 'rgba(18,14,10,0.96)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 transition-colors duration-150"
          style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
        >
          ✕
        </button>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-md overflow-hidden flex-shrink-0 shadow-2xl"
          style={{ width: 148, height: 215 }}
        >
          <Image src={book.cover} alt={book.title} fill className="object-cover" unoptimized />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-2 justify-center"
        >
          <span className="text-[0.62rem] tracking-[0.22em] uppercase" style={{ color: '#d4a853' }}>
            {book.tag}
          </span>
          <h2 className="text-[1.45rem] leading-tight font-normal" style={{ color: '#f0ece4' }}>
            {book.title}
          </h2>
          <p className="text-[0.82rem] italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
            — {book.author}
          </p>
          <p className="text-[0.88rem] leading-[1.75] mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {book.review}
          </p>
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 self-start text-[0.72rem] tracking-[0.16em] uppercase pb-px transition-opacity duration-200 hover:opacity-60"
            style={{ color: '#d4a853', borderBottom: '1px solid #d4a853' }}
          >
            Read my thoughts →
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
