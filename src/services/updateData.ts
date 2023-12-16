import axios from "axios";

import { UpdateUser } from "@models/index";

export async function updateUser(user: UpdateUser) {
  const url = "https://supermercadoapi.vercel.app/users";

  try {
    const response = await axios.put(url, user);

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
