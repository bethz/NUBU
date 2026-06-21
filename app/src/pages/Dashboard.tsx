import { useState, useEffect } from 'react';
import { FoodInput } from '../components/FoodInput';
import { FoodLogTable } from '../components/FoodLogTable';
import { ProgressBar } from '../components/ProgressBar';
import { getTodayEntries } from '../lib/storage';
import { NUTRIENT_TARGETS } from '../lib/nutrients';
import { FoodEntry, NutrientValues } from '../lib/types';
import { AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const [entries, setEntries] = useState<FoodEntry[]>([]);

  function refresh() {
    setEntries(getTodayEntries());
  }

  useEffect(() => { refresh(); }, []);

  const totals: NutrientValues = {};
  NUTRIENT_TARGETS.forEach(n => { totals[n.id] = 0; });
  entries.forEach(entry => {
    Object.entries(entry.nutrients).forEach(([key, val]) => {
      totals[key] = (totals[key] || 0) + val;
    });
  });

  const macros = NUTRIENT_TARGETS.filter(n => n.category === 'macro');
  const vitamins = NUTRIENT_TARGETS.filter(n => n.category === 'vitamin');
  const minerals = NUTRIENT_TARGETS.filter(n => n.category === 'mineral');

  const gaps = NUTRIENT_TARGETS.filter(n => {
    const pct = (totals[n.id] || 0) / n.daily;
    return pct < 0.5 && n.id !== 'sodium' && n.id !== 'sugar';
  }).sort((a, b) => (totals[a.id] || 0) / a.daily - (totals[b.id] || 0) / b.daily);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1" style={{ color: 'var(--cp-text)' }}>
          Daily Dashboard
        </h1>
        <p style={{ color: 'var(--cp-text-muted)' }}>{today}</p>
      </div>

      {/* Food Input */}
      <div className="rounded-2xl p-5 mb-6" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
        <FoodInput onFoodLogged={refresh} />
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {['calories', 'protein', 'fiber'].map(id => {
          const target = NUTRIENT_TARGETS.find(n => n.id === id)!;
          const pct = Math.round(((totals[id] || 0) / target.daily) * 100);
          return (
            <div key={id} className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm" style={{ color: 'var(--cp-text-soft)' }}>{target.name}</span>
                <span className="text-xs" style={{ color: 'var(--cp-text-muted)' }}>/ {target.daily} {target.unit}</span>
              </div>
              <div className="text-2xl font-bold mb-2" style={{ color: 'var(--cp-accent)' }}>
                {Math.round(totals[id] || 0)}<span className="text-sm font-normal ml-1">{target.unit}</span>
              </div>
              <div className="h-2 rounded-full" style={{ background: 'var(--cp-surface-soft)' }}>
                <div
                  className={`h-2 rounded-full ${pct >= 80 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-400'}`}
                  style={{ width: `${Math.min(pct, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Food Log */}
        <div className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <h2 className="text-lg font-semibold mb-4">Today's Food Log</h2>
          <FoodLogTable entries={entries} onUpdate={refresh} />
        </div>

        {/* Nutrient Gaps */}
        <div className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle size={18} className="text-yellow-500" />
            Nutrient Gaps
          </h2>
          <p className="text-xs mb-4" style={{ color: 'var(--cp-text-muted)' }}>Below 50% of daily target</p>
          {gaps.length === 0 ? (
            <p className="text-center py-4 text-green-600 font-medium">No major gaps detected!</p>
          ) : (
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {gaps.map(nutrient => {
                const val = totals[nutrient.id] || 0;
                const pct = Math.round((val / nutrient.daily) * 100);
                return (
                  <div
                    key={nutrient.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg"
                    style={{ background: 'var(--cp-surface-soft)' }}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${pct < 20 ? 'bg-red-500' : 'bg-yellow-500'}`} />
                    <span className="text-sm flex-1">{nutrient.name}</span>
                    <span className="text-xs font-semibold" style={{ color: 'var(--cp-text-muted)' }}>{pct}%</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Macros & Vitamins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <h2 className="text-lg font-semibold mb-4">Macronutrients</h2>
          {macros.map(n => (
            <ProgressBar key={n.id} label={n.name} current={totals[n.id] || 0} target={n.daily} unit={n.unit} />
          ))}
        </div>

        <div className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <h2 className="text-lg font-semibold mb-4">Vitamins</h2>
          {vitamins.map(n => (
            <ProgressBar key={n.id} label={n.name} current={totals[n.id] || 0} target={n.daily} unit={n.unit} />
          ))}
        </div>

        <div className="rounded-2xl p-5" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <h2 className="text-lg font-semibold mb-4">Minerals</h2>
          {minerals.map(n => (
            <ProgressBar key={n.id} label={n.name} current={totals[n.id] || 0} target={n.daily} unit={n.unit} />
          ))}
        </div>
      </div>
    </div>
  );
}
