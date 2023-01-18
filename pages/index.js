import Head from 'next/head'
import { Inter } from '@next/font/google'
import DrawerAppBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     This is home
     <h2>This is home page from branch1</h2>
     <h2>This is home page from branch1 new</h2>
    </div>
  )
}
