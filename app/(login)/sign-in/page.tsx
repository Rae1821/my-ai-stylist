// import { LoginForm } from "@/components/shared/LoginForm";
import SocialLogin from "@/components/shared/SocialLogin";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div className="mx-auto mt-24 w-full p-4 md:w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Click the button below to login with your google account
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <SocialLogin />
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
