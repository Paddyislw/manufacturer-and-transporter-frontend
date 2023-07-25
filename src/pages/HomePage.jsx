import React from "react";
import Button from "../global/Button";
import { roleTypes } from "../static/ProfileInfo";
import { useDispatch } from "react-redux";
import { setAccountType } from "../redux/ProfileSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const clickHandler = (type) => {
    dispatch(setAccountType(type));
    navigate('/auth')
  };
  return (
    <div className="h-[100dvh]">
      <div className="justify-center items-center flex h-full flex-col">
        <p className="text-2xl mb-6">Select the role for your account</p>
        <div className="space-y-2">
          <Button
            className="w-[200px]"
            onClick={() => clickHandler(roleTypes.Manufacturer)}
          >
            Manufacturer
          </Button>
          <p className="text-center">Or</p>
          <Button
            className="w-[200px]"
            onClick={() => clickHandler(roleTypes.Transporter)}
          >
            Transporter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
