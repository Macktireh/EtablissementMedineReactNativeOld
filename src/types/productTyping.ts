export type CategoryType = {
  publicId: string;
  name: string;
  slug: string;
};

export type ProductType = {
  publicId: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  description: string;
  thumbnail: string;
  category: CategoryType;
  created_at: Date;
  updated_at: Date;
};
