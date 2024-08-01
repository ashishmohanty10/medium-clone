import Quote from "../components/Quote";
import SignInComponent from "../components/SignIn";

export default function Signin() {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <SignInComponent />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
