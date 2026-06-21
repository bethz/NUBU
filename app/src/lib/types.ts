export interface NutrientTarget {
  id: string;
  name: string;
  unit: string;
  daily: number;
  category: 'macro' | 'vitamin' | 'mineral';
}

export interface NutrientValues {
  [nutrientId: string]: number;
}

export interface FoodEntry {
  id: string;
  date: string;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  quantity: number;
  unit: string;
  nutrients: NutrientValues;
  fdcId?: number;
}

export interface SavedMeal {
  id: string;
  name: string;
  items: {
    name: string;
    quantity: number;
    unit: string;
    nutrients: NutrientValues;
    fdcId?: number;
  }[];
}

export interface DailyLog {
  date: string;
  entries: FoodEntry[];
}

export interface USDAFoodResult {
  fdcId: number;
  description: string;
  foodNutrients: {
    nutrientId: number;
    nutrientName: string;
    value: number;
    unitName: string;
  }[];
  servingSize?: number;
  servingSizeUnit?: string;
}
