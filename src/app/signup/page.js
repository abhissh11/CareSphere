"use client";
import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function SignUpPage() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const authInstance = auth; // Get the auth instance from Firebase
      const userCredential = await createUserWithEmailAndPassword(
        authInstance,
        email,
        password
      ); // Use createUserWithEmailAndPassword function

      console.log("Sign up successful. User credentials:", userCredential.user);

      window.location.href = "/signin";
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center mx-10 my-14">
      <div className="flex-1 flex-col gap-4">
        <div className="flex flex-col items-start gap-4">
          <Link href={"/"}>
            <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-green-700 px-2 py-1 rounded-md text-white ">
              CareShare
            </h1>
          </Link>
          <p>
            CareShare is dedicated to making a positive impact on the lives of
            individuals and communities in need. Through our various programs
            and initiatives, we strive to address key areas of concern
          </p>
        </div>
      </div>
      <div className="flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center w-full "
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="px-4 rounded-md border-l-4 border-green-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-sm font-semibold">Your Email</label>
            <input
              type="email"
              placeholder="name@careshare.com"
              id="email"
              className="px-4 border-l-4 border-green-500 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xm font-semibold ">Password</label>
            <input
              type="password"
              placeholder="234@abds"
              id="password"
              className="px-4 rounded-md  border-l-4 border-green-500 "
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500  px-[6.2rem]  py-2 rounded-md text-white hover:bg-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="pt-4 text-center">
          Already have an account?
          <Link href={"/signin"}>
            <span className="text-green-500 pl-2 cursor-pointer hover:underline">
              Login..
            </span>
          </Link>
        </p>
        {error && <p className="text-red-500">{error}</p>}{" "}
      </div>
    </div>
  );
}
