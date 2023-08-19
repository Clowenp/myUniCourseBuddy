// import '../globals.css'
import Schedule from './landing-page/schedule/schedule.js';
import Groups from './landing-page/groups/groups.js';
import { Inter } from 'next/font/google'
export default function Landing() {
  return (
    <html lang="en">
      <body>
        <Groups />
        <Schedule/>
      </body>
    </html>
  )
}