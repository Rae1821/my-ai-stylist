import React from "react";
import { doSocialLogin } from "@/app/actions";
import { Button } from "../../../components/ui/button";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <Button
        type="submit"
        name="action"
        value="google"
        className="w-full border-2 border-teal-600 bg-teal-600 text-white hover:bg-teal-600 hover:text-white"
      >
        Sign In With Google
      </Button>
    </form>
  );
};

export default SocialLogin;
