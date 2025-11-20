'use client'

import { useState, useEffect } from 'react'

export default function FivePage() {
  // Disable the sticky dot cursor on this page
  useEffect(() => {
    // Hide the sticky dot cursor
    const cursor = document.querySelector('.fixed.w-3.h-3.rounded-full') as HTMLElement
    if (cursor) {
      cursor.style.display = 'none'
    }

    // Also hide by adding a style rule
    const style = document.createElement('style')
    style.innerHTML = `
      .fixed.w-3.h-3.rounded-full {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      if (cursor) {
        cursor.style.display = ''
      }
      document.head.removeChild(style)
    }
  }, [])
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'nexus') {
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 flex items-center justify-center px-6" style={{cursor: 'default'}}>
        {/* Whispy background particles - more subtle */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-md w-full relative">
          <div className="text-center mb-8">
            <div className="inline-block relative">
              {/* Outer glow rings - dimmed */}
              <div className="absolute inset-0 w-24 h-24 -ml-2 -mt-2 rounded-full bg-gradient-to-br from-purple-400/10 via-pink-300/10 to-blue-300/10 blur-md animate-pulse"></div>

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-300/8 via-pink-300/8 to-blue-300/8 backdrop-blur-xl flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200/12 via-pink-200/12 to-blue-200/12 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-300/80 shadow-lg shadow-purple-400/30 animate-pulse"></div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-serif text-purple-300/45 tracking-[0.3em] mb-2 uppercase" style={{fontVariant: 'small-caps', letterSpacing: '0.4em'}}>
              five
            </h1>
            <p className="text-sm text-purple-300/40 font-light tracking-widest">
              Enter passphrase to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="passphrase"
              className={`w-full px-4 py-3 bg-slate-900/30 border ${
                error ? 'border-rose-400/40' : 'border-purple-400/15'
              } rounded-lg text-purple-200/90 placeholder-purple-400/30 focus:outline-none focus:border-purple-400/30 focus:shadow-lg focus:shadow-purple-500/10 transition-all backdrop-blur-sm`}
              autoFocus
            />
            {error && (
              <p className="text-sm text-rose-300/80 font-light tracking-wide">
                Incorrect passphrase
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500/25 via-pink-400/25 to-blue-400/25 hover:from-purple-400/40 hover:via-pink-300/40 hover:to-blue-300/40 border border-purple-400/20 text-purple-200/70 rounded-lg font-light tracking-widest transition-all shadow-lg shadow-purple-500/10 hover:shadow-purple-400/20"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-purple-200/60" style={{cursor: 'default'}}>
      {/* Whispy background particles - very subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-300/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        {/* Tiny sparkle particles - dimmed */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-300/40 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-pink-300/40 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-blue-300/40 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 py-16 sm:py-24">

        {/* Hero */}
        <header className="mb-24 text-center">
          <div className="inline-block mb-8 relative">
            {/* Outer ethereal glow - dimmed */}
            <div className="absolute inset-0 w-20 h-20 -ml-2 -mt-2 rounded-full bg-gradient-to-br from-purple-400/12 via-pink-300/12 to-blue-300/12 blur-lg animate-pulse"></div>

            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-300/8 via-pink-300/8 to-blue-300/8 backdrop-blur-xl flex items-center justify-center relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-200/12 via-pink-200/12 to-blue-200/12 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-purple-300/70 shadow-lg shadow-purple-400/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl font-serif text-purple-200/60 mb-8 tracking-[0.3em] uppercase" style={{fontVariant: 'small-caps', letterSpacing: '0.4em'}}>
            five
          </h1>

          <p className="text-lg sm:text-xl text-purple-300/50 font-light leading-relaxed mb-4 max-w-2xl mx-auto tracking-wide">
            A discreet container for deep inner work, grounded in science, somatics, and harm reduction.
          </p>

          <p className="text-base text-purple-300/40 font-light leading-relaxed mb-12 max-w-2xl mx-auto tracking-wide">
            Preparation, safety-oriented support, integration, and optional contribution to self-experimentation research.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-3 bg-gradient-to-r from-purple-500/20 via-pink-400/20 to-blue-400/20 hover:from-purple-400/30 hover:via-pink-300/30 hover:to-blue-300/30 border border-purple-400/20 rounded-full text-purple-200/70 font-light tracking-[0.2em] transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30"
          >
            Request a conversation
          </a>
        </header>

        {/* What this is */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            What this is
          </h2>

          <div className="space-y-6">
            <p className="text-purple-300/45 font-light leading-relaxed tracking-wide">
              This offering provides a structured, safety-first container for individuals engaging in profound non-ordinary state work. The focus is on discernment, care, and integration — not spectacle or intensity for its own sake.
            </p>

            <div className="space-y-4 pl-6 border-l border-purple-300/20">
              <div>
                <h3 className="text-lg text-purple-200 font-light mb-2 tracking-wide">Preparation</h3>
                <p className="text-purple-400/40 font-light leading-relaxed">
                  Clarifying intentions, context, and boundaries for non-ordinary state work. Understanding set, setting, and somatic foundations.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-purple-200 font-light mb-2 tracking-wide">Safety-oriented presence</h3>
                <p className="text-purple-400/40 font-light leading-relaxed">
                  Grounded, attuned support during your experience, with emphasis on regulation, nervous system awareness, and harm reduction.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-purple-200 font-light mb-2 tracking-wide">Integration</h3>
                <p className="text-purple-400/40 font-light leading-relaxed">
                  Structured reflection and practical synthesis of insights into your life, relationships, and ongoing practice.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-purple-200 font-light mb-2 tracking-wide">Self-experimentation container (optional)</h3>
                <p className="text-purple-400/40 font-light leading-relaxed">
                  For those who wish, their experience can be documented as an anonymized self-experiment, contributing to a growing body of phenomenological knowledge.
                </p>
              </div>
            </div>

            <p className="text-purple-300/45 font-light leading-relaxed pt-4 tracking-wide">
              This work is for people who feel genuinely called to deep inner exploration. The emphasis is on care, clarity, and discernment — not recreational intensity or quick transformation.
            </p>
          </div>
        </section>

        {/* What this is NOT */}
        <section className="mb-20">
          <div className="bg-purple-900/10 border border-rose-400/20 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-purple-300/50 mb-6 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
              What this is <span className="italic">not</span>
            </h2>

            <ul className="space-y-3 text-purple-300/45 font-light">
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">×</span>
                <span>Not medical care, not psychotherapy, not a replacement for licensed treatment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">×</span>
                <span>Not an offer to supply, source, or recommend any controlled substances.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">×</span>
                <span>Not affiliated with any university, lab, or medical institution.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">×</span>
                <span>Not an emergency or crisis service.</span>
              </li>
            </ul>

            <p className="text-purple-400/40 font-light text-sm mt-6 italic">
              This space is for intentional inner work and education in a harm-reduction frame. It is not medical advice.
            </p>
          </div>
        </section>

        {/* About Jesse */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            About Jesse
          </h2>

          <div className="space-y-4 text-purple-300/45 font-light leading-relaxed">
            <p>
              Jesse is a neuroscience-informed psychedelic researcher working at the intersection of neuroscience, altered states, and emerging therapeutic paradigms.
            </p>

            <p>
              She has experience in psychedelic peer support and harm reduction, including volunteering with Zendo Project and other care teams at festivals and retreats.
            </p>

            <p>
              She is engaged in ongoing training with experienced facilitators in traditions that work with powerful non-ordinary states, including work with "the light" and other consciousness-expanding practices.
            </p>

            <p>
              Her approach bridges rigorous science, contemplative practice, and somatic grounding — honoring both the numinous and the measurable.
            </p>

            <p className="text-purple-200 pt-4">
              The orientation is simple: respect the unknown, move slowly, and prioritize safety, consent, and integrity.
            </p>
          </div>
        </section>

        {/* How the container works */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            How the container works
          </h2>

          <div className="space-y-6">
            <div className="bg-purple-900/10 border border-purple-300/20 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 border border-purple-200/30 flex items-center justify-center text-purple-200 font-light mr-4 shadow-lg shadow-purple-500/10">
                  1
                </div>
                <div>
                  <h3 className="text-lg text-purple-200/70 font-light mb-2">Inquiry & Screening</h3>
                  <p className="text-purple-400/40 font-light leading-relaxed">
                    Private form + short call to understand intentions, history, and suitability. This is a mutual discernment process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/10 border border-purple-300/20 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 border border-purple-200/30 flex items-center justify-center text-purple-200 shadow-lg shadow-purple-500/10 font-light mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg text-purple-200/70 font-light mb-2">Preparation Sessions</h3>
                  <p className="text-purple-400/40 font-light leading-relaxed">
                    1–2 sessions to clarify set, context, safety measures, and somatic tools. We discuss your relationship to non-ordinary states, establish boundaries, and prepare your nervous system.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/10 border border-purple-300/20 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 border border-purple-200/30 flex items-center justify-center text-purple-200 shadow-lg shadow-purple-500/10 font-light mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg text-purple-200/70 font-light mb-2">The Session Container</h3>
                  <p className="text-purple-400/40 font-light leading-relaxed">
                    Grounded, non-directive support for your self-directed work in non-ordinary states. The focus is on regulation, presence, somatic awareness, and harm reduction.
                  </p>
                  <p className="text-purple-400/50 font-light text-sm mt-3 italic">
                    Jesse does not provide substances. You are responsible for your own sourcing and dosing decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/10 border border-purple-300/20 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 border border-purple-200/30 flex items-center justify-center text-purple-200 shadow-lg shadow-purple-500/10 font-light mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg text-purple-200/70 font-light mb-2">Integration</h3>
                  <p className="text-purple-400/40 font-light leading-relaxed">
                    1–3 follow-up sessions to help metabolize insights and translate them into embodied practice, relational shifts, and daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-experimentation contribution */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            Contribution to self-experimentation (optional)
          </h2>

          <div className="space-y-4 text-purple-300/45 font-light leading-relaxed">
            <p>
              For those interested in contributing to phenomenology-driven research on awakening and non-ordinary states, participants can optionally:
            </p>

            <ul className="space-y-3 pl-6 border-l-2 border-blue-300/20">
              <li className="text-purple-400/40">
                Fill out short questionnaires before and after the experience (e.g., about mood, beliefs, self-perception, or the nature of the state itself).
              </li>
              <li className="text-purple-400/40">
                Keep a written or audio reflection afterward, documenting phenomenology, insights, and shifts.
              </li>
              <li className="text-purple-400/40">
                Allow their anonymized data to be included as part of a research project, potentially submitted to the Journal of Self-Experimentation or similar open-science platforms.
              </li>
            </ul>

            <div className="bg-blue-200/8 border border-cyan-500/20 rounded-lg p-6 mt-6">
              <p className="text-blue-200 font-light text-sm">
                Participation in this research framing is <span className="font-normal">entirely optional</span> and does not change the nature of the container. No identifiable details are published. You retain full agency over what is shared.
              </p>
            </div>
          </div>
        </section>

        {/* Safety & Suitability */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            Safety & Suitability
          </h2>

          <div className="space-y-6">
            <p className="text-purple-300/45 font-light leading-relaxed">
              This container is <span className="text-rose-200">not suitable</span> for:
            </p>

            <ul className="space-y-3 text-purple-400/40 font-light pl-6">
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">•</span>
                <span>People with a history of psychosis or certain severe psychiatric conditions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">•</span>
                <span>People with recent suicidal crises or very unstable life situations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1">•</span>
                <span>People seeking a "quick fix" or recreational intensity without serious preparation.</span>
              </li>
            </ul>

            <div className="bg-purple-900/10 border border-purple-300/20 rounded-lg p-6 mt-6">
              <p className="text-purple-300/45 font-light leading-relaxed mb-4">
                This work is best suited for individuals who:
              </p>

              <ul className="space-y-2 text-purple-400/40 font-light">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3">✓</span>
                  <span>Have an established contemplative, somatic, or therapeutic practice.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3">✓</span>
                  <span>Are engaged in ongoing therapeutic supports where appropriate.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3">✓</span>
                  <span>Can discuss mental health history and medications transparently.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3">✓</span>
                  <span>Approach this work with reverence, humility, and patience.</span>
                </li>
              </ul>
            </div>

            <p className="text-purple-400/40 font-light text-sm italic pt-4">
              If there is any doubt about suitability, Jesse will err on the side of safety and may decline to offer this container.
            </p>
          </div>
        </section>

        {/* Energy exchange */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            Energy exchange
          </h2>

          <div className="text-purple-300/45 font-light leading-relaxed space-y-4">
            <p>
              This work is offered on a sliding-scale, contribution basis, depending on the level of support and your financial context.
            </p>

            <p>
              The framing is not transactional — this is not a "service" in the commercial sense. Rather, it is a mutual container grounded in reciprocity and care.
            </p>

            <p className="text-purple-400/40">
              Details are discussed privately after an initial call, once we determine mutual fit.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-serif text-purple-300/50 mb-8 tracking-[0.2em]" style={{fontVariant: 'small-caps'}}>
            Request a conversation
          </h2>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-300/20 rounded-lg p-8">
            <p className="text-purple-300/45 font-light leading-relaxed mb-6">
              This is the first step — nothing is committed by reaching out. We'll have a brief, confidential conversation to understand your intentions, history, and whether this container feels like the right fit.
            </p>

            <p className="text-purple-300/45 font-light leading-relaxed mb-6">
              If we feel it's a mutual fit, we'll schedule a longer preparation session and move slowly from there.
            </p>

            <a
              href="https://signal.me/#u/earthgirl.07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-white font-light tracking-wide transition-all"
            >
              Reach out
            </a>

            <p className="text-purple-400/40 font-light text-sm mt-6">
              All inquiries are held in confidence.
            </p>
          </div>
        </section>

        {/* Footer disclaimer */}
        <footer className="border-t border-purple-400/20 pt-8 pb-4">
          <p className="text-purple-400/50 font-light text-xs leading-relaxed text-center">
            This page describes a harm-reduction and integration-oriented service. It does not constitute medical advice, diagnosis, or treatment, and is not affiliated with any institution. Jesse does not supply or source any substances.
          </p>
        </footer>
      </div>
    </div>
  )
}
