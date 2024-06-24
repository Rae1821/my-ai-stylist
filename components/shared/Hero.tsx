import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="heroImage mx-auto flex h-[800px] w-full items-center">
      <div className="ml-32 flex w-full flex-col md:w-1/3">
        <h1 className="text-3xl font-semibold lg:text-4xl">
          Discover Your Fashion{" "}
          <span className="relative inline-block">
            Style{" "}
            <Image
              src="/images/curve.png"
              className="absolute left-0 top-full w-full xl:-mt-2"
              width={624}
              height={28}
              alt="curve"
            />
          </span>
        </h1>
        <p className="mb-8 mt-2 hidden md:flex">
          Take our quiz to find out your unique fashion style!
        </p>
        <Button asChild size="lg" className="w-3/4 bg-[#038c8c]">
          <Link href="/">Start Quiz</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
