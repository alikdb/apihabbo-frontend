import Logo from "./logo";
import routes from "~/utils/routes";
import NavItem from "./item";
const Sidebar = () => {
  return (
    <div className="hidden lg:flex">
      <aside className="flex fixed flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <Logo />
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            {routes.map((routes, index) => (
              <div key={index} className="space-y-3 ">
                <label
                  key={index}
                  className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
                >
                  {routes.name}
                </label>
                {routes.items.map((item, index) => (
                  <NavItem key={index} item={item} />
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
