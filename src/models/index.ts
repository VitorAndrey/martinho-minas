export type Product = {
  id: string;
  name: string;
  basePrice: number;
  discountPercentage: number;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type RegisterUser = User;

export type UserLogin = Omit<RegisterUser, "name">;
