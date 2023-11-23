export type Product = {
  id: string;
  name: string;
  base_price: number;
  discount_percentage: number;
  image_url: string;
  aisle: number;
  category?: Category;
};

export type EmptyProduct = {
  empty: true;
};

export type Category = {
  id: string;
  name: string;
};

export type Aisle = {
  AisleNumber: number;
  products: Product[];
  promotions: Product[];
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type RegisterUser = User;

export type UserLogin = Omit<RegisterUser, "name">;
