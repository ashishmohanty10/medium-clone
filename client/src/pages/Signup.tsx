import Quote from "../components/Quote";
import SignUpComponent from "../components/SignUp";

export default function Signup() {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <SignUpComponent />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
