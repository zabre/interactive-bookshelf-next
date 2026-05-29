'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { type Book } from '@/data/books'

interface Props {
  book: Book
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
  onSelect: () => void
}

export function BookSpine({ book, isExpanded, onHover, onLeave, onSelect }: Props) {
  return (
    <motion.div
      layoutId={`book-spine-${book.id}`}
      className="relative cursor-pointer rounded-sm overflow-hidden flex-shrink-0"
      style={{ backgroundColor: book.spineColor, height: 300 }}
      animate={{
        width: isExpanded ? 200 : 44,
        y: isExpanded ? -8 : 0,
        boxShadow: isExpanded
          ? '4px 0 24px rgba(0,0,0,0.7)'
          : '2px 0 8px rgba(0,0,0,0.4)',
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Spine text */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.span
            key="spine-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap text-[0.6rem] tracking-[0.12em] uppercase text-white/80 pointer-events-none"
            style={{ width: 'max-content' }}
          >
            {book.title}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative w-full" style={{ height: '62%' }}>
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover brightness-90"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-1 p-3 flex-1 bg-black/40">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#d4a853]">
                {book.tag}
              </span>
              <p className="text-[0.68rem] font-bold leading-tight text-white line-clamp-2">
                {book.title}
              </p>
              <p className="text-[0.58rem] italic text-white/50">{book.author}</p>
              <button
                onClick={(e) => { e.stopPropagation(); onSelect(); }}
                className="mt-auto text-[0.6rem] tracking-[0.12em] uppercase border border-[#d4a853] text-[#d4a853] px-2 py-1 rounded-sm hover:bg-[#d4a853] hover:text-black transition-colors"
              >
                Read my thoughts →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
