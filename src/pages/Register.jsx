import { Link } from "react-router";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    console.log("Register: ", email, password);

    createUser(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.error(error));
  };

  return (
    <main className="container mx-auto px-4">
      <section className="">
        <form onSubmit={handleRegister} className="w-1/3 mx-auto">
          <fieldset className="border border-slate-300 rounded-lg p-6 flex flex-col gap-4">
            <legend className="text-sm font-bold text-gray-600">
              Register
            </legend>
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
              Register
            </button>
            <p className="text-sm flex items-center gap-1">
              Already have an account?
              <Link
                className="text-blue-500 hover:text-blue-400 underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Register;
