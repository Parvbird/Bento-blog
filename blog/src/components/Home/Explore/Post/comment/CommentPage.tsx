import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const CommentPage = (props: Props) => {
  const status = "authenticated";
  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-10 align-middle items-start">
      <h1 className="">Comment</h1>
      {status === "authenticated" ? (
        <div className="w-full lg:flex max-md:flex-col gap-5 align-middle items-center">
          <textarea
            name=""
            id=""
            className="w-full rounded-3xl p-5 "
            placeholder="Write a comment"
          ></textarea>
          <button className="bg-black p-3 px-6 rounded-3xl text-white lg:mt-0 mt-10">
            Post
          </button>
        </div>
      ) : (
        <Link href="">Login to write a commnet</Link>
      )}
      <div className="mt-10 flex flex-col gap-10 align-middle items-start w-full">
        <div className="flex gap-5 align-middle items-center w-full">
          <Image
            src="/images/header.jpg"
            alt=""
            width="100"
            height="100"
            className="rounded-full w-10 h-10"
          />
          <h1 className="text-xl">Username</h1>
        </div>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus facilis praesentium quo beatae nemo explicabo eos autem fuga veniam iure cupiditate error sunt ipsam porro temporibus, laborum ipsum sed recusandae!</p>
      </div>
    </div>
  );
};

export default CommentPage;
