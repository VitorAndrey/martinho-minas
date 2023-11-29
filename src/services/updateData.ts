import { UpdateUser } from "@models/index";

import axios from "axios";

export async function updateUser(user: UpdateUser) {
  const url = "https://supermercadoapi.vercel.app/users";

  try {
    const response = await axios.put(url, user);
  } catch (error) {
    console.error(error);
  }
}
