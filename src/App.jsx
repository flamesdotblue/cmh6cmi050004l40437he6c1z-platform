import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && systemDark)

    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[#0b1020] text-zinc-200 scroll-smooth selection:bg-yellow-400/30 selection:text-yellow-100">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}
