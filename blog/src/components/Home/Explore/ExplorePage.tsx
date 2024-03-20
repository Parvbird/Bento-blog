import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedPage from "./FeaturedPage";
import CategoryList from "./CategoryList";

type Props = {};

const ExplorePage = (props: Props) => {
  const picture = "/images/header.jpg";

  return (
    <div className="w-full flex flex-col gap-10 align-middle items-start lg:p-10 p-3">
      <div className="mt-[150px] w-full flex align-middle items-start">
        <FeaturedPage />
      </div>
      <div className="w-full">
        <CategoryList />
      </div>
      <div className="flex w-full mt-10 justify-between align-middle items-center">
        <h1 className="text-2xl font-semibold">Recent posts</h1>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full align-middle items-center">
        <Link
          href="/explore/post"
          className="w-full rounded-3xl bg-white shadow-sm flex flex-col gap-3 align-middle items-start"
        >
          <div className="w-full rounded-t-3xl">
            <Image
              src={picture}
              alt=""
              width="5000"
              height="5000"
              className="w-full rounded-t-3xl"
            />
          </div>
          <div className="w-full p-5 flex flex-col gap-3 align-middle items-start">
            <h1 className="text-xl">Title description</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              suscipit laboriosam molestiae repellendus fugit! Incidunt nostrum
              ipsum tempora accusantium iure.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
