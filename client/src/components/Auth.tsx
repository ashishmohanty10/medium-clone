import { SignupInput } from "@rashdriver213123/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function AuthComponent({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const request = await axios.post(`${BACKEND_URL}/api/v1/user/signup`);
      return request;
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <div className="flex flex-col justify-center  p-20 items-center min-h-screen  space-y-6">
      <div className="space-y-1">
        <h1 className="text-center font-bold text-3xl">Create Account</h1>
        <p className="text-center font-medium text-slate-500">
          {type === "signin"
            ? "Don't have an account? "
            : "Already have an account?"}{" "}
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className="underline"
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        {type === "signup" ? (
          <LabelledInput
            label="Username"
            placeholder="Username goes here"
            onChange={(e) =>
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              })
            }
          />
        ) : null}

        <LabelledInput
          label="Email"
          type="email"
          placeholder="me@gmail.com"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              name: e.target.value,
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
              name: e.target.value,
            })
          }
        />
        <button className=" bg-black text-white py-2 rounded-md hover:bg-slate-800">
          {type === "signup" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <form action="" className="w-[450px] flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="username" className="text-lg font-medium ">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          placeholder={placeholder}
          name="username"
          className="border border-slate-400 rounded-md px-4 py-1"
        />
      </div>
    </form>
  );
}
