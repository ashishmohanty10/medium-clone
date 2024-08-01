import { ChangeEvent } from "react";

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <form action="" className="w-[450px] flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor={label} className="text-lg font-medium ">
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
