import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[92vh] md:h-[88vh] overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/60 to-[#0b1020]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="relative inline-block">
            <motion.h1
              initial={{ letterSpacing: '0.25em' }}
              animate={{ letterSpacing: '0.02em' }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.25)]"
            >
              Rahamat Ali
            </motion.h1>
            <motion.span
              aria-hidden="true"
              className="absolute -inset-x-2 -inset-y-1 rounded-xl"
              initial={{ y: 0 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'block' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-zinc-300/95"
          >
            “N8N Automation Expert | Vibe Coding | Marketing Expert | Aspiring Entrepreneur | Curious Mind”
          </motion.p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#0b1020] px-5 py-2.5 font-semibold shadow-lg shadow-yellow-600/20 hover:brightness-110 transition">View Portfolio</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full ring-1 ring-white/20 bg-white/5 backdrop-blur-md text-zinc-100 px-5 py-2.5 hover:bg-white/10 transition">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-500/40 to-yellow-700/40 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=820&auto=format&fit=crop"
              alt="Rahamat Ali portrait"
              className="relative rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover ring-2 ring-yellow-500/30 shadow-2xl shadow-black/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
