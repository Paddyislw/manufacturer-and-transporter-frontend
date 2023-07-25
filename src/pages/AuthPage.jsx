import React from "react";
import { useSelector } from "react-redux";
import { selectAccountType } from "../redux/ProfileSlice";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const AuthPage = () => {
  const accountType = useSelector(selectAccountType);
  const navigate = useNavigate();
  return (
    <div className="h-[100dvh] justify-center items-center flex flex-col">
      <div>
        <button onClick={() => navigate("/")} className="mr-auto">
          back
        </button>
        {/* <p className="text-center mx-auto text-2xl">
          SignIn/SignUp for {accountType}
        </p> */}
        <AuthCard />
      </div>
    </div>
  );
};

export default AuthPage;
