import { navLinks } from "@/constants";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "../../app/(login)/components/Logout";
import { Button } from "../ui/button";

const Navbar = async () => {
  const session = await auth();

  console.log(session?.user);

  return (
    <nav>
      <ul className="flex w-full cursor-pointer flex-col items-start gap-5 text-sm font-semibold tracking-wider md:flex-row md:items-center md:justify-between">
        {navLinks.map((link) => (
          <li key={link.route}>
            <Link
              href={link.route}
              className="decoration-emerald-600 hover:underline hover:decoration-2 hover:underline-offset-2 hover:transition-all hover:duration-300 hover:ease-in"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {!session?.user ? (
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        ) : (
          <Logout />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
