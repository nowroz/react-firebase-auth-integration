import { NavLink } from "react-router";

const NavigationLink = ({ path, name }) => {
  return (
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "underline text-gray-400"
            : isActive
              ? "underline"
              : "no-underline"
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
