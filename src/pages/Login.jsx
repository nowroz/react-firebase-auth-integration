import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        event.target.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => console.error(error));
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="container mx-auto px-4">
      <section className="">
        <form onSubmit={handleLogIn} className="w-1/3 mx-auto">
          <fieldset className="border border-slate-300 rounded-lg p-6 flex flex-col gap-4">
            <legend className="text-sm font-bold text-gray-600">Login</legend>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 border border-slate-300 rounded placeholder:text-gray-400 focus:outline-gray-400"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="true"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="px-3 py-2 border border-slate-300 rounded placeholder:text-gray-400 focus:outline-gray-400"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button className="px-3 py-2 bg-slate-800 border rounded border-slate-300 shadow-md shaodw-slate-600 text-white font-bold cursor-pointer hover:bg-slate-700 active:scale-[99.60%] active:translate-y-[2%]  active:shadow-none">
              Login
            </button>

            <button
              onClick={handleSignInWithGoogle}
              type="button"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 border rounded border-slate-300 shadow-md shaodw-slate-600 text-white font-bold cursor-pointer hover:bg-slate-700 active:scale-[99.60%] active:translate-y-[2%]  active:shadow-none"
            >
              <FcGoogle></FcGoogle> Sign in with Google
            </button>

            <p className="text-sm flex items-center gap-1">
              Don't have an account?
              <Link
                className="text-blue-500 hover:text-blue-400 underline"
                to="/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Login;
