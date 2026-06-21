import { NutrientValues } from './types';

interface CommonFood {
  name: string;
  unit: string;
  nutrients: NutrientValues;
}

export const COMMON_FOODS: CommonFood[] = [
  {
    name: 'Egg (whole, cooked)',
    unit: 'large',
    nutrients: { calories: 72, protein: 6, totalFat: 5, satFat: 1.6, carbs: 0.4, fiber: 0, sugar: 0.2, vitaminA: 80, vitaminC: 0, vitaminD: 1, vitaminE: 0.5, vitaminK1: 0.3, vitaminK2: 5, thiamin: 0.02, riboflavin: 0.23, niacin: 0.04, vitaminB6: 0.07, folate: 24, vitaminB12: 0.45, calcium: 28, iron: 0.9, magnesium: 6, phosphorus: 99, potassium: 69, sodium: 71, zinc: 0.6, selenium: 15.4 },
  },
  {
    name: 'Egg whites',
    unit: '1/2 cup',
    nutrients: { calories: 63, protein: 13, totalFat: 0.2, satFat: 0, carbs: 0.7, fiber: 0, sugar: 0.7, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK1: 0, vitaminK2: 0, thiamin: 0, riboflavin: 0.27, niacin: 0.1, vitaminB6: 0, folate: 4, vitaminB12: 0.05, calcium: 4, iron: 0.1, magnesium: 7, phosphorus: 10, potassium: 107, sodium: 166, zinc: 0, selenium: 12 },
  },
  {
    name: 'Black tea',
    unit: 'cup',
    nutrients: { calories: 2, protein: 0, totalFat: 0, satFat: 0, carbs: 0.7, fiber: 0, sugar: 0, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK1: 0, vitaminK2: 0, thiamin: 0, riboflavin: 0.01, niacin: 0, vitaminB6: 0, folate: 12, vitaminB12: 0, calcium: 0, iron: 0, magnesium: 3, phosphorus: 2, potassium: 88, sodium: 7, zinc: 0, selenium: 0 },
  },
  {
    name: 'Sourdough toast',
    unit: 'slice',
    nutrients: { calories: 100, protein: 4, totalFat: 0.5, satFat: 0, carbs: 20, fiber: 1, sugar: 1, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0.1, vitaminK1: 0.3, vitaminK2: 0, thiamin: 0.15, riboflavin: 0.1, niacin: 1.3, vitaminB6: 0.02, folate: 30, vitaminB12: 0, calcium: 20, iron: 1.2, magnesium: 10, phosphorus: 35, potassium: 40, sodium: 180, zinc: 0.3, selenium: 6 },
  },
  {
    name: 'Banana',
    unit: 'medium',
    nutrients: { calories: 105, protein: 1.3, totalFat: 0.4, satFat: 0.1, carbs: 27, fiber: 3.1, sugar: 14, vitaminA: 4, vitaminC: 10, vitaminD: 0, vitaminE: 0.1, vitaminK1: 0.6, vitaminK2: 0, thiamin: 0.04, riboflavin: 0.09, niacin: 0.8, vitaminB6: 0.43, folate: 24, vitaminB12: 0, calcium: 6, iron: 0.3, magnesium: 32, phosphorus: 26, potassium: 422, sodium: 1, zinc: 0.2, selenium: 1.2 },
  },
  {
    name: 'Chicken breast (grilled)',
    unit: '4 oz',
    nutrients: { calories: 187, protein: 35, totalFat: 4, satFat: 1.1, carbs: 0, fiber: 0, sugar: 0, vitaminA: 3, vitaminC: 0, vitaminD: 0.1, vitaminE: 0.3, vitaminK1: 0, vitaminK2: 0, thiamin: 0.07, riboflavin: 0.12, niacin: 14.8, vitaminB6: 0.64, folate: 4, vitaminB12: 0.34, calcium: 15, iron: 1, magnesium: 29, phosphorus: 228, potassium: 256, sodium: 74, zinc: 1, selenium: 27.6 },
  },
  {
    name: 'Salmon fillet',
    unit: '4 oz',
    nutrients: { calories: 233, protein: 25, totalFat: 14, satFat: 3.1, carbs: 0, fiber: 0, sugar: 0, vitaminA: 15, vitaminC: 0, vitaminD: 14.2, vitaminE: 2.6, vitaminK1: 0.1, vitaminK2: 0, thiamin: 0.23, riboflavin: 0.45, niacin: 8.6, vitaminB6: 0.64, folate: 28, vitaminB12: 3.2, calcium: 13, iron: 0.9, magnesium: 30, phosphorus: 252, potassium: 366, sodium: 59, zinc: 0.6, selenium: 40.4 },
  },
  {
    name: 'Brown rice (cooked)',
    unit: 'cup',
    nutrients: { calories: 216, protein: 5, totalFat: 1.8, satFat: 0.4, carbs: 45, fiber: 3.5, sugar: 0.7, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0.1, vitaminK1: 0.6, vitaminK2: 0, thiamin: 0.2, riboflavin: 0.02, niacin: 3, vitaminB6: 0.28, folate: 8, vitaminB12: 0, calcium: 20, iron: 0.8, magnesium: 84, phosphorus: 162, potassium: 84, sodium: 10, zinc: 1.2, selenium: 19.1 },
  },
  {
    name: 'Broccoli (steamed)',
    unit: 'cup',
    nutrients: { calories: 55, protein: 3.7, totalFat: 0.6, satFat: 0.1, carbs: 11, fiber: 5.1, sugar: 2.2, vitaminA: 120, vitaminC: 101, vitaminD: 0, vitaminE: 1.5, vitaminK1: 220, vitaminK2: 0, thiamin: 0.07, riboflavin: 0.12, niacin: 0.6, vitaminB6: 0.2, folate: 104, vitaminB12: 0, calcium: 62, iron: 1, magnesium: 33, phosphorus: 105, potassium: 457, sodium: 64, zinc: 0.7, selenium: 2.5 },
  },
  {
    name: 'Greek yogurt (plain)',
    unit: '6 oz',
    nutrients: { calories: 100, protein: 17, totalFat: 0.7, satFat: 0.5, carbs: 6, fiber: 0, sugar: 6, vitaminA: 7, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK1: 0, vitaminK2: 0, thiamin: 0.02, riboflavin: 0.27, niacin: 0.2, vitaminB6: 0.06, folate: 15, vitaminB12: 0.75, calcium: 187, iron: 0.1, magnesium: 17, phosphorus: 193, potassium: 220, sodium: 56, zinc: 0.8, selenium: 9.7 },
  },
  {
    name: 'Apple',
    unit: 'medium',
    nutrients: { calories: 95, protein: 0.5, totalFat: 0.3, satFat: 0.1, carbs: 25, fiber: 4.4, sugar: 19, vitaminA: 3, vitaminC: 8, vitaminD: 0, vitaminE: 0.2, vitaminK1: 4, vitaminK2: 0, thiamin: 0.02, riboflavin: 0.03, niacin: 0.1, vitaminB6: 0.04, folate: 3, vitaminB12: 0, calcium: 11, iron: 0.2, magnesium: 9, phosphorus: 20, potassium: 195, sodium: 2, zinc: 0.1, selenium: 0 },
  },
  {
    name: 'Spinach (raw)',
    unit: '2 cups',
    nutrients: { calories: 14, protein: 1.7, totalFat: 0.2, satFat: 0, carbs: 2.2, fiber: 1.3, sugar: 0.3, vitaminA: 281, vitaminC: 17, vitaminD: 0, vitaminE: 1.2, vitaminK1: 290, vitaminK2: 0, thiamin: 0.05, riboflavin: 0.11, niacin: 0.4, vitaminB6: 0.12, folate: 116, vitaminB12: 0, calcium: 59, iron: 1.6, magnesium: 47, phosphorus: 29, potassium: 334, sodium: 47, zinc: 0.3, selenium: 0.6 },
  },
  {
    name: 'Avocado',
    unit: 'half',
    nutrients: { calories: 161, protein: 2, totalFat: 15, satFat: 2.1, carbs: 9, fiber: 6.7, sugar: 0.7, vitaminA: 7, vitaminC: 10, vitaminD: 0, vitaminE: 2.1, vitaminK1: 21, vitaminK2: 0, thiamin: 0.07, riboflavin: 0.13, niacin: 1.7, vitaminB6: 0.26, folate: 81, vitaminB12: 0, calcium: 12, iron: 0.6, magnesium: 29, phosphorus: 52, potassium: 487, sodium: 7, zinc: 0.6, selenium: 0.4 },
  },
  {
    name: 'Milk (whole)',
    unit: 'cup',
    nutrients: { calories: 149, protein: 8, totalFat: 8, satFat: 4.5, carbs: 12, fiber: 0, sugar: 12, vitaminA: 68, vitaminC: 0, vitaminD: 3.2, vitaminE: 0.1, vitaminK1: 0.5, vitaminK2: 0, thiamin: 0.11, riboflavin: 0.45, niacin: 0.3, vitaminB6: 0.09, folate: 12, vitaminB12: 1.1, calcium: 276, iron: 0.1, magnesium: 24, phosphorus: 205, potassium: 322, sodium: 105, zinc: 1, selenium: 9 },
  },
  {
    name: 'Mandarin orange',
    unit: 'medium',
    nutrients: { calories: 47, protein: 0.7, totalFat: 0.3, satFat: 0, carbs: 12, fiber: 1.7, sugar: 9.5, vitaminA: 30, vitaminC: 26, vitaminD: 0, vitaminE: 0.2, vitaminK1: 0, vitaminK2: 0, thiamin: 0.05, riboflavin: 0.03, niacin: 0.35, vitaminB6: 0.08, folate: 14, vitaminB12: 0, calcium: 33, iron: 0.15, magnesium: 11, phosphorus: 18, potassium: 162, sodium: 2, zinc: 0.2, selenium: 0.1 },
  },
  {
    name: 'Mango',
    unit: 'small',
    nutrients: { calories: 99, protein: 1.4, totalFat: 0.6, satFat: 0.1, carbs: 25, fiber: 2.6, sugar: 22, vitaminA: 54, vitaminC: 60, vitaminD: 0, vitaminE: 0.9, vitaminK1: 4.2, vitaminK2: 0, thiamin: 0.04, riboflavin: 0.06, niacin: 1, vitaminB6: 0.2, folate: 43, vitaminB12: 0, calcium: 17, iron: 0.2, magnesium: 15, phosphorus: 21, potassium: 257, sodium: 2, zinc: 0.1, selenium: 0.9 },
  },
  {
    name: 'Blackberries',
    unit: '1/2 cup',
    nutrients: { calories: 31, protein: 1, totalFat: 0.4, satFat: 0, carbs: 7, fiber: 3.8, sugar: 3.5, vitaminA: 8, vitaminC: 15, vitaminD: 0, vitaminE: 0.8, vitaminK1: 14.4, vitaminK2: 0, thiamin: 0.01, riboflavin: 0.02, niacin: 0.5, vitaminB6: 0.02, folate: 18, vitaminB12: 0, calcium: 21, iron: 0.5, magnesium: 15, phosphorus: 16, potassium: 117, sodium: 1, zinc: 0.4, selenium: 0.3 },
  },
  {
    name: 'Strawberry jelly',
    unit: 'tbsp',
    nutrients: { calories: 50, protein: 0, totalFat: 0, satFat: 0, carbs: 13, fiber: 0.1, sugar: 10, vitaminA: 0, vitaminC: 1, vitaminD: 0, vitaminE: 0, vitaminK1: 0, vitaminK2: 0, thiamin: 0, riboflavin: 0, niacin: 0, vitaminB6: 0, folate: 0, vitaminB12: 0, calcium: 0.5, iron: 0.05, magnesium: 0, phosphorus: 0, potassium: 7.5, sodium: 3, zinc: 0, selenium: 0 },
  },
  {
    name: 'Butter',
    unit: 'tbsp',
    nutrients: { calories: 102, protein: 0.1, totalFat: 11.5, satFat: 7.3, carbs: 0, fiber: 0, sugar: 0, vitaminA: 97, vitaminC: 0, vitaminD: 0.1, vitaminE: 0.3, vitaminK1: 1, vitaminK2: 0, thiamin: 0, riboflavin: 0, niacin: 0, vitaminB6: 0, folate: 0.4, vitaminB12: 0.02, calcium: 3, iron: 0, magnesium: 0.3, phosphorus: 3, potassium: 3, sodium: 82, zinc: 0, selenium: 0.1 },
  },
  {
    name: 'Oatmeal (cooked)',
    unit: 'cup',
    nutrients: { calories: 166, protein: 6, totalFat: 3.6, satFat: 0.6, carbs: 28, fiber: 4, sugar: 0.6, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0.2, vitaminK1: 0.6, vitaminK2: 0, thiamin: 0.26, riboflavin: 0.04, niacin: 0.5, vitaminB6: 0.01, folate: 14, vitaminB12: 0, calcium: 21, iron: 2.1, magnesium: 63, phosphorus: 180, potassium: 164, sodium: 9, zinc: 2.3, selenium: 13 },
  },
];
