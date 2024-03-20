import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const CategoryList = (props: Props) => {
  const picture = "/images/header.jpg";
  return (
    <div className=" mt-10 flex flex-col gap-10 align-middle items-start w-full">
      <h1 className="text-xl">Popular categories</h1>
      <div className="w-full grid xl:grid-cols-7 lg:grid-cols-5 gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 align-middle items-center">
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-pink-200 p-5 text-pink-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Styles</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-red-200 p-5 text-red-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Coding</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-blue-200 p-5 text-blue-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Culture</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-yellow-200 p-5 px-6 text-yellow-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Love</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-orange-200 p-5 text-orange-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Adventure</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-pink-200 p-5 text-pink-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Fashion</h1>
        </Link>
        <Link
          href="/explore?cat=style"
          className="rounded-3xl flex gap-3 align-middle items-center bg-pink-200 p-5 text-pink-700"
        >
          <Image
            src={picture}
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10"
          />
          <h1 className="text-xl">Music</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
