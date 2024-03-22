"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {};

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Minimum 5 characters length")
    .required("Password is required"),
});

const RegisterPage = (props: Props) => {
  // const { data: session } = useSession();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      const signInValue = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      setFieldValue("error", JSON.stringify(signInValue?.error));
    },
  });

  return (
    <div className="w-full flex flex-col mx-auto justify-center h-screen align-middle items-center">
      <div className="bg-white rounded-3xl lg:p-10 p-2 flex flex-col gap-10 lg:w-[600px] mt-[80px] w-full align-middle items-center">
        <h1 className="text-3xl uppercase font-bold text-center">
          Welcome !
        </h1>
        <form
          action=""
          className="lg:w-[600px] flex flex-col gap-10 align-middle items-start p-10"
        >
          <div className="flex flex-col gap-8 align-middle items-start w-full">
            <p className="text-xl">Username: </p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              className="w-full rounded-full p-3 px-6 border border-black required:"
            />
          </div>
          <div className="flex flex-col gap-8 align-middle items-start w-full">
            <p className="text-xl">Email: </p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-full p-3 px-6 border border-black required:"
            />
          </div>
          <div className="flex flex-col gap-8 align-middle items-start w-full">
            <p className="text-xl">Password: </p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              className="w-full rounded-full p-3 px-6 border border-black required:"
            />
          </div>
          <button
            type="submit"
            className="bg-black p-3 px-6 w-full text-white rounded-full lg:mt-10 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
