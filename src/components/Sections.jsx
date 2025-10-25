import { motion } from 'framer-motion'
import { CheckCircle2, Bot, Cog, TrendingUp, Globe2, Mail, Instagram, Linkedin, Github, Star, BookOpen, Briefcase, MapPin } from 'lucide-react'

const card = 'bg-white/5 backdrop-blur-md ring-1 ring-white/10 rounded-2xl'

export default function Sections() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Quote />
      <Contact />
    </div>
  )
}

function SectionTitle({ icon: Icon, title, id, eyebrow }) {
  return (
    <div id={id} className="pt-20">
      <div className="flex items-center gap-2 text-yellow-300/90">
        {Icon && <Icon size={16} />}
        {eyebrow && <span className="text-xs uppercase tracking-widest">{eyebrow}</span>}
      </div>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-zinc-100">{title}</h2>
    </div>
  )
}

function About() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="about" icon={BookOpen} title="About" eyebrow="Who I am" />
      <div className={`mt-6 ${card} p-6 md:p-8`}>
        <div className="flex items-center gap-2 text-zinc-300/90 text-sm">
          <MapPin size={16} className="text-yellow-400" />
          <span>Tapan, Dakshin Dinajpur, West Bengal, India</span>
        </div>
        <p className="mt-3 text-zinc-300 leading-relaxed">
          I’m a B.Com (Accountancy Honours) student at Balurghat College with a deep curiosity for automation, AI, and business innovation. My goal is to build a next‑generation AI education platform that provides students with 24/7 virtual AI‑generated teachers. From learning to building, I focus on creating tools that make knowledge accessible and engaging.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-zinc-100 font-semibold">Core Values</h3>
            <ul className="text-zinc-300/90 grid grid-cols-2 gap-2">
              {['Curiosity','Consistency','Innovation','Growth'].map((v) => (
                <li key={v} className="flex items-center gap-2"><CheckCircle2 className="text-yellow-400" size={16} /> {v}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-zinc-100 font-semibold">Languages</h3>
            <p className="text-zinc-300/90">I speak Bengali, English, and Hindi — but I express my ideas best in Bengali and English.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function Skills() {
  const skills = [
    'Web Development',
    'Data Analysis',
    'Account Management',
    'Accounting & Trading',
    'Content Writing',
    'Social Media Management',
    'N8N Automation',
    'Script Writing',
    'Video Coding',
    'Marketing & Business Strategy',
    'Research-based Content Creation',
    'AI Video & Image Generation',
    'Social Media Engagement & Trend Spotting',
    'Audience Research',
  ]

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="skills" icon={Cog} title="Skills" eyebrow="What I do" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className={`${card} p-6 md:p-8 col-span-2`}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <li key={s} className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="text-yellow-400 shrink-0" size={18} /> {s}</li>
            ))}
          </ul>
        </div>
        <div className={`${card} p-6 md:p-8 space-y-4`}> 
          <h3 className="font-semibold text-zinc-100">Trending & Valuable</h3>
          <div className="flex items-center gap-2 text-yellow-300"><Bot size={18} /> Automation</div>
          <div className="flex items-center gap-2 text-yellow-300"><Star size={18} /> AI Integration</div>
          <div className="flex items-center gap-2 text-yellow-300"><TrendingUp size={18} /> Marketing Strategy</div>
        </div>
      </div>
    </motion.section>
  )
}

function Projects() {
  const items = [
    {
      title: 'AI Education Platform (Concept)',
      desc: 'A concept for an AI-powered learning app that provides personalized, 24/7 student assistance through virtual AI teachers.',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Personal Portfolio Website',
      desc: 'A modern portfolio website designed to reflect innovation and premium aesthetics.',
      img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'AI Script Writing & Content Automation',
      desc: 'Automation project combining AI script generation and voice-based storytelling.',
      img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="projects" icon={Globe2} title="Projects" eyebrow="Selected work" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.title} className={`${card} overflow-hidden group`}> 
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent"/>
            </div>
            <div className="p-5">
              <h3 className="text-zinc-100 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300/90">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Experience() {
  const exp = [
    {
      role: 'Script Writer',
      company: 'Rohan Tyagi',
      period: 'Mar 2025 – Aug 2025',
      points: [
        'Developed engaging scripts for various digital formats.',
        'Collaborated with production teams to align creative goals.',
        'Researched deeply to enhance authenticity and relevance.',
      ],
    },
    {
      role: 'Content Intern',
      company: 'Josh Talks',
      period: 'Jun 2023 – Feb 2025',
      points: [
        'Assisted in creating short educational scripts for AI voiceover adaptation.',
        'Proofread and optimized scripts for regional audiences (Bengali & Hindi).',
        'Collaborated on social media campaigns to improve engagement.',
        'Contributed to AI-driven content training and development.',
      ],
    },
  ]

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="experience" icon={Briefcase} title="Experience" eyebrow="Background" />
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {exp.map((e) => (
          <div key={e.role} className={`${card} p-6 md:p-8`}> 
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-zinc-100 font-semibold">{e.role}</h3>
                <p className="text-zinc-300/80">{e.company}</p>
              </div>
              <span className="text-xs text-yellow-300/90 bg-yellow-500/10 px-2 py-1 rounded-full ring-1 ring-yellow-500/20">{e.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-zinc-300/90">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2"><CheckCircle2 className="text-yellow-400 shrink-0" size={16} /> <span>{p}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Education() {
  const items = [
    { school: 'Balurghat College', detail: 'Bachelor of Commerce, Accounting & Finance (2025–2029)' },
    { school: 'WBCHSE – Higher Secondary, Commerce (2024)', detail: 'GPA: 70%' },
    { school: 'WBBSE – Madhyamik (2022)', detail: 'GPA: 64%' },
  ]
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="education" icon={BookOpen} title="Education" eyebrow="Learning journey" />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.school} className={`${card} p-6`}> 
            <h3 className="text-zinc-100 font-semibold">{i.school}</h3>
            <p className="mt-2 text-zinc-300/90">{i.detail}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Quote() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="quote" icon={Star} title="Favorite Quote" eyebrow="Inspiration" />
      <div className={`${card} mt-6 p-6 md:p-10 text-center`}> 
        <p className="text-xl md:text-2xl text-yellow-200/90 font-semibold">
          “সফলতার পথে অস্থিরতা স্বাভাবিক। কখনও হার মানাবেন না, কারণ আগামী ধাপেও সফলতা অপেক্ষা করছে।”
        </p>
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionTitle id="contact" icon={Mail} title="Contact" eyebrow="Let’s connect" />
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className={`${card} p-6 md:p-8 space-y-4`}>
          <div className="flex items-center gap-3 text-zinc-300"><Mail className="text-yellow-400" size={18} /> <a className="hover:text-yellow-300" href="mailto:myrahamat90@gmail.com">myrahamat90@gmail.com</a></div>
          <div className="flex items-center gap-3 text-zinc-300"><Instagram className="text-yellow-400" size={18} /> <a className="hover:text-yellow-300" href="https://instagram.com/i2rahamat" target="_blank" rel="noreferrer">@i2rahamat</a></div>
          <div className="flex items-center gap-3 text-zinc-300"><Linkedin className="text-yellow-400" size={18} /> <a className="hover:text-yellow-300" href="https://www.linkedin.com/in/rahamat-ali" target="_blank" rel="noreferrer">LinkedIn: Rahamat Ali</a></div>
          <div className="flex items-center gap-3 text-zinc-300"><Github className="text-yellow-400" size={18} /> <a className="hover:text-yellow-300" href="https://github.com/70015" target="_blank" rel="noreferrer">github.com/70015</a></div>
          <div className="pt-4">
            <span className="text-sm text-zinc-400 animate-pulse">— Rahamat Ali</span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const name = data.get('name')
            const email = data.get('email')
            const message = data.get('message')
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
            window.location.href = `mailto:myrahamat90@gmail.com?subject=Portfolio%20Inquiry&body=${body}`
          }}
          className={`${card} p-6 md:p-8 space-y-4`}
        >
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Name</label>
            <input name="name" required className="w-full bg-white/5 rounded-lg px-4 py-2.5 ring-1 ring-white/10 focus:ring-yellow-400/40 outline-none text-zinc-100 placeholder:text-zinc-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Email</label>
            <input name="email" type="email" required className="w-full bg-white/5 rounded-lg px-4 py-2.5 ring-1 ring-white/10 focus:ring-yellow-400/40 outline-none text-zinc-100 placeholder:text-zinc-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full bg-white/5 rounded-lg px-4 py-2.5 ring-1 ring-white/10 focus:ring-yellow-400/40 outline-none text-zinc-100 placeholder:text-zinc-400" placeholder="Write your message..." />
          </div>
          <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#0b1020] px-6 py-2.5 font-semibold shadow-lg shadow-yellow-600/20 hover:brightness-110 transition">Send</button>
        </form>
      </div>
    </motion.section>
  )
}
