import Image from 'next/image'
import Landing from './pages/landing.js';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>myUniCourseBuddy</h1>
      <Landing/>
    </main>
  )
}
