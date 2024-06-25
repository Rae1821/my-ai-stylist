"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import FormModal from "./FormModal";

const Profile = () => {
  return (
    <main>
      <section className="container mt-12">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="mr-2 rounded-full bg-gray-100 p-4">
              <Image
                src="/icons/user.svg"
                alt="avatar"
                height={24}
                width={24}
                className=""
              />
            </div>
            <div className="leading-snug">
              <p>Name</p>
              <p>Style Hub</p>
            </div>
          </div>

          <div className="">
            <Button>Edit Profile</Button>
          </div>
        </div>

        <FormModal />
      </section>
    </main>
  );
};

export default Profile;
