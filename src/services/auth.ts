import axios from "axios";

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const url = "https://supermercadoapi.vercel.app/register";

  try {
    await axios.post(url, {
      name,
      email,
      password,
    });
  } catch (error) {
    throw new Error("Error while creating a new user!");
  }
}
