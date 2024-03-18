import React from "react";
import Image from "next/image";

type Props = {};

const Homepage = (props: Props) => {
  const picture = "/images/header.jpg";

  return (
    <div className="w-full flex flex-col gap-20 align-middle items-start lg:p-10 p-3">
      <div className="mt-[150px] flex w-full align-middle items-start">
        <h1 className="text-4xl font-bold uppercase lg:text-7xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum.
        </h1>
      </div>
      <div className="rounded-3xl w-full">
        <Image
          src={picture}
          alt="header image"
          className="rounded-3xl w-full"
          width="5000"
          height="5000"
        />
      </div>
    </div>
  );
};

export default Homepage;
