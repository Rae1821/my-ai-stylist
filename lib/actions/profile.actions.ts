"use server";

// import clientPromise from "@/lib/database";
import { connectToDatabase } from "@/lib/db";
import {
  CreateProfileParams,
  DeleteProfileParams,
  UpdateProfileParams,
} from "@/types";
import Profile from "@/models/profile.model";
import User from "@/models/user.model";

// CREATE
export const createProfile = async ({
  userId,
  bodyShape,
  fashionStyle,
}: CreateProfileParams) => {
  try {
    await connectToDatabase();

    const profile = await User.findById(userId);
    if (!userId) {
      throw new Error("User not found");
    }

    const newProfile = await Profile.create({
      ...profile,
      bodyShape,
      fashionStyle,
      userId,
    });

    return JSON.parse(JSON.stringify(newProfile));
  } catch (err) {
    console.log(err);
  }
};

// UPDATE
export const updateProfile = async ({
  userId,
  fashionStyle,
  bodyShape,
}: UpdateProfileParams) => {
  try {
    await connectToDatabase();

    const updatedProfile = await Profile.findOneAndUpdate(
      { userId },
      {
        new: true,
      }
    );

    if (!updatedProfile) throw new Error("Profile update failed");
    return JSON.parse(JSON.stringify(updatedProfile));
  } catch (err) {
    console.log(err);
  }
};

// DELETE
export const deleteProfile = async ({
  userId,
  fashionStyle,
  bodyShape,
}: DeleteProfileParams) => {
  try {
    await connectToDatabase();

    // Find profile to delete
    const profileToDelete = await Profile.findOne({ userId });
    if (!profileToDelete) throw new Error("Profile not found");

    // Delete profile
    const deletedProfile = await Profile.findByIdAndDelete(profileToDelete._id);

    return deletedProfile ? JSON.parse(JSON.stringify(deletedProfile)) : null;
  } catch (err) {
    console.log(err);
  }
};
