// "use client";

// import Link from "next/link";
// import { doCredentialLogin } from "@/app/actions";
// import { useRouter } from "next/navigation";

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
// import { FormEvent, useState } from "react";
// import SocialLogin from "./SocialLogin";

// type LoginResponse = {
//   error?: {
//     message: string;
//   };
// };

// export function LoginForm() {
//   const router = useRouter();
//   const [error, setError] = useState<string>("");

//   async function handleFormSubmit(
//     event: FormEvent<HTMLFormElement>
//   ): Promise<void> {
//     event.preventDefault();

//     try {
//       const formData = new FormData(event.currentTarget);

//       const response: LoginResponse = await doCredentialLogin(formData);

//       if (!response.error) {
//         setError(error);
//       } else {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Check your credentials");
//     }
//   }
//   return (
//     <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Login</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="text-xl text-red-500">{error}</div>
//         <form onSubmit={handleFormSubmit}>
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
//               Login
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
// }
