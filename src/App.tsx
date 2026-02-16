import { useState } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

type Status = 'Not Started' | 'In Progress' | 'Shipped'

type JobPageProps = {
  title: string
}

function JobPage({ title }: JobPageProps) {
  return (
    <div className="job-page">
      <h2 className="job-page__title">{title}</h2>
      <p className="job-page__subtitle">This section will be built in the next step.</p>
    </div>
  )
}

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/saved', label: 'Saved' },
  { path: '/digest', label: 'Digest' },
  { path: '/settings', label: 'Settings' },
  { path: '/proof', label: 'Proof' },
] as const

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const status: Status = 'In Progress'
  const currentStep = 1
  const totalSteps = 4

  const normalizedStatus =
    status === 'In Progress' ? 'in-progress' : status === 'Shipped' ? 'shipped' : 'not-started'

  const toggleNav = () => {
    setIsNavOpen((open) => !open)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="app">
      <header className="top-bar">
        <div className="top-bar__project">KodNest Premium Build System</div>
        <div className="top-bar__progress">
          Step {currentStep} / {totalSteps}
        </div>
        <div className="top-bar__status">
          <span className={`status-badge status-badge--${normalizedStatus}`}>{status}</span>
        </div>
      </header>

      <section className="context-header">
        <h1 className="context-header__title">Job Notification Tracker</h1>
        <p className="context-header__subtitle">
          Calm shell for tracking jobs, saved roles, and weekly digests. Routes are in place; the
          product experiences will follow.
        </p>
      </section>

      <nav className="job-nav">
        <div className="job-nav__inner">
          <button
            type="button"
            className="job-nav__toggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span />
            <span />
          </button>
          <div className={`job-nav__links ${isNavOpen ? 'job-nav__links--open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `job-nav__link${isActive ? ' job-nav__link--active' : ''}`
                }
                onClick={closeNav}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="workspace">
        <section className="workspace__primary">
          <Routes>
            <Route path="/" element={<JobPage title="Dashboard" />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/saved" element={<JobPage title="Saved" />} />
            <Route path="/digest" element={<JobPage title="Digest" />} />
            <Route path="/settings" element={<JobPage title="Settings" />} />
            <Route path="/proof" element={<JobPage title="Proof" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </section>

        <aside className="workspace__secondary">
          <div className="card">
            <h2 className="card__title">Route Shell Only</h2>
            <p className="card__body">
              Each section currently renders a calm placeholder. The actual job-tracking logic and
              data will be introduced in the next step.
            </p>
          </div>
        </aside>
      </main>

      <footer className="proof-footer">
        <div className="proof-footer__inner">
          <p className="proof-footer__note">
            Proof checklist for shipped job notification flows will be configured in a later
            iteration.
          </p>
        </div>
      </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
