"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function AddSearchButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Search
    </Button>
  );
}
