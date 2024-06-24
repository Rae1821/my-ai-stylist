import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="heroImage flex h-[600px] w-full flex-col items-center justify-center">
      <h1 className="-mt-12 mb-8 text-center text-4xl text-white lg:text-5xl">
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
      <p className="my-4 hidden text-white md:flex">
        Take our quiz to find out your unique fashion style!
      </p>
      <Button asChild size="lg">
        <Link href="/">Start Quiz</Link>
      </Button>
    </section>
  );
};

export default Hero;
