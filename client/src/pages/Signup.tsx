import AuthComponent from "../components/Auth";
import Quote from "../components/Quote";

export default function Signup() {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <AuthComponent type="signup" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
