import { useState } from "react";
import { LabelledInput } from "./LablledInputs";
import { SigninInput } from "@rashdriver213123/medium-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function SignInComponent() {
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (error) {
      alert("Error while signin");
      console.log("Request Failed");
    }
  }

  return (
    <div className="flex flex-col justify-center  p-20 items-center min-h-screen  space-y-6">
      <div className="space-y-1">
        <h1 className="text-center font-bold text-3xl">Login Here</h1>
        <p className="text-center font-medium text-slate-500">
          Don't have an account?{" "}
          <Link to={"/signup"} className="underline">
            Sign up
          </Link>
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <LabelledInput
          label="Email"
          type="email"
          placeholder="me@gmail.com"
          onChange={(e) =>
            setSigninInputs({
              ...signinInputs,
              username: e.target.value,
            })
          }
        />

        <LabelledInput
          label="Password"
          type="password"
          placeholder="1212qdkasd"
          onChange={(e) =>
            setSigninInputs({
              ...signinInputs,
              password: e.target.value,
            })
          }
        />
        <button
          onClick={sendRequest}
          className=" bg-black text-white py-2 rounded-md hover:bg-slate-800"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
