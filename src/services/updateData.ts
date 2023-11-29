import { UpdateUser } from "@models/index";

import axios from "axios";

export async function updateUser(user: UpdateUser) {
  const url = "https://supermercadoapi.vercel.app/updateUser";

  try {
    const response = await axios.post(url, user);
  } catch (error) {
    console.error(error);
  }
}
