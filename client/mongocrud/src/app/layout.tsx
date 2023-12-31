import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className=' flex h-16 bg-yellow-200 px-4 '>
          <form action="/items" className='m-auto flex max-w-screen-xl flex-1'>
            <input className='h-8 flex-1 text-gray-600 px-2' type="text" name='search' />
            <button className='bg-gray-200 px-2 py-1 text-slate-700' type='submit'>Search</button>
          </form>
        </header>
        <main className='max-w-screen-xl p-4' ></main>
      </body>
    </html>
  )
}
