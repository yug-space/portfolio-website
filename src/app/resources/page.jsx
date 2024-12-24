import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const books = [
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
  },
  {
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
  },
  {
    title: 'The Bhagavad Gita',
  },
  {
    title: 'Ashtavakra Gita',
  },
  {
    title: 'The Psychology of Selling',
    author: 'Brian Tracy',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
  },
  {
    title: 'The Biggest Ideas in the Universe',
    author: 'Sean Carroll',
  },
  {
    title: 'Answers to the Big Questions',
    author: 'Stephen Hawking',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
  },
]
const podcasts = [
  {
    title: 'Joe Rogan Experience #1309 - Naval Ravikant',
  },
  {
    title: 'Ilya Sutskever: Deep Learning | Lex Fridman Podcast #94m ',
  },
  {
    title: 'Andrej Karpathy: Tesla AI, Self-Driving, Optimus, Aliens, and AGI | Lex Fridman Podcast #333 ',
  },
  {
    title:"Aravind Srinivas: Perplexity CEO on Future of AI, Search & the Internet | Lex Fridman Podcast #434"
  },{
    title: 'The Mark Zuckerberg Interview - Acquired',
  },
  {
    title: 'NVIDIA CEO Jensen Huang - Acquired',
  },
  {
    title: 'Elon Musk: Neuralink and the Future of Humanity | Lex Fridman Podcast #438',
  },
  
  

]
export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',

}

export default function Projects() {
  return (
    <SimpleLayout title="Books I've read">
      <ul role="list" className="mt-[-50px]">
        {books.map((book) => (
          <Card as="li" key={book.name} className="list-bullet">
            <h2 className="flex items-center text-lg text-zinc-800 before:mr-2 before:content-['•'] dark:text-zinc-100">
              {book.title} {book.author ? `by ${book.author}` : ''}
            </h2>
          </Card>
        ))}
      </ul>
      <h1 className="mt-10 text-4xl">Top Podcasts That Inspired Me</h1>
      <div className="mt-10">
        {podcasts.map((podcast) => (
          <h2 className="flex items-center text-lg text-zinc-800 before:mr-2 before:content-['•'] mt-2 dark:text-zinc-100">
            {podcast.title}
          </h2>
        ))}
      </div>
    </SimpleLayout>
  )
}
