import Link from "next/link";

export interface AtNavbarLinkProps {
  url: string;
  text: string;
  icon?: string;
  links?: AtNavbarLinkProps[];
}

export default function AtNavbarLink({ url, text }: AtNavbarLinkProps) {
  return (
    <Link
      className="text-base transition-colors ease-initial font-semibold border-b-2 hover:border-b-neutral-800/75 border-white text-neutral-800 hover:opacity-75 px-2 mx-2 py-2 inline-block"
      href={`${url}`}
      replace
    >
      {text}
    </Link>
  );
}
