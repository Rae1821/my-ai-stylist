// "use client";

// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import SocialLogin from "./SocialLogin";
// import { useRouter } from "next/navigation";
// import React from "react";

// const SignUp = () => {
//   const router = useRouter();

//   const handleRegisterSubmit = async (e: React.SyntheticEvent) => {
//     e.preventDefault();

//     try {
//       const target = e.target as typeof e.target & {
//         email: { value: string };
//         password: { value: string };
//       };
//       const email = target.email.value;
//       const password = target.password.value;
//       // const formData = new FormData(e.currentTarget);

//       // const email = formData.get("email");
//       // const password = formData.get("password");

//       await fetch(`/api/register`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       router.push("/");

//       return new Response(JSON.stringify(target), { status: 201 });
//     } catch (error) {
//       return new Response(JSON.stringify(error), { status: 500 });
//     }
//   };

//   return (
//     <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Sign Up</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         {/* <div className="text-xl text-red-500">{error}</div> */}
//         <form onSubmit={handleRegisterSubmit}>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <Link
//                   href="#"
//                   className="ml-auto inline-block text-sm underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//             <Button type="submit" className="w-full">
//               Sign Up
//             </Button>
//           </div>
//         </form>
//         <div className="mt-4">
//           <SocialLogin />
//         </div>
//         <div className="mt-4 text-center text-sm">
//           Don&apos;t have an account?{" "}
//           <Link href="/sign-up" className="underline">
//             Sign up
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default SignUp;
