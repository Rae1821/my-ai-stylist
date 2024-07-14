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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Calculator from "./Calculator";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import clientPromise from "@/lib/database";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise; // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

const Profile = async ({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const session = await auth();

  console.log(clientPromise);

  if (!session?.user) {
    redirect("/");
  }
  const userId = session?.user as string;
  console.log(userId);

  return (
    <main>
      {/* <ProfileModal /> */}
      <div className="container">
        <h1 className="text-xl font-semibold">Welcome, {session?.user.name}</h1>
        {isConnected ? (
          <h1>You are connected to MongoDB</h1>
        ) : (
          <h1>You are not connected to the database</h1>
        )}

        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>My Body Shape</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Your body shape is:
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Find My Shape</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogTitle>Body Shape Calculator</DialogTitle>
                    <DialogDescription className="mb-2">
                      Find out your body shape to get better fitting clothes
                    </DialogDescription>
                    <Calculator userId={userId} />
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
