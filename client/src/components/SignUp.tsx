import { SignupInput } from "@rashdriver213123/medium-common";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LabelledInput } from "./LablledInputs";

export default function AuthComponent() {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center  p-20 items-center min-h-screen  space-y-6">
      <div className="space-y-1">
        <h1 className="text-center font-bold text-3xl">Create Account</h1>
        <p className="text-center font-medium text-slate-500">
          Have an account?{" "}
          <Link to={"/signin"} className="underline">
            Sign in
          </Link>
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <LabelledInput
          label="Name"
          placeholder="name goes here"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              name: e.target.value,
            })
          }
        />
        <LabelledInput
          label="Email"
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
          placeholder="1212qdkasd"
          type="password"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              username: e.target.value,
            })
          }
        />

        <button className=" bg-black text-white py-2 rounded-md hover:bg-slate-800">
          Sign up
        </button>
      </div>
    </div>
  );
}
