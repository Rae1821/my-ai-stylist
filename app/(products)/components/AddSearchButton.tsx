"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

export function AddSearchButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="bg-pink-500">
      <Image
        src="/icons/magnifying-glass.svg"
        alt="search"
        width={20}
        height={20}
        className="text-white"
      />
    </Button>
  );
}
