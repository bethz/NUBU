import { FoodEntry } from '../lib/types';
import { Trash2 } from 'lucide-react';
import { deleteEntry } from '../lib/storage';

interface FoodLogTableProps {
  entries: FoodEntry[];
  onUpdate: () => void;
}

export function FoodLogTable({ entries, onUpdate }: FoodLogTableProps) {
  const mealOrder = ['breakfast', 'lunch', 'dinner', 'snack'];
  const sorted = [...entries].sort(
    (a, b) => mealOrder.indexOf(a.meal) - mealOrder.indexOf(b.meal)
  );

  const mealEmoji: Record<string, string> = {
    breakfast: '🌅',
    lunch: '☀️',
    dinner: '🌙',
    snack: '🍿',
  };

  if (entries.length === 0) {
    return (
      <div className="text-center py-8" style={{ color: 'var(--cp-text-muted)' }}>
        <p className="text-lg mb-2">No food logged yet today</p>
        <p className="text-sm">Use the input above to log what you've eaten</p>
      </div>
    );
  }

  const totalCals = entries.reduce((sum, e) => sum + (e.nutrients.calories || 0), 0);
  const totalProtein = entries.reduce((sum, e) => sum + (e.nutrients.protein || 0), 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '2px solid var(--cp-border)' }}>
            <th className="text-left py-2 px-3 font-semibold" style={{ color: 'var(--cp-text-muted)' }}>Food</th>
            <th className="text-left py-2 px-3 font-semibold" style={{ color: 'var(--cp-text-muted)' }}>Qty</th>
            <th className="text-right py-2 px-3 font-semibold" style={{ color: 'var(--cp-text-muted)' }}>Cal</th>
            <th className="text-right py-2 px-3 font-semibold" style={{ color: 'var(--cp-text-muted)' }}>Protein</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry) => (
            <tr key={entry.id} style={{ borderBottom: '1px solid var(--cp-border)' }}>
              <td className="py-2 px-3">
                <span className="mr-1">{mealEmoji[entry.meal]}</span>
                {entry.name}
              </td>
              <td className="py-2 px-3" style={{ color: 'var(--cp-text-muted)' }}>
                {entry.quantity} {entry.unit}
              </td>
              <td className="py-2 px-3 text-right">{Math.round(entry.nutrients.calories || 0)}</td>
              <td className="py-2 px-3 text-right">{Math.round(entry.nutrients.protein || 0)}g</td>
              <td className="py-2 px-1">
                <button
                  onClick={() => { deleteEntry(entry.id); onUpdate(); }}
                  className="p-1 rounded hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </td>
            </tr>
          ))}
          <tr className="font-bold" style={{ background: 'var(--cp-accent-soft)' }}>
            <td className="py-2 px-3" colSpan={2}>Total</td>
            <td className="py-2 px-3 text-right">{Math.round(totalCals)}</td>
            <td className="py-2 px-3 text-right">{Math.round(totalProtein)}g</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
