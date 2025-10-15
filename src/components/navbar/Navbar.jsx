import { useContext } from "react";
import NavigationLink from "../navigationLink/NavigationLink";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router";

const navPaths = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/login", name: "Login" },
  { id: 3, path: "/register", name: "Register" },
  { id: 4, path: "/dashboard", name: "Dashboard" },
];

const privatePaths = [
  { id: 5, path: "/orders", name: "Orders" },
  { id: 6, path: "/profile", name: "Profile" },
];

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out successfully"))
      .catch((error) => console.error(error));
  };

  const signOutButton = (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 border rounded bg-slate-800 text-white font-medium cursor-pointer"
    >
      Sign Out
    </button>
  );

  const loginButton = (
    <Link
      to="/login"
      className="px-4 py-2 border rounded bg-slate-800 text-white font-medium"
    >
      Login
    </Link>
  );

  const privateNavigationLinks = privatePaths.map((privatePath) => (
    <NavigationLink
      key={privatePath.id}
      path={privatePath.path}
      name={privatePath.name}
    ></NavigationLink>
  ));

  return (
    <nav className="container mx-auto p-4 flex items-center justify-between">
      <h3>Navbar</h3>
      <ul className="flex items-center gap-8">
        {navPaths.map((navPath) => (
          <NavigationLink
            key={navPath.id}
            path={navPath.path}
            name={navPath.name}
          ></NavigationLink>
        ))}
        {user && privateNavigationLinks}
      </ul>
      {user ? signOutButton : loginButton}
    </nav>
  );
};

export default Navbar;
