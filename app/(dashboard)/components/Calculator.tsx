"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";
import { createProfile } from "@/lib/actions/profile.actions";

const formSchema = z.object({
  shoulders: z.string(),
  waist: z.string(),
  hips: z.string(),
  checked: z.boolean(),
});

type CalculatorProps = {
  userId: string;
};

const Calculator = ({ userId }: CalculatorProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shoulders: "",
      waist: "",
      hips: "",
      checked: false,
    },
  });
  const router = useRouter();

  const [shapeResults, setShapeResults] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const shoulders = +values.shoulders;
    const waist = +values.waist;
    const hips = +values.hips;

    // console.log(values.waist);

    try {
      if (hips / shoulders >= 1.05 && waist < hips) {
        setShapeResults("Pear");
      } else if (shoulders / hips >= 1.05 && waist === shoulders) {
        setShapeResults("Apple");
      } else if (
        waist / shoulders <= 0.75 &&
        waist / hips < 0.75 &&
        hips * 0.95 < shoulders
      ) {
        setShapeResults("Hourglass");
      } else if (shoulders / hips >= 1.05 && waist < shoulders) {
        setShapeResults("Triangle");
      } else if (waist / shoulders >= 0.75 && shoulders * 0.95 < hips) {
        setShapeResults("Rectangle");
      } else if (shoulders === null || waist === null || hips === null) {
        console.log("Please fill in all fields");
      }

      return shapeResults;
    } catch (err) {
      console.log(err);
    }

    handleSaveToProfile();
  }

  const handleChecked = async () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const handleSaveToProfile = async () => {
    handleChecked();

    if (isChecked) {
      try {
        const newProfile = await createProfile({
          userId,
          fashionStyle: "",
          bodyShape: shapeResults,
          path: "/profile",
        });

        if (newProfile) {
          router.push(`/profile/${newProfile._id}`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleReset = () => {
    setShapeResults("");
    setIsChecked(false);
  };

  return (
    <div id="calculator" className="container">
      {/* <h2 className="text-3xl font-semibold">Body Shape Calculator</h2>
      <p className="pb-4">
        Find out your body shape to get better fitting clothes
      </p> */}

      <div className="mx-auto w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-8 space-y-8"
          >
            <FormField
              control={form.control}
              name="shoulders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shoulder Measurement</FormLabel>
                  <FormControl>
                    <Input placeholder="39" {...field} />
                  </FormControl>
                  <FormDescription>
                    Measure around shoulders in inches
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="waist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waist Measurement</FormLabel>
                  <FormControl>
                    <Input placeholder="29" {...field} />
                  </FormControl>
                  <FormDescription>
                    Measure around waist in inches
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hips"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hip Measurement</FormLabel>
                  <FormControl>
                    <Input placeholder="41" {...field} />
                  </FormControl>
                  <FormDescription>
                    Measure around hips in inches
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <p className="flex items-center gap-4 text-sm font-semibold tracking-wide">
                Save shape to profile?{" "}
                <span className="">
                  <Switch checked={isChecked} onClick={handleChecked} />
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Calculate Shape</Button>
              <Button
                type="reset"
                variant="ghost"
                onClick={handleReset}
                className="decoration-teal-600 decoration-2 hover:bg-transparent hover:underline hover:underline-offset-4"
              >
                Start Over
              </Button>
            </div>
          </form>
        </Form>
        <Separator />
        <div className="mt-8">
          <h2 className="mb-4 text-lg">
            Your body shape is: <span className="text-2xl">{shapeResults}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
