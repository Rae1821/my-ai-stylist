"use server";

import { signIn, signOut } from "@/auth";
// import { User } from "@/models/user.model";

export async function fetchClothing(formData: FormData) {
  const searchItem = formData.get("searchItem");

  const headers = {
    "X-RapidAPI-Key": "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchItem}&page=1&country=US&category_id=aps`,
      {
        method: "GET",
        headers,
      }
    );

    const res = await response.json();
    const result = res.data.products;

    return result;
  } catch (error) {
    console.log(error);
  }
}

// Login with Google
export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/profile" });
}

// Logout
export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

// Login with credentials
// export async function doCredentialLogin(formData: any) {
//   try {
//     const response = await signIn("credentials", {
//       email: formData.get("email"),
//       password: formData.get("password"),
//       redirectTo: "/profile",
//     });

//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export async function createUser(user: typeof User) {
//   try {
//     await User.create(user);
//   } catch (e) {
//     throw new Error(e);
//   }
// }
