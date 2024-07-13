import { auth } from "@/auth";
import { redirect } from "next/navigation";
// import ProfileModal from "./ProfileModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Calculator from "./Calculator";

const Profile = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main>
      {/* <ProfileModal /> */}
      <div className="container">
        <h1 className="text-xl font-semibold">Welcome, {session?.user.name}</h1>

        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>My Body Shape</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Your current body shape is: Pear
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Find My Shape</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <Calculator />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>My Fashion Style</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Your current fashion style is: Edgy
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Find My Fashion Style</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
