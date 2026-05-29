'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { type Book } from '@/data/books'

interface Props {
  book: Book
  isExpanded: boolean
  isAny: boolean
  onHover: () => void
  onLeave: () => void
  onSelect: () => void
}

const SPINE_W = 52
const EXPANDED_W = 210
const HEIGHT = 320

export function BookSpine({ book, isExpanded, isAny, onHover, onLeave, onSelect }: Props) {
  const idle = !isExpanded && isAny

  return (
    <motion.div
      className="relative cursor-pointer flex-shrink-0 overflow-hidden"
      style={{
        height: HEIGHT,
        borderRadius: '3px 3px 2px 2px',
        transformOrigin: 'bottom center',
        backgroundColor: book.spineColor,
      }}
      animate={{
        width: isExpanded ? EXPANDED_W : SPINE_W,
        rotate: isExpanded ? 0 : idle ? book.tilt * 0.4 : book.tilt,
        y: isExpanded ? -16 : idle ? 4 : 0,
        scale: isExpanded ? 1 : idle ? 0.97 : 1,
        filter: isExpanded
          ? 'brightness(1) saturate(1.1)'
          : idle
          ? 'brightness(0.65) saturate(0.7)'
          : 'brightness(0.85) saturate(0.9)',
        boxShadow: isExpanded
          ? '0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)'
          : idle
          ? '1px 2px 6px rgba(0,0,0,0.3)'
          : '2px 4px 14px rgba(0,0,0,0.45)',
      }}
      transition={{
        width:  { type: 'spring', stiffness: 260, damping: 28, mass: 0.8 },
        rotate: { type: 'spring', stiffness: 180, damping: 22 },
        y:      { type: 'spring', stiffness: 220, damping: 24 },
        scale:  { type: 'spring', stiffness: 220, damping: 24 },
        filter: { duration: 0.35, ease: 'easeOut' },
        boxShadow: { duration: 0.3, ease: 'easeOut' },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Spine cover image (always visible when collapsed) */}
      {book.spineCover && (
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={book.spineCover}
            alt={book.title}
            fill
            className="object-cover"
            style={{ objectPosition: 'left center' }}
            unoptimized
          />
          {/* colour tint overlay so spine stays readable */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: book.spineColor, opacity: 0.45, mixBlendMode: 'multiply' }}
          />
        </motion.div>
      )}

      {/* Spine text label */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.span
            key="label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none"
          >
            <span
              className="text-white/80 text-[0.58rem] tracking-[0.14em] uppercase font-medium"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                whiteSpace: 'nowrap',
                maxHeight: HEIGHT - 24,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
              }}
            >
              {book.title}
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Expanded panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.08, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
            exit={{ opacity: 0, x: 4, transition: { duration: 0.15 } }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative w-full" style={{ height: '65%' }}>
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </div>
            <div className="flex flex-col gap-1.5 p-3 flex-1" style={{ background: 'rgba(10,8,6,0.85)' }}>
              <span className="text-[0.58rem] tracking-[0.22em] uppercase" style={{ color: '#d4a853' }}>
                {book.tag}
              </span>
              <p className="text-[0.7rem] font-semibold leading-snug text-white line-clamp-2">
                {book.title}
              </p>
              <p className="text-[0.58rem] italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {book.author}
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); onSelect() }}
                className="mt-auto text-[0.58rem] tracking-[0.14em] uppercase px-2 py-1.5 rounded-sm transition-all duration-200"
                style={{
                  border: '1px solid #d4a853',
                  color: '#d4a853',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.background = '#d4a853'
                  ;(e.currentTarget as HTMLButtonElement).style.color = '#000'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLButtonElement).style.color = '#d4a853'
                }}
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
