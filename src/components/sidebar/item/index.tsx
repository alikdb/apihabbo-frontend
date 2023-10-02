import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
interface NavItemProps {
  item: {
    path: string;
    name: string;
    icon: JSX.Element;
  };
}

const NavItem = ({ item }: NavItemProps) => {
  const location = useLocation();
  const active = location.pathname === item.path;
  return (
    <Link
      className={classNames(
        "flex items-center px-3 py-2 text-gray-600 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700",
        { "bg-gray-100 dark:bg-gray-800 dark:text-gray-200": active }
      )}
      to={item.path}
    >
      {item.icon}
      <span className="mx-2 text-sm font-medium">{item.name}</span>
    </Link>
  );
};

export default NavItem;
