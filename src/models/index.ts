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
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
