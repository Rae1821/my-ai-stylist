"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const shoulders = +values.shoulders;
    const waist = +values.waist;
    const hips = +values.hips;

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
  }

  return (
    <div id="calculator" className="container">
      <div className="mx-auto my-24 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-4">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold">Body Shape Calculator</h2>
          <p>Find out your body shape to get better fitting clothes</p>
        </div>

        <div className="md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="shoulders"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shoulder Measurement</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormDescription>
                      Measure around your shoulders in inches
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
                      Measure around fullest part of hips in inches
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-2 w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <div>
        <h2>{shapeResults}</h2>
      </div>
    </div>
  );
};

export default Calculator;
