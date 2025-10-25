import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Laptop, Rocket } from 'lucide-react'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#quote', label: 'Quote' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ThemeToggle = () => (
    <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition ${theme === 'light' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`}
        aria-label="Light"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition ${theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`}
        aria-label="Dark"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition ${theme === 'system' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`}
        aria-label="System"
      >
        <Laptop size={16} />
      </button>
    </div>
  )

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[#0b1020]/70 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-[#0b1020] shadow-lg">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <div className="text-sm text-zinc-300">Portfolio</div>
            <div className="font-semibold text-zinc-100">Rahamat Ali</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-zinc-300 hover:text-yellow-300 transition">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="md:hidden p-2 rounded-md hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1020]/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-zinc-200 hover:text-yellow-300">
                {n.label}
              </a>
            ))}
            <div className="pt-2">
              <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-1">
                <button onClick={() => setTheme('light')} className={`p-2 rounded-full transition ${theme === 'light' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`} aria-label="Light">
                  <Sun size={16} />
                </button>
                <button onClick={() => setTheme('dark')} className={`p-2 rounded-full transition ${theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`} aria-label="Dark">
                  <Moon size={16} />
                </button>
                <button onClick={() => setTheme('system')} className={`p-2 rounded-full transition ${theme === 'system' ? 'bg-yellow-500/20 text-yellow-300' : 'hover:bg-white/10'}`} aria-label="System">
                  <Laptop size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
