import { Routes, Route, NavLink } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { SavedMeals } from './pages/SavedMeals'
import { Settings } from './pages/Settings'
import { LayoutDashboard, UtensilsCrossed, Settings as SettingsIcon } from 'lucide-react'

function App() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-[var(--cp-accent-soft)] text-[var(--cp-accent)]'
        : 'text-[var(--cp-text-muted)] hover:text-[var(--cp-text)] hover:bg-[var(--cp-surface-soft)]'
    }`

  return (
    <div className="min-h-screen" style={{ background: 'var(--cp-bg)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-4 py-3" style={{ background: 'var(--cp-bg-elevated)', borderBottom: '1px solid var(--cp-border)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ color: 'var(--cp-accent)' }}>NUBU</span>
            <span className="text-xs" style={{ color: 'var(--cp-text-muted)' }}>NUtrition Builds a Better yoU!</span>
          </div>
          <div className="flex gap-1">
            <NavLink to="/" className={linkClass}>
              <LayoutDashboard size={16} /> Dashboard
            </NavLink>
            <NavLink to="/meals" className={linkClass}>
              <UtensilsCrossed size={16} /> Saved Meals
            </NavLink>
            <NavLink to="/settings" className={linkClass}>
              <SettingsIcon size={16} /> Settings
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/meals" element={<SavedMeals />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
