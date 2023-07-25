import React, { useState } from "react";
import Button from "../global/Button";

const AuthCard = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  return (
    <div className="w-[450px] h-[420px] border-2 mx-auto rounded-xl mt-3 shadow-lg px-3 py-4 flex flex-col items-center">
      <p className="text-xl text-center">{isAccountCreated?'Welcome back!':'Create your account'}</p>
      {isAccountCreated ? (
        <div className="flex flex-col items-center mt-4 px-4 space-y-8  grow w-full justify-center">
          <Input placeholder={"Enter Email"} />
          <Input placeholder={"Enter Password"} />
        </div>
      ) : (
        <div className="flex flex-col items-center mt-4 px-4 space-y-4 grow w-full justify-center">
          <div className="flex space-x-2 w-full ">
            <Input placeholder={"First Name"} />
            <Input placeholder={"Last Name"} />
          </div>
          <Input placeholder={"Enter Email"} />
          <Input placeholder={"Enter Password"} />
          <Input placeholder={"Confirm Password"} />
        </div>
      )}

      <Button className={"w-[300px] mt-10"}>
        {isAccountCreated ? "Sign In" : "Sign Up"}
      </Button>
      <p
        className="text-center text-primary cursor-pointer"
        onClick={() => setIsAccountCreated((prev) => !prev)}
      >
        {isAccountCreated ? "Create a account" : "Already have an account?"}
      </p>
    </div>
  );
};

const Input = ({ placeholder }) => {
  return (
    <input
      className="w-full p-3 text-sm bg-gray-100 rounded-lg active:outline-none focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default AuthCard;
