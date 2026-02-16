import { useState } from 'react'
import './App.css'

type ChecklistKey = 'ui' | 'logic' | 'test' | 'deploy'

type ChecklistState = Record<
  ChecklistKey,
  {
    checked: boolean
    proof: string
  }
>

const initialChecklistState: ChecklistState = {
  ui: { checked: false, proof: '' },
  logic: { checked: false, proof: '' },
  test: { checked: false, proof: '' },
  deploy: { checked: false, proof: '' },
}

type Status = 'Not Started' | 'In Progress' | 'Shipped'

function App() {
  const [checklist, setChecklist] = useState<ChecklistState>(initialChecklistState)
  const status: Status = 'In Progress'
  const currentStep = 1
  const totalSteps = 4

  const prompt =
    'Create a calm, intentional interface that follows the KodNest Premium Build System layout:\n' +
    'Top Bar → Context Header → Primary Workspace (70%) + Secondary Panel (30%) → Proof Footer.'

  const handleChecklistToggle = (key: ChecklistKey) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        checked: !prev[key].checked,
      },
    }))
  }

  const handleChecklistProofChange = (key: ChecklistKey, value: string) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        proof: value,
      },
    }))
  }

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
    } catch {
      // In environments without clipboard access, fail silently.
    }
  }

  const normalizedStatus =
    status === 'In Progress' ? 'in-progress' : status === 'Shipped' ? 'shipped' : 'not-started'

  return (
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
        <h1 className="context-header__title">Define Your Build Layout</h1>
        <p className="context-header__subtitle">
          Establish the consistent shell used across every premium build screen. This structure
          stays stable while product features evolve.
        </p>
      </section>

      <main className="workspace">
        <section className="workspace__primary">
          <div className="card">
            <h2 className="card__title">Primary Workspace</h2>
            <p className="card__body">
              This area hosts the main interaction for the current step. Keep content focused and
              predictable, with clear grouping and generous whitespace.
            </p>
            <ul className="list">
              <li>Use cards to group related controls and information.</li>
              <li>Limit each card to a small number of decisions at once.</li>
              <li>Respect the spacing scale to avoid visual noise.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card__title">Interaction Principles</h2>
            <p className="card__body">
              All interactions should feel calm and deliberate. Use subtle transitions and clear
              focus states instead of animations or visual tricks.
            </p>
            <ul className="list">
              <li>Buttons share the same radius, typography, and hover behavior.</li>
              <li>Inputs use clean borders with a confident, visible focus state.</li>
              <li>No gradients, glassmorphism, or decorative shadows.</li>
            </ul>
          </div>
        </section>

        <aside className="workspace__secondary">
          <div className="card">
            <h2 className="card__title">Step Guidance</h2>
            <p className="card__body">
              Use this panel to keep the current step grounded. The prompt below can be copied into
              your build tool when you refine or regenerate this layout.
            </p>

            <div className="prompt">
              <pre className="prompt__content">{prompt}</pre>
              <div className="button-row">
                <button className="button button--secondary" type="button" onClick={handleCopyPrompt}>
                  Copy
                </button>
              </div>
            </div>

            <div className="button-row" style={{ marginTop: 16 }}>
              <button className="button button--primary" type="button">
                Build in Lovable
              </button>
              <button className="button button--secondary" type="button">
                It Worked
              </button>
              <button className="button button--secondary" type="button">
                Error
              </button>
              <button className="button button--secondary" type="button">
                Add Screenshot
              </button>
            </div>
          </div>
        </aside>
      </main>

      <footer className="proof-footer">
        <div className="proof-footer__inner">
          <div className="proof-item">
            <label className="proof-item__label">
              <input
                type="checkbox"
                checked={checklist.ui.checked}
                onChange={() => handleChecklistToggle('ui')}
              />
              <span>UI Built</span>
            </label>
            {checklist.ui.checked && (
              <input
                className="proof-item__input"
                placeholder="Link to UI implementation or description"
                value={checklist.ui.proof}
                onChange={(event) => handleChecklistProofChange('ui', event.target.value)}
              />
            )}
          </div>

          <div className="proof-item">
            <label className="proof-item__label">
              <input
                type="checkbox"
                checked={checklist.logic.checked}
                onChange={() => handleChecklistToggle('logic')}
              />
              <span>Logic Working</span>
            </label>
            {checklist.logic.checked && (
              <input
                className="proof-item__input"
                placeholder="Reference to logic or repository link"
                value={checklist.logic.proof}
                onChange={(event) => handleChecklistProofChange('logic', event.target.value)}
              />
            )}
          </div>

          <div className="proof-item">
            <label className="proof-item__label">
              <input
                type="checkbox"
                checked={checklist.test.checked}
                onChange={() => handleChecklistToggle('test')}
              />
              <span>Test Passed</span>
            </label>
            {checklist.test.checked && (
              <input
                className="proof-item__input"
                placeholder="Link to test run, CI job, or report"
                value={checklist.test.proof}
                onChange={(event) => handleChecklistProofChange('test', event.target.value)}
              />
            )}
          </div>

          <div className="proof-item">
            <label className="proof-item__label">
              <input
                type="checkbox"
                checked={checklist.deploy.checked}
                onChange={() => handleChecklistToggle('deploy')}
              />
              <span>Deployed</span>
            </label>
            {checklist.deploy.checked && (
              <input
                className="proof-item__input"
                placeholder="Deployment URL or environment reference"
                value={checklist.deploy.proof}
                onChange={(event) => handleChecklistProofChange('deploy', event.target.value)}
              />
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
