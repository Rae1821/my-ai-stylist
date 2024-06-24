import Image from "next/image";
import { navItems } from "../../constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="flex w-full">
        <div className="flex items-center gap-1">
          <Image src="/icons/sparkles.svg" alt="logo" width={24} height={24} />
          <p className="font-semibold">My AI Stylist</p>
        </div>
        <div className="flex flex-1 items-center justify-center max-sm:hidden">
          {navItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer px-5 text-sm text-slate-700 transition-all hover:text-pink-600"
            >
              {item}
            </div>
          ))}
          <Link href="/recommendations">Recommendations</Link>
        </div>

        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <Image
            src="/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/bag.svg"
            alt="bag"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
