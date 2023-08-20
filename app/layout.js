import './globals.css'
import { Ubuntu } from '@next/font/google'
// import { Barriecito } from '@next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '400']
})


export const metadata = {
  title: 'myUniCourseBuddy',
  description: 'project for hackthe6ix!',
}

//work on course schedule display(bottom half of page)
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  )
}
