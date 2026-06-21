import { USDAFoodResult, NutrientValues } from './types';
import { USDA_NUTRIENT_MAP } from './nutrients';
import { getApiKey } from './storage';

const BASE_URL = 'https://api.nal.usda.gov/fdc/v1';

export async function searchFood(query: string): Promise<USDAFoodResult[]> {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  try {
    const res = await fetch(
      `${BASE_URL}/foods/search?query=${encodeURIComponent(query)}&pageSize=5&api_key=${apiKey}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.foods || []).map((f: any) => ({
      fdcId: f.fdcId,
      description: f.description,
      foodNutrients: (f.foodNutrients || []).map((n: any) => ({
        nutrientId: n.nutrientId,
        nutrientName: n.nutrientName,
        value: n.value,
        unitName: n.unitName,
      })),
      servingSize: f.servingSize,
      servingSizeUnit: f.servingSizeUnit,
    }));
  } catch {
    return [];
  }
}

export function extractNutrients(food: USDAFoodResult, servingMultiplier: number = 1): NutrientValues {
  const nutrients: NutrientValues = {};

  for (const [key, usdaId] of Object.entries(USDA_NUTRIENT_MAP)) {
    const found = food.foodNutrients.find(n => n.nutrientId === usdaId);
    if (found) {
      // USDA values are per 100g; multiply by serving
      nutrients[key] = Math.round(found.value * servingMultiplier * 100) / 100;
    } else {
      nutrients[key] = 0;
    }
  }

  return nutrients;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
