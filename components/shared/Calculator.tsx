"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
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

const formSchema = z.object({
  shoulders: z.string(),
  waist: z.string(),
  hips: z.string(),
});

const Calculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shoulders: "",
      waist: "",
      hips: "",
    },
  });

  const [shapeResults, setShapeResults] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const shoulders = +values.shoulders;
    const waist = +values.waist;
    const hips = +values.hips;

    console.log(values.waist);

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
  }

  const handleChecked = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const handleReset = () => {
    setShapeResults("");
    setIsChecked(false);
  };

  return (
    <div id="calculator" className="container mt-12">
      {/* <div className="mx-auto mt-24"> */}
      {/* <div> */}
      <h2 className="text-3xl font-semibold">Body Shape Calculator</h2>
      <p className="pb-4">
        Find out your body shape to get better fitting clothes
      </p>
      {/* </div> */}
      {/* </div> */}

      <div className="mx-auto w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="shoulders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
              <Button type="submit">Submit</Button>
              <Button type="reset" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </form>
        </Form>

        <div>
          <h2>Your body shape is: {shapeResults}</h2>
          <p>
            Save to profile?{" "}
            <span>
              <Switch checked={isChecked} onClick={handleChecked} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
