import AtNavbarLink, {
  AtNavbarLinkProps,
} from "@/components/atoms/AtNavbarlink";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import Link from "next/link";

export interface OrNavbarProps {
  links: AtNavbarLinkProps[];
  logo: AtImageProps;
  search?: React.ReactNode;
}

export default function OrNavbar({ links = [], search, logo }: OrNavbarProps) {
  return (
    <div className="w-full w-flex flex-col  fixed top-0 z-50 bg-white ">
      <div className="flex flex-row justify-between items-center py-4 bg-blue-800 text-white px-4 pu-2"></div>
      <div className="flex flex-row justify-between items-center px-4 py-4 container mx-auto">
        <Link href="/">
          <AtImage className="rounded-full" {...logo} width={40} height={40} />
        </Link>

        {search && (
          <div className="hidden md:block w-full max-w-150">{search}</div>
        )}
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/login"
            aria-label="Login"
            className="w-10 h-10 p-2 rounded-full bg-orange-400 text-white"
          >
            <span className="material-icons">account_circle</span>
          </Link>
          <Link
            href="/cart"
            className="w-10 h-10 p-2 rounded-full bg-orange-400 text-white"
          >
            <span className="material-icons-outlined">shopping_bag</span>
          </Link>
        </div>
      </div>

      <nav className="w-full container mx-auto">
        <ul className="flex flex-row items-center justify-center w-full">
          {links.map((link) => (
            <li key={link.text}>
              <AtNavbarLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
