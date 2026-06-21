import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { FoodEntry } from '../lib/types';
import { searchFood, extractNutrients, generateId } from '../lib/usda';
import { saveEntry, getApiKey } from '../lib/storage';
import { COMMON_FOODS } from '../lib/common-foods';

interface FoodInputProps {
  onFoodLogged: () => void;
}

export function FoodInput({ onFoodLogged }: FoodInputProps) {
  const [input, setInput] = useState('');
  const [meal, setMeal] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  async function handleQuickAdd() {
    if (!input.trim()) return;
    setLoading(true);

    // Try USDA API first
    const apiKey = getApiKey();
    if (apiKey) {
      const results = await searchFood(input.trim());
      if (results.length > 0) {
        const food = results[0];
        const nutrients = extractNutrients(food, 1);
        const entry: FoodEntry = {
          id: generateId(),
          date: today,
          meal,
          name: food.description,
          quantity: 1,
          unit: 'serving',
          nutrients,
          fdcId: food.fdcId,
        };
        saveEntry(entry);
        setInput('');
        setLoading(false);
        onFoodLogged();
        return;
      }
    }

    // Fallback to common foods database
    const searchTerm = input.trim().toLowerCase();
    const match = COMMON_FOODS.find(
      f => f.name.toLowerCase().includes(searchTerm) || searchTerm.includes(f.name.toLowerCase())
    );

    if (match) {
      const entry: FoodEntry = {
        id: generateId(),
        date: today,
        meal,
        name: match.name,
        quantity: 1,
        unit: match.unit,
        nutrients: match.nutrients,
      };
      saveEntry(entry);
      setInput('');
      onFoodLogged();
    } else {
      // Add with just the name, zero nutrients (user can edit later)
      const entry: FoodEntry = {
        id: generateId(),
        date: today,
        meal,
        name: input.trim(),
        quantity: 1,
        unit: 'serving',
        nutrients: { calories: 0, protein: 0, totalFat: 0, carbs: 0 },
      };
      saveEntry(entry);
      setInput('');
      onFoodLogged();
    }

    setLoading(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleQuickAdd();
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <select
          value={meal}
          onChange={(e) => setMeal(e.target.value as any)}
          className="rounded-lg px-3 py-2 text-sm font-medium"
          style={{
            background: 'var(--cp-surface-soft)',
            border: '1px solid var(--cp-border)',
            color: 'var(--cp-text)',
          }}
        >
          <option value="breakfast">🌅 Breakfast</option>
          <option value="lunch">☀️ Lunch</option>
          <option value="dinner">🌙 Dinner</option>
          <option value="snack">🍿 Snack</option>
        </select>

        <div className="flex-1 relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--cp-text-muted)' }}
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What did you eat? (e.g., 2 eggs, toast with butter)"
            className="w-full rounded-lg pl-9 pr-4 py-2 text-sm"
            style={{
              background: 'var(--cp-surface)',
              border: '1px solid var(--cp-border)',
              color: 'var(--cp-text)',
            }}
          />
        </div>

        <button
          onClick={handleQuickAdd}
          disabled={loading || !input.trim()}
          className="rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors disabled:opacity-50"
          style={{
            background: 'var(--cp-accent)',
            color: 'var(--cp-accent-fg)',
          }}
        >
          <Plus size={16} />
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
    </div>
  );
}
