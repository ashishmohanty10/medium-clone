import { AvatarName } from "./BlogCard";

export default function Navbar() {
  return (
    <div className="border-b border-slate-200 flex justify-between items-center px-10 py-4">
      <div className="text-2xl font-bold">Medium.</div>

      <div>
        <AvatarName name="Ashish" size="big" />
      </div>
    </div>
  );
}
