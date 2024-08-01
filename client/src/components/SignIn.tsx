import { useState } from "react";
import { LabelledInput } from "./LablledInputs";
import { SigninInput } from "@rashdriver213123/medium-common";
import { Link } from "react-router-dom";

export default function SignInComponent() {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });
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
            setPostInputs({
              ...postInputs,
              username: e.target.value,
            })
          }
        />

        <LabelledInput
          label="Password"
          type="password"
          placeholder="1212qdkasd"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            })
          }
        />
        <button className=" bg-black text-white py-2 rounded-md hover:bg-slate-800">
          Sign in
        </button>
      </div>
    </div>
  );
}
