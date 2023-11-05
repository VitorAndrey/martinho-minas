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

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export type UserLogin = Omit<RegisterUser, "name">;
