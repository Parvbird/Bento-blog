import React from "react";
import Image from "next/image";

type Props = {};

const FeaturedPage = (props: Props) => {
  const picture = "/images/header.jpg";
  return (
    <div className="w-full lg:flex max-md:flex-col justify-between gap-10 align-middle items-center">
      <div className="w-full rounded-3xl">
        <Image
          src={picture}
          alt=""
          width="5000"
          height="5000"
          className="w-full rounded-3xl"
        />
      </div>
      <div className="flex flex-col lg:mt-0 mt-10 justify-evenly gap-10 align-middle items-start w-full">
        <h1 className="text-3xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam
          reiciendis eligendi et aliquid debitis sed quisquam nisi harum, eaque
          laudantium cupiditate, doloribus eius vel cumque quaerat, labore
          similique! Cumque.
        </p>
        <button className="rounded-full bg-black text-white p-3 px-6">
          Read more
        </button>
      </div>
    </div>
  );
};

export default FeaturedPage;
