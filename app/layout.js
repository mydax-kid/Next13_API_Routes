import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight: ['400', '700']
});

export const metadata = {
  title: 'Mydax social',
  description: 'Web development tutorials and courses',
  keywords: 'web development, javascript, css, nextjs, frontend'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
