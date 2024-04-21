import { navItems } from "../../constants";

const Header = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src="logo" alt="logo" width={14} height={14} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navItems.map((item) => (
            <div
              key={item}
              className="px-5 text-sm cursor-pointer text-slate-700 hover:text-pink-600 transition-all"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src="" alt="search" width={18} height={18} />
          <img src="" alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
