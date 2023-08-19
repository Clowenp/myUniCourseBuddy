// import '../globals.css'
import Schedule from './schedule/schedule.js';
import Groups from './groups/groups.js';
import Header from '../components/header.js'
import { Inter } from 'next/font/google'
export default function Landing() {
  return (
    <html lang="en">
      <body>
        <Header />
        <Groups />
        <Schedule/>
      </body>
    </html>
  )
}