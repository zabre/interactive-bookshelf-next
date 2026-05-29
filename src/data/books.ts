export type Book = {
  id: string
  title: string
  author: string
  spineColor: string
  spineCover?: string
  cover: string
  tag: string
  review: string
  link: string
  tilt: number
}

export const books: Book[] = [
  {
    id: '01',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    spineColor: '#c0392b',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
    tag: 'Psychology',
    review: 'A landmark book on cognitive biases and the two systems that drive the way we think. Changed how I approach every decision I make.',
    link: '#',
    tilt: -2,
  },
  {
    id: '02',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    spineColor: '#2c3e50',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg',
    tag: 'Design',
    review: 'The definitive book on human-centered design. Norman explains why bad design is everywhere and how to fix it.',
    link: '#',
    tilt: 1.5,
  },
  {
    id: '03',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    spineColor: '#8e44ad',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    tag: 'History',
    review: 'A sweeping narrative reframing everything from agriculture to capitalism as shared myths we collectively believe in.',
    link: '#',
    tilt: -1,
  },
  {
    id: '04',
    title: 'Zero to One',
    author: 'Peter Thiel',
    spineColor: '#16a085',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg',
    tag: 'Startup',
    review: 'Contrarian and sharp. True innovation is going from 0 to 1 — not copying what already exists.',
    link: '#',
    tilt: 2,
  },
  {
    id: '05',
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    spineColor: '#e67e22',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    tag: 'Engineering',
    review: 'Still the best book on software craftsmanship. Timeless advice on how to write maintainable, flexible and robust code.',
    link: '#',
    tilt: -1.5,
  },
  {
    id: '06',
    title: 'Deep Work',
    author: 'Cal Newport',
    spineColor: '#1a252f',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
    tag: 'Productivity',
    review: 'Newport makes a compelling case that deep focus is the superpower of our era. Practical and motivating.',
    link: '#',
    tilt: 1,
  },
  {
    id: '07',
    title: 'Dune',
    author: 'Frank Herbert',
    spineColor: '#b7950b',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg',
    tag: 'Sci-Fi',
    review: 'The greatest science-fiction epic ever written. A meditation on ecology, religion, and power.',
    link: '#',
    tilt: -2.5,
  },
  {
    id: '08',
    title: 'Show Your Work',
    author: 'Austin Kleon',
    spineColor: '#e74c3c',
    spineCover: 'https://covers.openlibrary.org/b/isbn/9780761178972-L.jpg',
    cover: 'https://covers.openlibrary.org/b/isbn/9780761178972-L.jpg',
    tag: 'Creativity',
    review: 'Documenting your creative process is as valuable as the final output. Small but powerful.',
    link: '#',
    tilt: 2,
  },
]
