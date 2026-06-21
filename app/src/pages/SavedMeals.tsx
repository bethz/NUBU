import { useState } from 'react';
import { getSavedMeals, deleteSavedMeal } from '../lib/storage';
import { SavedMeal } from '../lib/types';
import { Trash2, UtensilsCrossed } from 'lucide-react';

export function SavedMeals() {
  const [meals, setMeals] = useState<SavedMeal[]>(getSavedMeals());

  function refresh() {
    setMeals(getSavedMeals());
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--cp-text)' }}>Saved Meals</h1>
      <p className="mb-8" style={{ color: 'var(--cp-text-muted)' }}>
        Your saved meal templates for quick logging.
      </p>

      {meals.length === 0 ? (
        <div className="text-center py-16 rounded-2xl" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
          <UtensilsCrossed size={48} className="mx-auto mb-4" style={{ color: 'var(--cp-text-muted)' }} />
          <p className="text-lg font-medium mb-2">No saved meals yet</p>
          <p className="text-sm" style={{ color: 'var(--cp-text-muted)' }}>
            Log food from the dashboard, then save combinations as meals for quick reuse.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {meals.map(meal => {
            const totalCals = meal.items.reduce((sum, item) => sum + (item.nutrients.calories || 0), 0);
            const totalProtein = meal.items.reduce((sum, item) => sum + (item.nutrients.protein || 0), 0);
            return (
              <div
                key={meal.id}
                className="rounded-2xl p-5"
                style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{meal.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--cp-text-muted)' }}>
                      {Math.round(totalCals)} kcal, {Math.round(totalProtein)}g protein
                    </p>
                  </div>
                  <button
                    onClick={() => { deleteSavedMeal(meal.id); refresh(); }}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="space-y-1">
                  {meal.items.map((item, idx) => (
                    <div key={idx} className="text-sm flex justify-between px-3 py-1 rounded" style={{ background: 'var(--cp-surface-soft)' }}>
                      <span>{item.name}</span>
                      <span style={{ color: 'var(--cp-text-muted)' }}>{item.quantity} {item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
