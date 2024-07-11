"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProfileModal = () => {
  return (
    <section className="container bg-teal-800/70 py-12">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Jane Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Height
                  </Label>
                  <Input id="height" value="" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="style" className="text-right">
                    Fashion Style
                  </Label>
                  <Input id="style" value="edgy" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="shape" className="text-right">
                    Body Shape
                  </Label>
                  <Input id="shape" value="pear" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ProfileModal;
