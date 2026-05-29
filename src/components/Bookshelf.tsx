'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BookSpine } from './BookSpine'
import { BookOverlay } from './BookOverlay'
import { books, type Book } from '@/data/books'

export function Bookshelf() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  return (
    <>
      <div className="flex items-end gap-[3px]">
        {books.map((book) => (
          <BookSpine
            key={book.id}
            book={book}
            isExpanded={hoveredId === book.id}
            onHover={() => setHoveredId(book.id)}
            onLeave={() => setHoveredId(null)}
            onSelect={() => setSelectedBook(book)}
          />
        ))}
      </div>
      <div className="shelf-wood w-full" />

      <AnimatePresence>
        {selectedBook && (
          <BookOverlay
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
