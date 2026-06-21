import { FoodEntry, SavedMeal, DailyLog } from './types';

const STORAGE_KEYS = {
  entries: 'nubu_food_entries',
  savedMeals: 'nubu_saved_meals',
  apiKey: 'nubu_usda_api_key',
};

export function getEntries(): FoodEntry[] {
  const raw = localStorage.getItem(STORAGE_KEYS.entries);
  return raw ? JSON.parse(raw) : [];
}

export function saveEntry(entry: FoodEntry): void {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEYS.entries, JSON.stringify(entries));
}

export function deleteEntry(id: string): void {
  const entries = getEntries().filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEYS.entries, JSON.stringify(entries));
}

export function getTodayEntries(): FoodEntry[] {
  const today = new Date().toISOString().split('T')[0];
  return getEntries().filter(e => e.date === today);
}

export function getEntriesByDate(date: string): FoodEntry[] {
  return getEntries().filter(e => e.date === date);
}

export function getSavedMeals(): SavedMeal[] {
  const raw = localStorage.getItem(STORAGE_KEYS.savedMeals);
  return raw ? JSON.parse(raw) : [];
}

export function saveMeal(meal: SavedMeal): void {
  const meals = getSavedMeals();
  const existing = meals.findIndex(m => m.id === meal.id);
  if (existing >= 0) {
    meals[existing] = meal;
  } else {
    meals.push(meal);
  }
  localStorage.setItem(STORAGE_KEYS.savedMeals, JSON.stringify(meals));
}

export function deleteSavedMeal(id: string): void {
  const meals = getSavedMeals().filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEYS.savedMeals, JSON.stringify(meals));
}

export function getApiKey(): string {
  return localStorage.getItem(STORAGE_KEYS.apiKey) || '';
}

export function setApiKey(key: string): void {
  localStorage.setItem(STORAGE_KEYS.apiKey, key);
}

export function getDailyLog(date: string): DailyLog {
  return {
    date,
    entries: getEntriesByDate(date),
  };
}
