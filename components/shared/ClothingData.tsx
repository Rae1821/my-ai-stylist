import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchClothing } from "@/utils";

const ClothingData = async () => {
  const allClothing = await fetchClothing();

  console.log(allClothing);

  return (
    <div>
      <h1>Clothing Data</h1>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ClothingData;
