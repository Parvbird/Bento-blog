import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const LoginPage = (props: Props) => {
  const logo = "/images/google.png";
  return (
    <div className="w-full flex flex-col mx-auto justify-center h-screen align-middle items-center">
      <div className="bg-white rounded-3xl p-10 flex flex-col gap-10 lg:w-[500px] w-full align-middle items-center">
        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <Link
          href=""
          className="rounded-3xl bg-black text-white p-3 px-8 align-middle flex gap-5 items-center"
        >
          <Image
            src={logo}
            alt="google logo"
            width="100"
            height="100"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-xl">Login with Google</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
