"use server";

import clientPromise from "@/lib/database";
import {
  CreateUserParams,
  UpdateUserParams,
} from "@/types";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";

// CREATE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    await clientPromise;

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
};

// GET USER
export async function getUserById(userId: string) {
  try {
    await clientPromise;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

// UPDATE USER
export const updateUser = async (user: UpdateUserParams) => {
  try {
    await clientPromise;

    const updatedUser = await User.findOneAndUpdate(user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (err) {
    console.log(err);
  }
};

// DELETE
export const deleteProfile = async (userId: string) => {
  try {
    await clientPromise;

    // Find profile to delete
    const userToDelete = await User.findOne({ userId });
    if (!userToDelete) throw new Error("User not found");

    // Delete profile
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (err) {
    console.log(err);
  }
};
