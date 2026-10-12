export type Category = "city" | "nature" | "food" | "other";

export type Place = {
  id: string;
  name: string;
  category: Category;
  notes?: string;
};