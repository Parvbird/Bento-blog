"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"

type Props = {};

const WritePage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="w-full flex flex-col gap-10 align-middle items-start lg:p-10 p-3">
      <div className="mt-[150px] flex flex-col gap-10 align-middle items-start w-full">
        <input type="text" placeholder="Title" className="w-full p-5 rounded-3xl bg-transparent text-2xl outline-none" />
        <div className="w-full flex gap-10 align-middle items-center">
          <button className="" onClick={() => setOpen(!open)}>
            <Image
              src="/images/header.jpg"
              alt=""
              width="100"
              height="100"
              className="rounded-full w-10 h-10"
            />
          </button>
          {open && (
            <div className="flex gap-10 align-middle items-center">
              <button className="">
                <Image
                  src="/images/header.jpg"
                  alt=""
                  width="100"
                  height="100"
                  className="rounded-full w-10 h-10"
                />
              </button>
              <button className="">
                <Image
                  src="/images/header.jpg"
                  alt=""
                  width="100"
                  height="100"
                  className="rounded-full w-10 h-10"
                />
              </button>
              <button className="">
                <Image
                  src="/images/header.jpg"
                  alt=""
                  width="100"
                  height="100"
                  className="rounded-full w-10 h-10"
                />
              </button>
            </div>
          )}
        </div>
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story ....." className="w-full bg-transparent p-5 text-xl important"/>
      </div>
      <button className="bg-black text-white p-3 px-8 rounded-full mt-20">Publish</button>
    </div>
  );
};

export default WritePage;
